$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

$(document).scroll(function () {
  $(".navbar-collapse").collapse("hide");
});