$(function () {
  $(".js-sub-img1 img").on("click", function () {
    //mainに切り替えるimgのsrc取得
    img = $(this).attr("src");
    //currentクラス付け替え(枠線などを変えたい時に)
    $(".js-sub-img1 li").removeClass("current");
    $(this).parent().addClass("current");
    //fadeOutできたらsrc変更してfadeIn
    $(".js-main-img1 img").fadeOut(500, function () {
      $(".js-main-img1 img")
        .attr("src", img)
        .on("load", function () {
          $(this).fadeIn(500);
        });
    });
  });
});

$(function () {
  $(".js-sub-img2 img").on("click", function () {
    //mainに切り替えるimgのsrc取得
    img = $(this).attr("src");
    //currentクラス付け替え(枠線などを変えたい時に)
    $(".js-sub-img2 li").removeClass("current");
    $(this).parent().addClass("current");
    //fadeOutできたらsrc変更してfadeIn
    $(".js-main-img2 img").fadeOut(500, function () {
      $(".js-main-img2 img")
        .attr("src", img)
        .on("load", function () {
          $(this).fadeIn(500);
        });
    });
  });
});

$(function () {
  $(".js-sub-img3 img").on("click", function () {
    //mainに切り替えるimgのsrc取得
    img = $(this).attr("src");
    //currentクラス付け替え(枠線などを変えたい時に)
    $(".js-sub-img3 li").removeClass("current");
    $(this).parent().addClass("current");
    //fadeOutできたらsrc変更してfadeIn
    $(".js-main-img3 img").fadeOut(500, function () {
      $(".js-main-img3 img")
        .attr("src", img)
        .on("load", function () {
          $(this).fadeIn(500);
        });
    });
  });
});