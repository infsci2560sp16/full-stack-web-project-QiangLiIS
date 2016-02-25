/* 
* bg_height Begin 
* lzx 2015-10-12
*/

function bgH()
{

	var $wind = $(window);
	var $do = $("#gpBox");
	var $do1 = $("#imgBox");
	var $do2 = $("#button");
	
	
	var winH = $wind.height();
	$do.hide();
	$do.css("height",winH + "px");
	
	
	var imgH = $do1.height();
	
	var theH =  (winH - imgH)/2 - 100 ;
	$do1.css("top",theH + "px") ;
	if(theH<=30)
	{
		$do1.css("top","30px");
	}
	
	
	var winW = $wind.width();
	var imgW = $do1.width();
	
	
	var theW =  (winW - imgW)/2 ;
	$do1.css("left",theW + "px") ;
	
	
	
	var theBtnH = theH  + 210;
	$do2.css("top",theBtnH+"px");
	
	
	
	btnW = $do2.width() ;
	
	theBtnW = (winW - btnW)/2;
	$do2.css("left",theBtnW+"px");
	
	$wind.resize(function(winHn,theHn)
	{        
		
		var winHn1 = $wind.height();
		
		$do.height(Math.abs(winHn1));
		
		var imgHn = $do1.height();
		
		var theHn1 =  (winHn1 - imgHn)/2 - 100 ;
		$do1.css("top",theHn + "px");
		
		if(theHn1<=30)
		{
			$do1.css("top","30px");
		}
		
		
		
		var theBtnHn = theHn1 + 210;
		$do2.css("top",theBtnHn+"px");
		
		if(theBtnHn<=200)
		{
			$do2.css("top","200px");
		}
		
		
		
		var winWn = $wind.width();
		var imgWn = $do1.width();
		var btnWn = $do2.width();
		
		
		var theWn =  (winWn - imgWn)/2 ;
		$do1.css("left",theWn + "px"); 
		
		
		
		var theBtnWn =  (winWn-btnWn)/2 ;
		$do2.css("left",theBtnWn + "px");
		if(theBtnHn<=200)
		{
			
			$do2.css("top","200px");
		}
	});
	$do.fadeIn(500);
}

/* bg_height End */ 

/* 
* button Begin
* lzx 2015-10-12
*/


/*
* actGroup Begin
* lzx 2015-10-12
*/

function actGroup_1()
{	
	var do1 = $("#imgBox");
	var do2 = $("#imgBox img");
	var do3 = $("#imgBox span");
	var do4 = $("#button");
	
	
	do1.hide();
	setTimeout(function () {
		do1.show(500);
		do2.hide().show(1000);
		do3.animate({"margin-left":0},1000);
	}, 100);
	
	do4.hide();
	setTimeout(function () {
		do4.fadeIn(500);
	}, 1000);
	
}

/*
* Lazy loading Begin
* web 2015-10-12
*/
function loding()
{
	$("img").delayLoading({
	defaultImg: "./images/C_loading.gif",
	errorImg: "./images/C_loading.gif",
	imgSrcAttr: "originalSrc",          
	beforehand: 0,                      
	event: "scroll",                     
	duration: "normal",                 
	container: window,                   
	success: function (imgObj) { },      
	error: function (imgObj) { }         
	});
}


/*
* nav Begin
* web 2015-10-13
*/
function nav()
{
	var $do = $("#nav");
	var $doDiv = $("#nav div");
	var $doBtn = $("#btn");
	
	$do.animate({"margin-top":80},1000);
	$doDiv.hide().fadeIn(2000);
	
	$doBtn.hide();
	setTimeout(function () {
		$doBtn.fadeIn(1000);
	}, 800);
}

/* nav End*/


/*
* Go to top Begin
* web 2015-10-13
*/

function windowScroll() 
{
	window.onscroll = function() 
	{
		var t = document.documentElement.scrollTop  || document.body.scrollTop ;
		scrollShow(t);
	};
	gotoTop();
}


function scrollShow(t) 
{
		if(t>=100) 
		{
			$(".gotoTop").fadeIn(500);
		}
		else 
		{ 
			$(".gotoTop").fadeOut(500);
		}
		
}

function gotoTop() 
{
	$(".gotoTop").click(function() 
	{
		$('body,html').animate({'scrollTop':0},500);
	});
}
/* Go to top End */

/***
 * 字体大小
 */

function fontSize()
{
	var i = 14;
	$(".AjiaBox").click(function(){
		$(".AjianBox").css('cursor','pointer');
		$(".AjianBox").css('background','url(./images/E_substation_share.png) -200px 7px no-repeat');
		if(i<16)
		{
			i = i+2;
			$(".art p").css('font-size',i+'px');
		}
		if(i == 16)
		{
			$(this).css('cursor','default');
			$(this).css('background','url(./images/E_substation_share.png) -160px -44px no-repeat');
		}
	});
	
	$(".AjiaBox").hover(function () {
		if(i < 16)
		{
			$(this).css('background','url(./images/E_substation_share.png) -160px -97px no-repeat');
		}
		else
		{
			$(this).css('background','url(./images/E_substation_share.png) -160px -44px no-repeat');
		}
	}, function () {
		if(i < 16)
		{
			$(this).css('background','url(./images/E_substation_share.png) -160px 7px no-repeat');
		}
		else
		{
			$(this).css('background','url(./images/E_substation_share.png) -160px -44px no-repeat');
		}
	});
	
	$(".AjianBox").click(function(){
		$(".AjiaBox").css('cursor','pointer');
		$(".AjiaBox").css('background','url(./images/E_substation_share.png) -160px 7px no-repeat');
		if(i>12)
		{
			i = i-2;
			$(".art p").css('font-size',i+'px');
		}
		if(i==12)
		{
			$(this).css('cursor','default');
			$(this).css('background','url(./images/E_substation_share.png) -200px -44px no-repeat');
		}
	});
	
	$(".AjianBox").hover(function () {
		if(i > 12)
		{
			$(this).css('background','url(./images/E_substation_share.png) -200px -94px no-repeat');
		}
		else
		{
			$(this).css('background','url(./images/E_substation_share.png) -200px -44px no-repeat');
		}
	}, function () {
		if(i > 12)
		{
			$(this).css('background','url(./images/E_substation_share.png) -200px 7px no-repeat');
		}
		else
		{
			$(this).css('background','url(./images/E_substation_share.png) -200px -44px no-repeat');
		}
	});
	
}
