$(document).ready(function(){

    // article의 가로값을 구하고
    // article의 개수를 두하고
    // 가로값과 개수를 곱해서 section의 가로값에 대입해라


    // 개수 구하기
    let numAc = $('article').size();
        // 아티클끼리만 섹션에 묶여있기 때문에 개수 찾기 가능
        // 이건 nth랑 동일하게 숫자 나옴 (그래서 20 나오는 거)
    console.log(numAc);

    // 가로값 구하기
    let widAc = $('article').width();
        // 마진값 빼고 나옴
    console.log(widAc)

    // 세로값 구하기
    let htAc = $('article').height();
    console.log(htAc)

    let winht = $(window).height();
    console.log(winht)

    let secTop = (winht/2)-(htAc/2)

    // 섹션 가로값 설정하기
    $('section').width(600+(widAc+20)*numAc);
    $('body').height((widAc+20)*numAc);

    $('section').height(htAc+20);
    
    $('section').css({'top':secTop})
            // 항상 내비가 섹션 위에 있게 secTop-50
    $('nav').css({'top':secTop-50})


    $(window).scroll(function(){

        let sc = $(this).scrollTop()
        // $('h1').text(sc)

        $('section').css({'left':-sc})

    });


    $('article h2').click(function(){

        // 여기에서 섹션의 크기가 커져야 하는데 그냥 위에서 구한 섹션에 600 더해줌

        $('article').stop().animate({width:180,height:400},500)
        $(this).parent('article').css({'opacity':'1'}).stop().animate({width:600,height:600},800)
        $(this).css({'background-color':'#ddd'})
    });


    
});               // 마지막