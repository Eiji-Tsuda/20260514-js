$(function() {
  // jQueryを記述
  $("a").click(function() {
    $(this).css("color", "#F00");
    return false;
  });
});