$(document).ready(function () {
  $("a.page-scroll").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  $("body").scrollspy({
    target: ".navbar-fixed-top",
  });

  $(".navbar-collapse ul li a").on("click", function () {
    $(".navbar-toggle:visible").click();
  });
});