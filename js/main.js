$(function(){//おまじない

  $("#menu_btn").on("click",function(){
    $("body").toggleClass('open_menu');
  })

  //スクロールかクリックされたら前面ロゴをフェードアウト
  $(window).one('scroll click',function(){
    $("#topback").fadeOut(500);
  })



});//おまじない