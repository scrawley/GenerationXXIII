/*JQUERY CURTAIN CODE */
   $(function(){
       $('.curtains').curtain({
           scrollSpeed: 300,
           controls: '.menu',
           curtainLinks: '.curtain-links',
           nextSlide: function(){
            console.log("ok");
           }
       });
    });
	
/*POPOVERSSSSS */	





/*  IMAGE SCROLL CAROUSEL */	
(function($) {
	$(function() {
		$("#scroller").simplyScroll({direction:'backwards'});
	});
})(jQuery);

/*  IMAGE SCROLL CAROUSEL TRY NUMBER TWO 
$(window).load(function() {
	$('.marquee').marquee();
});

$('.marquee').marquee({
	duration:1500,
	gap:0,
	delayBeforeStart:0,
	direction:'left',
	duplicated:true,
	pauseonHover:true,
});*/	

/*  IMAGE HOVER CHANGE TEXT TO THE KID'S MODEL NUMBER */	
$('.image_one').hover(function()
	{
		$('#headline').text('Model # ATCG0421: Designed for Charismatic Perfection');
	},
	function () 
	{
		$('#headline').text('Customize, Alter, or Choose from our Current Models');
	});	





$('.image_two').hover(function()
	{
		$('#headline').text('Model # TCGA4562: Designed for Psychic Perfection');
	},
	function () 
	{
		$('#headline').text('Customize, Alter, or Choose from our Current Models');
	});	





$('.image_three').hover(function()
	{
		$('#headline').text('Model # AGCT0116: Designed for Physical Perfection');
	},
	function () 
	{
		$('#headline').text('Customize, Alter, or Choose from our Current Models');
	});	
	
	
	
	
	
	
$('.image_four').hover(function()
	{
		$('#headline').text('Model # GTAC9812 : Designed for Moral Perfection');
	},
	function () 
	{
		$('#headline').text('Customize, Alter, or Choose from our Current Models');
	});	
		
	
	
$('.image_five').hover(function()
	{
		$('#headline').text('Model # ACTG0216: Designed for Mental Perfection');
	},
	function () 
	{
		$('#headline').text('Customize, Alter, or Choose from our Current Models');
	});	





$('.image_seven').hover(function()
	{
		$('#headline').text('Model # AGCT1627: Designed for Artistic Perfection');
	},
	function () 
	{
		$('#headline').text('Customize, Alter, or Choose from our Current Models');
	});	

	
	
	
	
$('.image_twelve').hover(function()
	{
		$('#headline').text('Model # CGAT7521: Designed for Linguistic Perfection');
	},
	function () 
	{
		$('#headline').text('Customize, Alter, or Choose from our Current Models');
	});	
	




$('.image_eleven').hover(function()
	{
		$('#headline').text('Model # TGCA0109: Designed for Musical Perfection');
	},
	function () 
	{
		$('#headline').text('Customize, Alter, or Choose from our Current Models');
	});	
	
	
	
/*IMAGE CHANGE HOVER THING */



$('#image_twelve').hover(function()
	{
		$('#modelimage > img').attr('src','images/linguistic.jpg');
	},
	function () 
	{
		$('#modelimage > img').attr('src', 'images/defaultcover.jpg');
	});	
	

$('#image_eleven').hover(function()
	{
		$('#modelimage > img').attr('src','images/musical.jpg');
	},
	function () 
	{
		$('#modelimage > img').attr('src', 'images/defaultcover.jpg');
	});	
	

$('#image_seven').hover(function()
	{
		$('#modelimage > img').attr('src','images/artistic.jpg');
	},
	function () 
	{
		$('#modelimage > img').attr('src', 'images/defaultcover.jpg');
	});	
	
	
$('#image_five').hover(function()
	{
		$('#modelimage > img').attr('src','images/mental.jpg');
	},
	function () 
	{
		$('#modelimage > img').attr('src', 'images/defaultcover.jpg');
	});	

$('#image_four').hover(function()
	{
		$('#modelimage > img').attr('src','images/moral.jpg');
	},
	function () 
	{
		$('#modelimage > img').attr('src', 'images/defaultcover.jpg');
	});	
	
$('#image_three').hover(function()
	{
		$('#modelimage > img').attr('src','images/physical.jpg');
	},
	function () 
	{
		$('#modelimage > img').attr('src', 'images/defaultcover.jpg');
	});	
	
$('#image_two').hover(function()
	{
		$('#modelimage > img').attr('src','images/ari_3.jpg');
	},
	function () 
	{
		$('#modelimage > img').attr('src', 'images/defaultcover.jpg');
	});	
	
$('#image_one').hover(function()
	{
		$('#modelimage > img').attr('src','images/charasmatic.jpg');
	},
	function () 
	{
		$('#modelimage > img').attr('src', 'images/defaultcover.jpg');
	});	
	
	
	
	
	
	
	
	
	
	
	



