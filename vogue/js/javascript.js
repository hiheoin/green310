$(document).ready(function(){

// 메뉴버튼을 클릭했을 때, nav와 section이 바뀌어라

$('#wrap em').click(function(){

    $('#wrap nav').addClass('on');
    $('#wrap section').addClass('on');

    // 본인 스스로는 서서히 사라져라
    $(this).fadeOut('slow'); //숫자로 써도 됨 ex.800 대신 '' 없어도 됨

})





})