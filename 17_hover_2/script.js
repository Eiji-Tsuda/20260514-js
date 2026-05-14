$(function() {
  // jQueryを記述
  $("a").hover(function() {
    $(this).css("color", "#f00");
  },function() {
    $(this).css("color", "#0f0");
  });
});