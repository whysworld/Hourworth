$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 20) {
			$('#toTopBtn').fadeIn();
		} else {
			$('#toTopBtn').fadeOut();
		}
	});
	$(".navbar-brand").mouseover(function(){
	  	$(this).find("img").attr("src","./image/logo_active.svg");
	});
	$(".navbar-brand").mouseout(function(){
	  	$(this).find("img").attr("src","./image/logo.svg");
	});
	$("#ourstory").mouseover(function(){
	  	$(this).html("For talent");
	});
	$("#ourstory").mouseout(function(){
	  	$(this).html("Our story");
	});
	$("#reviews").mouseover(function(){
	  	$(this).html("For client");
	});
	$("#reviews").mouseout(function(){
	  	$(this).html("Reviews");
	});
	$("#howtowork").mouseover(function(){
	  	$(this).html("For talent");
	});
	$("#howtowork").mouseout(function(){
	  	$(this).html("How to find work");
	});
	$("#howtohire").mouseover(function(){
	  	$(this).html("For client");
	});
	$("#howtohire").mouseout(function(){
	  	$(this).html("How to hire");
	});
	$(".btn-post").mouseover(function(){
	  	$(this).find("span").css("margin-right", "7px");
	});
	$(".btn-post").mouseout(function(){
	  	$(this).find("span").css("margin-right", "0px");
	});
	$("#support").mouseover(function(){
	  	$(this).children("i").css("margin-left", "10px");
	});
	$("#support").mouseout(function(){
	  	$(this).children("i").css("margin-left", "0px");
	});
	$(".btn-links").click(function(){
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
		} else {
			$(this).addClass("active");
		}	  		
	});
});
