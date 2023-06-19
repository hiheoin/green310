$(document).ready(function(){

    let imgs = '';

    for(var i = 0; i<200; i++){

    imgs+='<img src="img/pic'+i+'.jpg" alt="">'
    

    }

    $('section').html(imgs);


    // 마우스를 움직일 때마다 한 장씩 사진이 보여라

    $('section').mousemove(function(e){
        
        let x = e.pageX
        let wd = $(window).width()

        // 와이드값 통일하기 & 자연수 만들기
        let percent = Math.floor((x/wd)*200)
                                // 획득값/전체값 * 백분율 -> 여기에서 200 곱한 이유는 사진이 200개라서


        $('h1').text(percent)


        $('section>img').hide()
        $('section>img').eq(percent).show()
        


    })





}); //끝