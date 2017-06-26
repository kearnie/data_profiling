// reset visuals of unclicked buttons; pass in string arg
function resetbutton(unclickedbutton) { 
	//var currClass = $(unclickedbutton).attr('class');
	//var hoverClass = unclickedbutton.concat('hover');
	$(unclickedbutton).removeClass('highlighted');
	$(unclickedbutton).removeClass('buttonhover');
}

// reset window dimensions for Baseline, Bind Rules, and Reporting step
function resetOneWindow(clickedbutton) {
	//$('.nodewindow1').hide();
	//$('.selectedregions1').css('display','none');
	//$('.selectedregions1').hide();
	var win1w = '98%';
	var win1h = '76%';
	var wintitle;
	if (clickedbutton == '.button2') {
		//$('.leftwintitle').text('Graph');
		wintitle = 'Graph';
	}
	else if (clickedbutton == '.button4') {
		//$('.leftwintitle').text('Scope Model');
		wintitle = 'Scope Model';
	}
	// clickedbutton == '.button5'
	else { 
		//$('.leftwintitle').text('Query Report');
		wintitle = 'Query Report';
	}
	//$('.nodewindow1').css('width',win1w);
	//$('.nodewindow1').css('height',win1h);
	//$('.nodewindow1').fadeIn(500);
	$('.selectedregions1').fadeOut(function () {
		$('.selectedregions1').css('display','none');
	});

	$('.nodewindow1').fadeOut(function () {
		$('.nodewindow1').css('width',win1w);
		$('.nodewindow1').css('height',win1h);
		$('.nodewindow1').fadeIn(500);
	});
	$('.leftwintitle').fadeOut(function () {
		$(this).text(wintitle).fadeIn(500);
	});
}

// reset two window dimensions for Explore Tables, Classify, Rule Author step
function resetWindows(clickedbutton) {
	//$('.nodewindow1').fadeOut();
	//$('.selectedregions1').fadeOut();
	//$('.nodewindow1').css('display','inline-block');
	//$('.nodewindow1').hide();
	//$('.selectedregions1').hide();
	//$('.selectedregions1').css('display','inline-block');
	var win1w = '65%';
	var win1h = '80%';
	var win2w = '32%';
	var win2h = '60%';
	var wintitlel, wintitler;
	if (clickedbutton == '.button1') {
		//$('.leftwintitle').text('demo Page 1 of 1');
		//$('.rightwintitle').text('Selected Regions');
		wintitlel = 'demo Page 1 of 1';
		wintitler = 'Selected Regions';
	}
	else if (clickedbutton == '.button3') {
		//$('leftwintitle').text('Table');
		//$('.rightwintitle').text('Virtual Object List');
		wintitlel = 'Table';
		wintitler = 'Virtual Object List';
	}
	// clickedbutton == '.button6'
	else {
		//$('.leftwintitle').text('Selected Rule');
		//$('.rightwintitle').text('Rule List');
		wintitlel = 'Selected Rule';
		wintitler = 'Rule List';
	}
	//$('.nodewindow1').css('width',win1w);
	//$('.nodewindow1').css('height',win1h);
	//$('.selectedregions1').css('width',win2w);
	//$('.selectedregions1').css('height',win2h);

	//$('.selectedregions1').fadeIn(600);
	//$('.nodewindow1').fadeIn(500);
	//$('nodewindow1').css('display','none');

	$('.nodewindow1').fadeOut(function () {
		$(this).css('display','none');
		$(this).css({'display':'inline-block','width':win1w,
			'height':win1h}).fadeIn(500);
	}); 

	//$('.selectedregions1').css('display','none');
	$('.selectedregions1').fadeOut(function () {
		$(this).css('display','none');
		$(this).css({'display':'inline-block','width':win2w,
			'height':win2h}).fadeIn(600);
	}); 

	$('.rightwintitle').fadeOut(function () {
		$(this).text(wintitler).fadeIn(500);
	});
	$('.leftwintitle').fadeOut(function () {
		$(this).text(wintitlel).fadeIn(500);
	});
} 

$(document).ready(function () {
	$('.description').hide();
	$('.stepcount').hide();
	$('.nodewindow1').hide();
	$('.selectedregions1').hide();
	$('.welcomemsg').hide();
	$('.instructions').hide();
	$('.welcomemsg').fadeIn(1700);
	$('.instructions').fadeIn(2100);
	$('.button1').click(function () {
		/*$('.description').fadeIn(400);
		$('.stepcount').fadeIn(400);*/
		if ($('.description').text() != "Select tables to analyze") {
			$('.description').fadeOut(function () {
				$(this).text("Select tables to analyze").fadeIn(300);
			});
			//$('.nodewindow1').fadeIn(500);
			//$('.selectedregions1').fadeIn(500);
			//resetWindows('.button1');
			/*$('.nodewindow1').css('width','65%');
			$('.nodewindow1').css('height','80%');
			$('.selectedregions1').css('width','32%');
			$('.selectedregions1').css('height','60%');
			$('.nodewindow1').fadeIn(500);
			$('.selectedregions1').fadeIn(500); */
			resetWindows('.button1');
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
			resetOneWindow('.button2');
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
			resetWindows('.button3');
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
			resetOneWindow('.button4');
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
			resetOneWindow('.button5');
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
			resetWindows('.button6');
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