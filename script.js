$(document).ready(function () {
	$('mainbuttons').hide();
	$('.button1').hover(function () {
		$(this).toggleClass('button1hover');
	});
	$('.button3').click(function () {
		$(this).toggleClass('highlighted');
		$(this).toggleClass('button3hover');
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