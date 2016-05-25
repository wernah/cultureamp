$(function() {
  $('.reports-nav').click(function(e) {
    e.preventDefault()
    $(this).parent().addClass("open");
  });
  $('ul.options li').click(function(e) {
    e.preventDefault()
    $(this).parent().parent().removeClass("open");
  });
});
