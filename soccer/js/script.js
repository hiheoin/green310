$(document).ready(function(){

    // 스크롤을 할 때마다 article이 뒤에서부터 앞으로 이동한다

    $(window).scroll(function(){

        let sc = $(this).scrollTop()

        // if(sc>=0 && sc<5000){
        //     $('section article').removeClass('on')
        //     $('section article').eq(0).addClass('on')
        // }

        // if(sc>=5000-2500 && sc<10000-2500){
        //     $('section article').removeClass('on')
        //     $('section article').eq(1).addClass('on')
        // }

        // if(sc>=10000-2500 && sc<15000-2500){
        //     $('section article').removeClass('on')
        //     $('section article').eq(2).addClass('on')
        // }

        // if(sc>=15000-2500 && sc<20000-2500){
        //     $('section article').removeClass('on')
        //     $('section article').eq(3).addClass('on')
        // }

        // if(sc>=20000-2500 && sc<24000-2500){
        //     $('section article').removeClass('on')
        //     $('section article').eq(4).addClass('on')
        // }

        
        // $('section article').eq(4).css({'transform':'translateZ('+(-(5000*4)+sc)+'px)'})

        // 0부터 시작해서 4까지 반복해서 진행해라

        for(var a = 0; a<5; a++){
            $('section article').eq(a).css({'transform':'translateZ('+(-(5000*a)+sc)+'px)'})
            
            if(sc>=(5000*a)-2500 && sc<(5000*(a+1))-2500){
                $('section article').removeClass('on');
                $('section article').eq(a).addClass('on');
                $('nav ul li').removeClass('on')
                $('nav ul li').eq(a).addClass('on')

            };

        };

    });


    // nav의 li를 클릭할 때마다 스크롤이 움직여라
    $('nav ul li').click(function(){

        let i = $(this).index()

        $('html,body').stop().animate({scrollTop:5000*i},1400);

    });


    // 마우스휠을 했을 때, 스크롤의 위치를 바꾸어라

        let mo = 0;

    $(window).mousewheel(function(event,delta){


        // 마우스를 올렸을 때
        if(delta>0){
            if(mo>0)mo--;
            console.log(mo)
            $('html,body').stop().animate({scrollTop:5000*mo},1400)
        };

        // 마우스를 내렸을 때
        if(delta<0){
            if(mo<4)mo++;
            console.log(mo)
            $('html,body').stop().animate({scrollTop:5000*mo},1400)
        };

    });


    // article에서 마우스가 움직였을 때 이미지가 움직여라
    $('section article').mousemove(function(e){
        // 위의 e랑 아래 e는 통일(event로 쓸 거면 둘 다 event)
        let x = e.pageX/100;
        let y = e.pageY/100;


        $(this).find('.obj51').css({'bottom':(-590+y)+'px','left':(-100+x)+'px'})
        // this에서 find 해야 해당 아티클에서 마우스 움직일 때만 이미지 움직임
        $(this).find('.obj52').css({'top':(-150+y)+'px','right':(30-x)+'px'})
        $(this).find('.obj53').css({'bottom':(70-y)+'px','left':(-30-x)+'px'})

        $(this).find('.obj41').css({'bottom':(-200+y)+'px','left':(350+x)+'px'})
        $(this).find('.obj42').css({'top':(-190-y)+'px','right':(290+x)+'px'})
        $(this).find('.obj43').css({'bottom':(100-y)+'px','left':(500-x)+'px'})

        // .obj31 { bottom:70px; right:110px;}
        // .obj32 { bottom:-160px; left:100px;}

        $(this).find('.obj31').css({'bottom':(-150+y)+'px','right':(110+x)+'px'})
        $(this).find('.obj32').css({'bottom':(-50-y)+'px','left':(100+x)+'px'})


// .obj21 { bottom:-420px; right:-710px;}
// .obj22 { bottom:-100px; right:-50px;}
$(this).find('.obj21').css({'bottom':(-500+y)+'px','right':(-710+x)+'px'})
$(this).find('.obj22').css({'bottom':(-50-y)+'px','right':(-50-x)+'px'})



// .obj11 { bottom:-100px; left:-270px;}
// .obj12 { top:-85px; right:-593px;}
// .obj13 { bottom:20px; left:-100px;}
$(this).find('.obj11').css({'bottom':(-100+y)+'px','left':(-270+x)+'px'})
$(this).find('.obj41').css({'top':(-85-y)+'px','right':(-593+x)+'px'})
$(this).find('.obj13').css({'bottom':(20-y)+'px','left':(-100-x)+'px'})


    })






}); //끝