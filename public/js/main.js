
//Dynamic text for front page
var $i = 1;
var $n = 2;
var $s = $('span').length;

window.setInterval(function(){
  $i ++;
  $n ++;
  if($i > $s){
    $i = 1;
  }
  if($n > $s){
    $n = 1;
  }
  $('.active').removeClass('active');
  $('span:nth-child(' + $i + ')').addClass('active');
  $('.next').removeClass('next');
  $('span:nth-child(' + $n + ')').addClass('next');
}, 2000);


//Signup page
var $loginMsg = $('.loginMsg'),
  $login = $('.login'),
  $signupMsg = $('.signupMsg'),
  $signup = $('.signup'),
  $frontbox = $('.frontbox');

$('#switch1').on('click', function() {
  $loginMsg.toggleClass("visibility");
  $frontbox.addClass("moving");
  $signupMsg.toggleClass("visibility");

  $signup.toggleClass('hide');
  $login.toggleClass('hide');
})

$('#switch2').on('click', function() {
  $loginMsg.toggleClass("visibility");
  $frontbox.removeClass("moving");
  $signupMsg.toggleClass("visibility");

  $signup.toggleClass('hide');
  $login.toggleClass('hide');
})

setTimeout(function(){
  $('#switch1').click()
},1000)

setTimeout(function(){
  $('#switch2').click()
},3000)