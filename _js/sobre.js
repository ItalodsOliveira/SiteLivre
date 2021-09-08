function filme (){
    $(".mostrar-filme").removeClass(".d-none")
    $(".inicio").addClass(".d-none")

    alert(oi);
}function menu (){
    document.getElementsByClassName(".menu").removeclass("menu1")
}
$(document).ready(function(){
    $('.card').mouseover(function(){
        $(this).addClass('shadow');
        $(this).removeClass('m-2');
    })
    $('.card').mouseleave(function(){
        $(this).removeClass('shadow');
        $(this).addClass('m-2');
    })
})