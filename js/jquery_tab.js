

$(function(){
// 設定
var $width =768; // 横幅
var $height =800; // 高さ
var $interval = 4000; // 切り替わりの間隔（ミリ秒）
var $fade_speed = 1000; // フェード処理の早さ（ミリ秒）
$("#slide-tab ul li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
$("#slide-tab ul li").hide().css({"position":"absolute","top":0,"left":0});
$("#slide-tab ul li:first").addClass("active").show();
setInterval(function(){
var $active = $("#slide-tab ul li.active");
var $next = $active.next("li").length?$active.next("li"):$("#slide-tab ul li:first");
$active.fadeOut($fade_speed).removeClass("active");
$next.fadeIn($fade_speed).addClass("active");
},$interval);
});