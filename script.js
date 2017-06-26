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

function resetWindow1 () {
	/*if ($('.nodewindow1').is(":hidden")) {
		$('.nodewindow1').fadeIn(1600);
		$('.selectedregions1').fadeIn(1600);
		$('.leftwintitle').fadeOut(function () {
			$(this).text('demo Page 1 of 1').fadeIn(1500);
		});
		$('.rightwintitle').fadeOut(function () {
			$(this).text('Selected Regions').fadeIn(1500);
		});
	}*/
	if ($('.stepcount').text() == "step 2/6") {
		$('.graph2').fadeOut(function () {
			$('.nodewindow1').fadeIn(1600);
			$('.selectedregions1').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('demo Page 1 of 1').fadeIn(1500);
			});
			$('.rightwintitle').fadeOut(function () {
				$(this).text('Selected Regions').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 3/6") {
		$('.virtualobjectlist3').fadeOut();
		$('.table3').fadeOut(function () {
			$('.nodewindow1').fadeIn(1600);
			$('.selectedregions1').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('demo Page 1 of 1').fadeIn(1500);
			});
			$('.rightwintitle').fadeOut(function () {
				$(this).text('Selected Regions').fadeIn(1500);
			});
		});
	}
}

function resetWindow2 () {
	if ($('.stepcount').text() == "step 1/6") {
		$('.selectedregions1').fadeOut();
		$('.nodewindow1').fadeOut(function () {
			$('.graph2').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Graph').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 3/6") {
		$('.virtualobjectlist3').fadeOut();
		$('.table3').fadeOut(function () {
			$('.graph2').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Graph').fadeIn(1500);
			});
		});
	}
}

function resetWindow3 () {
	if ($('.stepcount').text() == "step 1/6") {
		$('.selectedregions1').fadeOut();
		$('.nodewindow1').fadeOut(function () {
			$('.table3').fadeIn(1600);
			$('.virtualobjectlist3').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Table').fadeIn(1500);
			});
			$('.rightwintitle').fadeOut(function () {
				$(this).text('Virtual Object List').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 2/6") {
		$('.graph2').fadeOut(function () {
			$('.table3').fadeIn(1600);
			$('.virtualobjectlist3').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Table').fadeIn(1500);
			});
			$('.rightwintitle').fadeOut(function () {
				$(this).text('Virtual Object List').fadeIn(1500);
			});
		});
	}
}

function resetWindow4 () {
	if ($('.stepcount').text() == "step 1/6") {
		$('.selectedregions1').fadeOut();
		$('.nodewindow1').fadeOut(function () {
			$('.scopemodel4').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Scope Model').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 2/6") {
		$('.graph2').fadeOut();
		$('.table3').fadeOut(function () {
			$('.scopemodel4').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Scope Model').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 3/6") {
		$('.virtualobjectlist3').fadeOut();
		$('.table3').fadeOut(function () {
			$('.scopemodel4').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Scope Model').fadeIn(1500);
			});
		});
	}
}

function resetWindow5 () {
	if ($('.stepcount').text() == "step 1/6") {
		$('.selectedregions1').fadeOut();
		$('.nodewindow1').fadeOut(function () {
			$('.queryreport5').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Query Report').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 2/6") {
		$('.graph2').fadeOut(function () {
			$('.queryreport5').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Query Report').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 3/6") {
		$('.virtualobjectlist3').fadeOut();
		$('.table3').fadeOut(function () {
			$('.queryreport5').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Query Report').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 4/6") {
		$('.scopemodel4').fadeOut(function () {
			$('.queryreport5').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Query Report').fadeIn(1500);
			});
		});
	}
}

function resetWindow6 () {
	if ($('.stepcount').text() == "step 1/6") {
		$('.selectedregions1').fadeOut();
		$('.nodewindow1').fadeOut(function () {
			$('.selectedrule6').fadeIn(1600);
			$('.rulelist6').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Selected Rule').fadeIn(1500);
			});
			$('.rightwintitle').fadeOut(function () {
				$(this).text('Rule List').fadeIn(1500);
			});
		});
	}
}

$(document).ready(function () {
	$('.description').hide();
	$('.stepcount').hide();
	$('.nodewindow1').hide();
	$('.selectedregions1').hide();
	$('.welcomemsg').hide();
	$('.instructions').hide();
	$('.welcomemsg').fadeIn(1900);
	$('.instructions').fadeIn(2400);
	$('.nodewindow1').hide();
	$('.selectedregions1').hide();
	$('.graph2').hide();
	$('.table3').hide();
	$('.virtualobjectlist3').hide();
	$('.scopemodel4').hide();
	$('.queryreport5').hide();
	$('.selectedrule6').hide();
	$('.rulelist6').hide();
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
			$('.welcomemsg').hide();
			$('.instructions').hide();
			//resetWindows('.button1');
			resetWindow1();
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
			//resetOneWindow('.button2');
			resetWindow2();
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
			//resetWindows('.button3');
			resetWindow3();
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
			//resetOneWindow('.button4');
			resetWindow4();
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
			//resetOneWindow('.button5');
			resetWindow5();
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