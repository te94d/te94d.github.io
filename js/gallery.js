$(function(){
  /*=================================================
  画像切り替え
  ===================================================*/
  // サムネイルの画像をホバーした際の処理
  $('#thumbnail1 img').on('mouseover', function(){

    // ホバーされた画像のパスを取得
    // $(this)はイベントが発生した要素を指すため、1つ目のサムネイルがホバーされた際は1つ目のsrcを、
    // 2つ目のサムネイルがホバーされた際は2つ目のsrcを取得する
    let img_src = $(this).attr("src");

    // メイン画像と同じサムネイルがホバーされた際は画像切り替えを実行しない
    // （メイン画像のsrcとホバーされた画像のsrcが異なる場合のみ実行）
    if($('#mainvisual1 img').attr("src") != img_src) {

      // メイン画像を0.5秒かけてフェードアウトし、フェードアウトが完了したら
      // メイン画像のsrcをホバーされたサムネイルのsrcに変更して
      // メイン画像を0.5秒かけてフェードインする
      // ※「フェードアウトが完了した後に実行」のように、何かの処理が終わったあとに実行させたい場合は、
      // 今回のようのコールバック関数を使用します。詳しくは「コールバック関数」で調べてみてください
      $('#mainvisual1 img').fadeOut(500, function() {
        $("#mainvisual1 img").attr({src:img_src});
        $("#mainvisual1 img").fadeIn(500);
      })
    }
  });
});

$(function(){
  $('#thumbnail2 img').on('mouseover', function(){
    let img_src = $(this).attr("src");
    if($('#mainvisual2 img').attr("src") != img_src) {
      $('#mainvisual2 img').fadeOut(500, function() {
        $("#mainvisual2 img").attr({src:img_src});
        $("#mainvisual2 img").fadeIn(500);
      })
    }
  });
});

$(function(){
  $('#thumbnail3 img').on('mouseover', function(){
    let img_src = $(this).attr("src");
    if($('#mainvisual3 img').attr("src") != img_src) {
      $('#mainvisual3 img').fadeOut(500, function() {
        $("#mainvisual3 img").attr({src:img_src});
        $("#mainvisual3 img").fadeIn(500);
      })
    }
  });
});