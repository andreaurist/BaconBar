// JavaScript Document
var clicked = false;
$(".img-swap").click(function(){
  if(!clicked)
    $(this).addClass("clicked")
  else
    this.src.replace("-off","-on");
});

$(document).ready(function(){
var d = new Date();    // defaults to the current time in the current timezone
if (d.getHours() >= 12 ) {
	//show nightime pig hero
	$("#hero-main").attr("src","img/hero-home-night.jpg");
	$("#pig2").attr("src","img/core/pig-2-on.png");
} else {
	//show daytime pig hero
	$("#hero-main").attr("src","img/hero-home-day.jpg");
	$("#pig1").attr("src","img/core/pig-1-on.png");
}
});

jQuery(function(){
	//$("#pig1").attr("src","img/core/pig-1-on.png"); 
	$("#pig2").click(function() {
		$("#pig3").attr("src","img/core/pig-3-off.png");
		$("#pig1").attr("src","img/core/pig-1-off.png");
		$("#pig1").removeClass("clicked");
		$("#pig3").removeClass("clicked");
		$("#hero-main").fadeOut(200, function() {
			$("#hero-main").attr("src",$("#hero2").attr("href"));
		}).fadeIn(200);
		return false;
	});
	$("#pig1").click(function() {
		$("#pig3").attr("src","img/core/pig-3-off.png");
		$("#pig2").attr("src","img/core/pig-2-off.png");
		$("#pig2").removeClass("clicked");
		$("#pig3").removeClass("clicked");
		$("#hero-main").fadeOut(200, function() {
			$("#hero-main").attr("src",$("#hero1").attr("href"));
		}).fadeIn(200);
		return false;
	});
	$("#pig3").click(function() {
		$("#pig1").attr("src","img/core/pig-1-off.png");
		$("#pig2").attr("src","img/core/pig-2-off.png");
		$("#pig2").removeClass("clicked");
		$("#pig1").removeClass("clicked");
		$("#hero-main").fadeOut(200, function() {
			$("#hero-main").attr("src",$("#hero3").attr("href"));
		}).fadeIn(200);
		return false;
	});
});
