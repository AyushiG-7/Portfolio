$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

$(document).scroll(function () {
  $(".navbar-collapse").collapse("hide");
});

var typed = new Typed(".auto-typed", {
  strings: ["Data Scientist", "Full  Stack  Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
})