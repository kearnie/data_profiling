// reset visuals of unclicked buttons; pass in string arg
function resetbutton(unclickedbutton) { 
	//var currClass = $(unclickedbutton).attr('class');
	//var hoverClass = unclickedbutton.concat('hover');
	$(unclickedbutton).removeClass('highlighted');
	$(unclickedbutton).removeClass('buttonhover');
}

$(document).ready(function () {
	$('.description').hide();
	$('.stepcount').hide();
	$('.nodewindow1').hide();
	$('.selectedregions1').hide();
	$('.button1').click(function () {
		/*$('.description').fadeIn(400);
		$('.stepcount').fadeIn(400);*/
		if ($('.description').text() != "Select tables to analyze") {
			$('.description').fadeOut(function () {
				$(this).text("Select tables to analyze").fadeIn(300);
			});
			$('.nodewindow1').fadeIn(500);
			$('.selectedregions1').fadeIn(500);
		};
		if ($('.stepcount').text() != "step 1/6") {
			$('.stepcount').fadeOut(function () {
				$(this).text("step 1/6").fadeIn(300);
			});
		};
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
		if ($('.description').text() != "Perform baseline analysis") {
			$('.description').fadeOut(function () {
				$(this).text("Perform baseline analysis").fadeIn(300);
			});
		};
		if ($('.stepcount').text() != "step 2/6") {
			$('.stepcount').fadeOut(function () {
				$(this).text("step 2/6").fadeIn(300);
			});
		};
		$(this).addClass('highlighted');
		$(this).addClass('buttonhover');
		resetbutton('.button1');
		resetbutton('.button3');
		resetbutton('.button4');
		resetbutton('.button5');
		resetbutton('.button6');
	});
	$('.button3').click(function () {
		if ($('.description').text() != "Classify table columns") {
			$('.description').fadeOut(function () {
				$(this).text("Classify table columns").fadeIn(300);
			});
		};
		if ($('.stepcount').text() != "step 3/6") {
			$('.stepcount').fadeOut(function () {
				$(this).text("step 3/6").fadeIn(300);
			});
		};
		$(this).addClass('highlighted');
		$(this).addClass('buttonhover');
		resetbutton('.button1');
		resetbutton('.button2');
		resetbutton('.button4');
		resetbutton('.button5');
		resetbutton('.button6');
	});
	$('.button4').click(function () {
		if ($('.description').text() != "Attach default generic rules") {
			$('.description').fadeOut(function () {
				$(this).text("Attach default generic rules").fadeIn(300);
			});
		};
		if ($('.stepcount').text() != "step 4/6") {
			$('.stepcount').fadeOut(function () {
				$(this).text("step 4/6").fadeIn(300);
			});
		};
		$(this).addClass('highlighted');
		$(this).addClass('buttonhover');
		resetbutton('.button1');
		resetbutton('.button2');
		resetbutton('.button3');
		resetbutton('.button5');
		resetbutton('.button6');
	});
	$('.button5').click(function () {
		if ($('.description').text() != "Execute reporting query") {
			$('.description').fadeOut(function () {
				$(this).text("Execute reporting query").fadeIn(300);
			});
		};
		if ($('.stepcount').text() != "step 5/6") {
			$('.stepcount').fadeOut(function () {
				$(this).text("step 5/6").fadeIn(300);
			});
		};
		$(this).addClass('highlighted');
		$(this).addClass('buttonhover');
		resetbutton('.button1');
		resetbutton('.button2');
		resetbutton('.button3');
		resetbutton('.button4');
		resetbutton('.button6');
	});
	$('.button6').click(function () {
		if ($('.description').text() != "Author detection rules") {
			$('.description').fadeOut(function () {
				$(this).text("Author detection rules").fadeIn(300);
			});
		};
		if ($('.stepcount').text() != "step 6/6") {
			$('.stepcount').fadeOut(function () {
				$(this).text("step 6/6").fadeIn(300);
			});
		};
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