$('#image_twelve_twelve').hover(function()
	{
		$('#modelimage > img').attr('src','images/linguistic.jpg');
	},
	function () 
	{
		$('#modelimage > img').attr('src', 'images/defaultcover.jpg');
	});	
	

$('#image_eleven_eleven').hover(function()
	{
		$('#modelimage > img').attr('src','images/musical.jpg');
	},
	function () 
	{
		$('#modelimage > img').attr('src', 'images/defaultcover.jpg');
	});	
	

$('#image_seven_seven').hover(function()
	{
		$('#modelimage > img').attr('src','images/artistic.jpg');
	},
	function () 
	{
		$('#modelimage > img').attr('src', 'images/defaultcover.jpg');
	});	
	
	
$('#image_five_five').hover(function()
	{
		$('#modelimage > img').attr('src','images/mental.jpg');
	},
	function () 
	{
		$('#modelimage > img').attr('src', 'images/defaultcover.jpg');
	});	

$('#image_four_four').hover(function()
	{
		$('#modelimage > img').attr('src','images/moral.jpg');
	},
	function () 
	{
		$('#modelimage > img').attr('src', 'images/defaultcover.jpg');
	});	
	
$('#image_three_three').hover(function()
	{
		$('#modelimage > img').attr('src','images/physical.jpg');
	},
	function () 
	{
		$('#modelimage > img').attr('src', 'images/defaultcover.jpg');
	});	
	
$('#image_two_two').hover(function()
	{
		$('#modelimage > img').attr('src','images/ari_3.jpg');
	},
	function () 
	{
		$('#modelimage > img').attr('src', 'images/defaultcover.jpg');
	});	
	
$('#image_one_one').hover(function()
	{
		$('#modelimage > img').attr('src','images/charasmatic.jpg');
	},
	function () 
	{
		$('#modelimage > img').attr('src', 'images/defaultcover.jpg');
	});		
	
	
	
	
/*COUNTDOWN CLOCK */
	var target_date = new Date ("Apr 7, 2014").getTime();
	var days, hours, minutes, seconds;
	var countdown = document.getElementById("countdown");
	setInterval(function() {
	
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date)/1000;
	
	days = parseInt(seconds_left / 86400);
	seconds_left = seconds_left % 86400;
	
	hours = parseInt(seconds_left / 3600);
	seconds_left = seconds_left % 3600;
	
	minutes = parseInt(seconds_left / 60);
	seconds = parseInt(seconds_left % 60);
	
	countdown.innerHTML = days + "d, " + hours + "h, " + minutes + "m, " + 	
	seconds + "s";
	},1000);
	
	
/* IDLE TIME CLOCK */	

idleTime = 0;
$(document).ready(function() {
	//Increment the idle time counter every minute.
	var idleInterval = setInterval(timerIncrement, 60000); // 1 minutes
	
	//Zero the idle Timer on mouse movement.
	$(this).mousemove(function (e) {
		idleTime = 0;
	});
	$(this).keypress(function (e) {
		idleTime = 0;
	});
});

function timerIncrement () {
	idleTime = idleTime + 1;
	if (idleTime > 1) {
		window.location.href="file://localhost/Users/scrawley/Desktop/generationxxiii_Final/index.html#section-1";	
		window.location.reload();
		window.location.hash="#section-1";
	window.location.reload();
	}
};
	
	
/*image carousel



            function scrollToWindow(selector) {
                if ($('.window' + selector).length > 0) {
                    $('html, body').stop().animate({
                        scrollTop: $('.window' + selector).offset().top
                    }, 1800, 'easeInOutQuad');
                }
            }

            $('#btnNextWindow').click(function () {
                scrollToWindow('[data-pos=' + (currentWindow + 1) + ']');
            });

            $('#btnPrevWindow').click(function () {
                scrollToWindow('[data-pos=' + (currentWindow - 1) + ']');
            });



			 var clientCounter = 0;
            var totalClients = $('#section-4 .client_models .cm img').size();

            $('#section-4 .client_models .cm img').each(function () {
                //$(this).attr("src",$(this).attr('src')+ "?" + new Date().getTime());
                $(this).load(function () {

                    // alert('test');

                    // alert(interviewCounter);
                    clientCounter++;
                    if (clientCounter >= totalClients) {
                        //alert(interviewCounter);
                        resizeCmWidth();

                        //positionPlayBtns();
                    }
                });
            });

            setTimeout(function () { resizeCmWidth(); }, 1000);

            function resizeCmWidth() {
                if (!window.chrome && !isMobile && !isTablet) {
                    var totalCmWidth = 0;
                    $('#section-4 .client_models .cm img').each(function () {
                        totalCmWidth += $(this).width();
                    });

                    $('#section-4 .client_models .cm img').width(totalCmWidth);

                }
            }
			
			
			
	

            var interviewCmDestination;
            var interviewCmInterval;

            //alert($('.win-video .interviews .thumbs').width());*/
			


