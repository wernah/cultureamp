$(function() {
  $('.reports-nav').click(function(e) {
    e.preventDefault()
    $(this).parent().addClass("open");
  });
  $('ul.options li').click(function(e) {
    e.preventDefault()
    $(this).parent().parent().removeClass("open");
  });



  var header = $(".top_section");
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 85) {
          header.addClass("scrolled_past");
      } else {
          header.removeClass("scrolled_past");
      }
  });

});
