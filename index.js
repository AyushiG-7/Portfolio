$(document).scroll(function (){
    $(".navbar").addClass("scroll");
})

$(".nav-link").click(function(){
    $(".navbar-collaspe.collaspe").removeClass("show");
});

$(".navbar-toggler").click(function(){
    $(".navbar-nav").addClass("menu-navbar-nav")
});
