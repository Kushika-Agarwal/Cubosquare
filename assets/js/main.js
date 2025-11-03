$(document).ready(function () {
  // Mobile menu toggle
  $("#mobile-menu-button").click(function () {
    $("#mobile-menu").slideToggle();
  });

  // Handle window resize
  $(window).resize(function () {
    if ($(window).width() > 1024) {
      $("#mobile-menu").hide();
    }
  });

  // Smooth scroll for navigation links
  $("nav a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(href).offset().top - 80,
      },
      800
    );
  });
});
