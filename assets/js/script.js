$(function () {
  // ハンバーガメニュー
  $(".openbtn4").click(function () {
    $(this).toggleClass("active");
  });
  $(".openbtn4").on("click", function () {
    $(".header-right").toggleClass("header-nav");
  });

// newsコンテンツslideDown
$("#news").on("mouseover", function() {
  $(".news-inner").slideDown(600);
})


  // ページトップに戻る
  $(".totop").on("click", function() {
    $("html, body").animate({scrollTop: 0}, 1000);
  })
});
