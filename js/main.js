'use strict';

$(function(){

// que.html 選択肢labelクリックで発火
$('label').on('click', function(){
  var index = $('li.active .que__btn label').index(this) + 1,
      li = 'li.active .que__btn label:nth-of-type(' + index + ')';
      console.log(index);
  $('li.active .que__btn label').removeClass('active');
  $(li).addClass('active');
});


// que.html submitボタンクリックで発火
$('.submit').on('click', function(e){
  var val = parseInt($('li.active input[type=radio]:checked').val()) + 1,
      li = 'li:nth-of-type(' + val + ')';

  // 発火した時クリック
  if (val < 20){
    $('ul#que > li').removeClass('active');
    $(li).addClass('active');
  } else {
    val -= 1;
    location.href = '/test/result/result_' + val + '.html';
  }
});


var resultHeight = $('.result-area__image').width();
console.log(resultHeight);
$('.js-height').css('height', resultHeight);


//TOP画面を表示して5秒後に消える
$('.top_image img').addClass("fadeOut");

setTimeout(function(){
  $('.top_image').addClass("fadeOut2");
},3000);

setTimeout(function(){
  $('.top_image').css('display','none');
},5000);

//画面が表示されたらひつじちゃんをぽこぽこ
$('.top_image_hitsuji img').hide();

setTimeout(function(){
var sheep = $('.top_image_hitsuji img');
for(var i = 1; i < sheep.length+1; i++){
var nom =  $('.top_image_hitsuji img:nth-child('+i+')'); 
$(nom).delay(300*i).fadeIn(400);
}
},4500);

});

