$(function() {
  // jQueryを記述
  $("p").fadeOut(1000);

  $("p").fadeOut(2000,function() {
    alert("フェードアウトしました");
  });
});