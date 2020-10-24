// トップをフェードイン

$('#tp-bx-ttl-001').append(
  '<style>#tp-bx-ttl-001{display:none;}'
  );
  $(window).on("load", function() {
  $('#tp-bx-ttl-001').delay(600).fadeIn(1500);
  $("#tp-bx-ttl-001").css({
    "transform": "scaleY(1.3)"
  });
});
$('#tp-bx-tx-001').append(
  '<style>#tp-bx-tx-001{display:none;}'
  );
  $(window).on("load", function() {
  $('#tp-bx-tx-001').delay(1500).fadeIn(1500);
  $("#tp-bx-tx-001").css({
    "transform": "scaleY(0.8)"
  });
});


// ページ途中をフェードイン  
  $(window).on('load scroll', function (){

    var box = $('.fadeIn');
    var animated = 'animated';
    
    box.each(function(){
    
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      //画面内のどの位置で処理を実行するかで「100」の値を変更
      if(scrollPos > boxOffset - wh + 200 ){
        $(this).addClass(animated);
      }
    });
  
  });

