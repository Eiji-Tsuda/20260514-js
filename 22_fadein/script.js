$(function () {
  // jQueryを記述
  // $("p").fadeIn();

  // 速度指定(ms)
  // $("p").fadeIn(2000);

  // 終了後の処理を指定
  $("p").fadeIn(function () {
      $(this).css("color", "#FF0000");
     });
  });