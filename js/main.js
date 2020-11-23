$(".header-right > a").click(function() {
   // jquery function fadeIn or show
   // $(".hamburger-menu").fadeIn();
   // add css class active (display: block)
   $(".hamburger-menu").addClass("active");
});

$(".close").click(function() {
   // jquery function fadeOut or hide
   // $(".hamburger-menu").fadeOut();
   // remove css class active (display: block)
   $(".hamburger-menu").removeClass("active");

})
