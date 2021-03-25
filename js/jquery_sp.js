

$(function(){
// 設定
var $width =375; // 横幅
var $height =400; // 高さ
var $interval = 4000; // 切り替わりの間隔（ミリ秒）
var $fade_speed = 1000; // フェード処理の早さ（ミリ秒）
$("#slide-sp ul li").css({"position":"relative","overflow":"hidden","width":$width,"height":$height});
$("#slide-sp ul li").hide().css({"position":"absolute","top":0,"left":0});
$("#slide-sp ul li:first").addClass("active").show();
setInterval(function(){
var $active = $("#slide-sp ul li.active");
var $next = $active.next("li").length?$active.next("li"):$("#slide-sp ul li:first");
$active.fadeOut($fade_speed).removeClass("active");
$next.fadeIn($fade_speed).addClass("active");
},$interval);
});