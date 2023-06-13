$(document).ready(function(){

    let ht = $(window).height();

    $('section').height(ht);

    // 리사이즈 될 때마다 윈도우 height값을 구해서 자동으로 바뀌어라
    $(window).resize(function(){
        
        let ht = $(window).height();
        $('section').height(ht);

    });


    // nav의 li를 클릭할 때마다 scrollTop의 위치를 바꾸어라
    $(window).scroll(function(){

        let sc = $(window).scrollTop()

        $('h1').text(sc)

        // 스크롤했을 때 nav의 색 변경
        let ht = $(window).height();

        // if(sc>=ht*0 && sc<ht*1){
        //     $('nav li').removeClass('on')
        //     $('nav li').eq(0).addClass('on')
        // }
        
        // if(sc>=ht*1 && sc<ht*2){
        //     $('nav li').removeClass('on')
        //     $('nav li').eq(1).addClass('on')
        // }

        // if(sc>=ht*2 && sc<ht*3){
        //     $('nav li').removeClass('on')
        //     $('nav li').eq(2).addClass('on')
        // }

        // if(sc>=ht*3 && sc<ht*4){
        //     $('nav li').removeClass('on')
        //     $('nav li').eq(3).addClass('on')
        // }

            // 반복문을 활용한 축약 설정
        for(var a=0; a<4; a++){
            if(sc>=ht*a && sc<ht*a+1){
                $('nav li').removeClass('on')
                $('nav li').eq(a).addClass('on')
            }
        }

        
    });


    $('nav li').click(function(e){
        // 글씨가 a에 있어서 콘솔로그 안 됨, 그래서 a가 가진 기존 event 무력화 하는 것
        // 근데 링크로 보내는 a의 이벤트는 지우면 안 됨
        e.preventDefault()

        let i = $(this).index()
        console.log(i);

        // 화면 높이값은 계속 새로 구해야 함. 안 그러면 펑션에 가려지기 때문에 
        let ht = $(window).height();

        $('html,body').stop().animate({scrollTop:ht*i},1400)

        // 클릭했을 때 nav의 색 변경
        $('nav li').removeClass('on')
        $(this).addClass('on')

    });


    // section 위에서 마우스를 올릴 때 내릴 때 이벤트가 발생한다

    $('section').mousewheel(function(event,delta){
        

        if(delta>0){
            let prev = $(this).prev().offset().top 

            $('html,body').stop().animate({scrollTop:prev},1400,'easeOutBounce')
        }
        else if(delta<0){
            let next = $(this).next().offset().top 

            $('html,body').stop().animate({scrollTop:next},1400,'easeOutBounce')
        }

        

    })


    /* 
    // 예제 : 윈도우에서 마우스를 올렸을 때, 마우스올림 글씨 출력
    // 윈도우에서 마우스를 내렸을 때, 마우스내림 글씨 출력
    $(window).mousewheel(function(event,delta){
                                // 이벤트가 일어날 거고, delta값을 받아와라
        event.preventDefault()
        // 원래 마우스휠의 이벤트값을 지워버리고 delta값을 받아와서 써라

        // 마우스를 올렸을 때
        if(delta>0){
            $('h1').text('마우스올림')
        }

        // 마우스를 내렸을 때
        else if(delta<0){
            $('h1').text('마우스내림')
        }
    }) 
    */
    
    

//     /* 첫 번째 섹션 */
// .p11 {right: 20px;
//     bottom: 20px;}
// .p12 {right: 130px;
//     bottom: -40px;}
// .p13 {right: 60px;
//     top: 180px;}

//     /* 두 번째 섹션 */
// .p21 {right: -200px;
//     bottom: -500px;}
// .p22 {right: 100px;
//     bottom: -15px;}

//     /* 세 번째 섹션 */
// .p31 {right: 100px;
//     bottom: -50px;}
// .p32 {right: 130px;
//     bottom: -300px;}
// .p33 {right: -10px;
//     top: 200px;}

//     /* 네 번째 섹션 */
// .p41 {right: -100px;
//     bottom: -100px;}
// .p42 {right: 100px;
//     bottom: -100px;}


    $('section').mousemove(function(e){
        // 마우스 좌표값을 찾는 이벤트가 발생해야 하기 때문에 e써줌
        
        let x = e.pageX;
        let y = e.pageY;
        
            console.log(x,y)

        $(this).find('.p11').css({'right':20-(x/30),'bottom':20-(y/30)})
        $(this).find('.p12').css({'right':20+(x/30),'bottom':20+(y/30)})
        $(this).find('.p13').css({'right':20-(x/20),'bottom':20-(y/20)})
    
        $(this).find('.p21').css({'right':-200-(x/30),'bottom':-500-(y/30)})
        $(this).find('.p22').css({'right':100+(x/30),'bottom':-15+(y/30)})
    
        $(this).find('.p31').css({'right':100-(x/30),'bottom':-50-(y/30)})
        $(this).find('.p32').css({'right':130+(x/30),'bottom':-300+(y/30)})
        $(this).find('.p33').css({'right':-10-(x/30),'top':200-(y/30)})

        $(this).find('.p41').css({'right':-100-(x/30),'bottom':-100-(y/30)})
        $(this).find('.p42').css({'right':100+(x/30),'bottom':-100+(y/30)})
    

    })


    

}) //제이쿼리 끝