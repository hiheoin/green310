$(document).ready(function(){

// window.onload 와 같은 개념

// article에 마우스가 들어갔을 때, 본인이 커져라
// article에 마우스가 들어갔을 때, 본인 안에 있는 video가 보여라
$('article').mouseenter(function(){

    let vid = $(this).find('video').get(0);
    // video에 있는 source를 가져와라 = get(0) (source는 1개 뿐이기 때문에 0)
    
    vid.currentTime = 0; //처음부터 시작하도록 시작점 지정 (1.5하면 1.5s 지점부터 재생)
    vid.play();

    $(this).css({'width':'35%'});
    $(this).find('video').css({'opacity':'0.9'})
    

})

// article에 마우스가 나갔을 때, 본인이 작아져라
// article에 마우스가 나갔을 때, 본인 안에 있는 video가 사라져라
$('article').mouseleave(function(){

    let vid = $(this).find('video').get(0);
    vid.pause(); // 일시정지

    $(this).css({'width':'12%'})
    $(this).find('video').css({'opacity':'0'})
    

})




})