!function(document) {
  $(document).ready(function() {
    $("[data-fancybox=map]").fancybox({
      arrows: false
    });
  });
  var adjust = function() { $("#cover-image").css("height", $(window).height() + "px"); };
  $(window).on('resize', adjust);
  adjust();
  window.onscroll = function () {
    if (document.body.scrollTop > 0) {
      $("#cover-title-bottom").hide();
    } else {
      $("#cover-title-bottom").show();
    }
  };
}(document);