/*SHOW AND HIDE GENE CHARACTERISTICS ON ARI

$(document).ready(function() {
	 
	$("#section2text").hide();
	
	if (window.location.href = 'file://localhost/Users/scrawley/Desktop/generationxxiii_Final/index.html#section-1') {
	
	alert ('Hello')
	}
	
	else {
		alert ('hey')
	}
});*/
	


	
	
	/*if((window.location.href=
	"file://localhost/Users/scrawley/Desktop/generationxxiii_Final/index.html#section-2")) {
		$(function () {
			$("#section2text").fadeToggle(1000);
		});
	}
	
		$("#section2text").hide();
	
	
	else {
		$("#section2text")	.hide();
	}*/
	

/*$(document).ready(function(){
	$("#xone").hide();
	$("#xtwo").hide();
	$("#xthree").hide();
	$("#xfour").hide();
	$("#xfive").hide();
	$("#xsix").hide();
		
	$("#fadein_red").click(function(){
		$("#xone").fadeToggle(1000);
		});
	
	$("#fadein_gen").click(function(){
		$("#xtwo").fadeToggle(1000);
		});
		
	$("#fadein_vis").click(function(){
		$("#xthree").fadeToggle(1000);
		});
		
	$("#fadein_cla").click(function(){
		$("#xfour").fadeToggle(1000);
		});
		
	$("#fadein_span").click(function(){
		$("#xfive").fadeToggle(1000);
		});
		
	$("#fadein_other").click(function(){
		$("#xsix").fadeToggle(1000);	
});

});*/





/*HIDING INFORMATION IN SECTION 2 AND SHOWING ON MOUSEENTER*/

$(document).ready(function() {
	$("#section2text").hide();
});

$("#section-2").mouseenter(function(){
	$("#section2text").toggle();
});	

$("#section-2").mouseleave(function(){
	$("#section2text").hide();	
});


$(document).ready(function() {
	$("#arrow_2_id").hide();
});

$("#section-2").mouseenter(function(){
	$("#arrow_2_id").toggle();
});	

$("#section-2").mouseleave(function(){
	$("#arrow_2_id").hide();	
});




$(document).ready(function() {
	$("#arrow_3_id").hide();
});

$("#section-2").mouseenter(function(){
	$("#arrow_3_id").toggle();
});	

$("#section-2").mouseleave(function(){
	$("#arrow_3_id").hide();	
});


/*var currWidth = $(window).width();
console.log(currWidth);

var startPos = -100;
var endPos = (currWidth / 2) + (startPos / 2);
console.log(endPos);*/


	


/* Javascript FOR MARQUEE IMAGE SCROLLING ACROSS SCREEN 


var mqAry1=['images/gen_1.jpg','images/gen_2.jpg','images/gen_3.jpg','images/gen_4.jpg','images/gen_5.jpg','images/gen_7.jpg','images/gen_11.jpg','images/gen_11.jpg'];

function start() {
   new mq('marquee',mqAry1,180);
   // repeat for as many fuields as required
   mqRotate(mqr); // must come last
}
window.onload = start;

// Continuous Image Marquee
// copyright 24th July 2008 by Stephen Chapman
// http://javascript.about.com
// permission to use this Javascript on your web page is granted
// provided that all of the code below in this script (including these
// comments) is used without any alteration

var mqr = []; function mq(id,ary,wid){this.mqo=document.getElementById(id); var heit = this.mqo.style.height; this.mqo.onmouseout=function() {mqRotate(mqr);}; this.mqo.onmouseover=function() {clearTimeout(mqr[0].TO);}; this.mqo.ary=[]; var maxw = ary.length; for (var i=0;i<maxw;i++){this.mqo.ary[i]=document.createElement('img'); this.mqo.ary[i].src=ary[i]; this.mqo.ary[i].style.position = 'absolute'; this.mqo.ary[i].style.left = (wid*i)+'px'; this.mqo.ary[i].style.width = wid+'px'; this.mqo.ary[i].style.height = heit; this.mqo.appendChild(this.mqo.ary[i]);} mqr.push(this.mqo);} function mqRotate(mqr){if (!mqr) return; for (var j=mqr.length - 1; j > -1; j--) {maxa = mqr[j].ary.length; for (var i=0;i<maxa;i++){var x = mqr[j].ary[i].style;  x.left=(parseInt(x.left,10)-1)+'px';} var y = mqr[j].ary[0].style; if (parseInt(y.left,10)+parseInt(y.width,10)<0) {var z = mqr[j].ary.shift(); z.style.left = (parseInt(z.style.left) + parseInt(z.style.width)*maxa) + 'px'; mqr[j].ary.push(z);}} mqr[0].TO=setTimeout('mqRotate(mqr)',10);}*/
          
			
			
