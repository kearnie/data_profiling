// reset visuals of unclicked buttons; pass in string arg
function resetbutton(unclickedbutton) { 
	//var currClass = $(unclickedbutton).attr('class');
	//var hoverClass = unclickedbutton.concat('hover');
	$(unclickedbutton).removeClass('highlighted');
	$(unclickedbutton).removeClass('buttonhover');
}

$(document).ready(function () {
	$('mainbuttons').hide();
	$('.button1').click(function () {
		$(this).addClass('highlighted');
		$(this).addClass('buttonhover');
		resetbutton('.button2');
		resetbutton('.button3');
		resetbutton('.button4');
		resetbutton('.button5');
		resetbutton('.button6');
		//$('.button2').removeClass('highlighted');
		//$('.button2').removeClass('buttonhover');
	});
	$('.button2').click(function () {
		$(this).addClass('highlighted');
		$(this).addClass('buttonhover');
		resetbutton('.button1');
		resetbutton('.button3');
		resetbutton('.button4');
		resetbutton('.button5');
		resetbutton('.button6');
	});
	$('.button3').click(function () {
		$(this).addClass('highlighted');
		$(this).addClass('buttonhover');
		resetbutton('.button1');
		resetbutton('.button2');
		resetbutton('.button4');
		resetbutton('.button5');
		resetbutton('.button6');
	});
	$('.button4').click(function () {
		$(this).addClass('highlighted');
		$(this).addClass('buttonhover');
		resetbutton('.button1');
		resetbutton('.button2');
		resetbutton('.button3');
		resetbutton('.button5');
		resetbutton('.button6');
	});
	$('.button5').click(function () {
		$(this).addClass('highlighted');
		$(this).addClass('buttonhover');
		resetbutton('.button1');
		resetbutton('.button2');
		resetbutton('.button3');
		resetbutton('.button4');
		resetbutton('.button6');
	});
	$('.button6').click(function () {
		$(this).addClass('highlighted');
		$(this).addClass('buttonhover');
		resetbutton('.button1');
		resetbutton('.button2');
		resetbutton('.button3');
		resetbutton('.button4');
		resetbutton('.button5');
	});
	
	/*$('.button2').fadeTo(500,0.5);
	$('.button3').fadeTo(500,0.5);
	$('.button4').fadeTo(500,0.5);
	$('.button5').fadeTo(500,0.5);
	$('.button6').fadeTo(500,0.5);

	$('.button1').click(function () {
		$(this).fadeTo(500,1);
	});
	$('.button2').click(function () {
		$(this).fadeTo(500,1);
	});
	$('.button3').click(function () {
		$(this).fadeTo(500,1);
	});
	$('.button4').click(function () {
		$(this).fadeTo(500,1);
	});
	$('.button5').click(function () {
		$(this).fadeTo(500,1);
	});
	$('.button6').click(function () {
		$(this).fadeTo(500,1);
	});*/
});