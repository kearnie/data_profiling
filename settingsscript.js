// reset visuals of unclicked buttons; pass in string arg
function resetbutton(unclickedbutton) { 
	//var currClass = $(unclickedbutton).attr('class');
	//var hoverClass = unclickedbutton.concat('hover');
	$(unclickedbutton).removeClass('highlighted');
	$(unclickedbutton).removeClass('buttonhover');
}

// OFFICIAL BUTTON STEP WINDOW FADING IN LOADS START HERE 

function resetWindow1 () {
	if ($('.stepcount').text() == "step 2/6") {
		$('.graph2').fadeOut(function () {
			$('.nodewindow1').fadeIn(1600);
			$('.selectedregions1').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Selected VO Model').fadeIn(1500);
			});
			$('.rightwintitle').fadeOut(function () {
				$(this).text('Virtual Object List').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 3/6") {
		$('.table3').fadeOut(function () {
			$('.nodewindow1').fadeIn(1600);
			$('.selectedregions1').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Selected VO Model').fadeIn(1500);
			});
			$('.rightwintitle').fadeOut(function () {
				$(this).text('Virtual Object List').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 4/6") {
		$('.scopemodel4').fadeOut(function () {
			$('.nodewindow1').fadeIn(1600);
			$('.selectedregions1').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Selected VO Model').fadeIn(1500);
			});
			$('.rightwintitle').fadeOut(function () {
				$(this).text('Virtual Object List').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 5/6") {
		$('.queryreport5').fadeOut(function () {
			$('.nodewindow1').fadeIn(1600);
			$('.selectedregions1').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Selected VO Model').fadeIn(1500);
			});
			$('.rightwintitle').fadeOut(function () {
				$(this).text('Virtual Object List').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 6/6") {
		$('.selectedrule6').fadeOut(function () {
			$('.nodewindow1').fadeIn(1600);
			$('.selectedregions1').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Selected VO Model').fadeIn(1500);
			});
			$('.rightwintitle').fadeOut(function () {
				$(this).text('Virtual Object List').fadeIn(1500);
			});
		});
	}
	else if ($('.welcomemsg').is(":visible")) {
		$('.welcomemsg').hide();
		$('.instructions').hide();
		$('.nodewindow1').fadeIn(1600);
		$('.selectedregions1').fadeIn(1600);
		$('.leftwintitle').fadeOut(function () {
			$(this).text('Selected VO Model').fadeIn(1500);
		});
		$('.rightwintitle').fadeOut(function () {
			$(this).text('Virtual Object List').fadeIn(1500);
		});
	}
}

function resetWindow2 () {
	if ($('.stepcount').text() == "step 1/6") {
		$('.selectedregions1').fadeOut();
		$('.nodewindow1').fadeOut(function () {
			$('.graph2').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('ADF Connection').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 3/6") {
		$('.table3').fadeOut(function () {
			$('.graph2').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('ADF Connection').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 4/6") {
		$('.scopemodel4').fadeOut(function () {
			$('.graph2').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('ADF Connection').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 5/6") {
		$('.queryreport5').fadeOut(function () {
			$('.graph2').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('ADF Connection').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 6/6") {
		$('.selectedrule6').fadeOut(function () {
			$('.graph2').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('ADF Connection').fadeIn(1500);
			});
		});
	}
	else if ($('.welcomemsg').is(":visible")) {
		$('.welcomemsg').hide();
		$('.instructions').hide();
		$('.graph2').fadeIn(1600);
		$('.leftwintitle').fadeOut(function () {
			$(this).text('ADF Connection').fadeIn(1500);
		});
	}
}

function resetWindow3 () {
	if ($('.stepcount').text() == "step 1/6") {
		$('.selectedregions1').fadeOut();
		$('.nodewindow1').fadeOut(function () {
			$('.table3').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Update Tree & Update Data').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 2/6") {
		$('.graph2').fadeOut(function () {
			$('.table3').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Update Tree & Update Data').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 4/6") {
		$('.scopemodel4').fadeOut(function () {
			$('.table3').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Update Tree & Update Data').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 5/6") {
		$('.queryreport5').fadeOut(function () {
			$('.table3').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Update Tree & Update Data').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 6/6") {
		$('.selectedrule6').fadeOut(function () {
			$('.table3').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Update Tree & Update Data').fadeIn(1500);
			});
		});
	}
	else if ($('.welcomemsg').is(":visible")) {
		$('.welcomemsg').hide();
		$('.instructions').hide();
		$('.table3').fadeIn(1600);
		$('.leftwintitle').fadeOut(function () {
			$(this).text('Update Tree & Update Data').fadeIn(1500);
		});
	}
}

function resetWindow4 () {
	if ($('.stepcount').text() == "step 1/6") {
		$('.selectedregions1').fadeOut();
		$('.nodewindow1').fadeOut(function () {
			$('.scopemodel4').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Data Classification').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 2/6") {
		$('.graph2').fadeOut(function () {
			$('.scopemodel4').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Data Classification').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 3/6") {
		$('.table3').fadeOut(function () {
			$('.scopemodel4').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Data Classification').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 5/6") {
		$('.queryreport5').fadeOut(function () {
			$('.scopemodel4').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Data Classification').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 6/6") {
		$('.selectedrule6').fadeOut(function () {
			$('.scopemodel4').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Data Classification').fadeIn(1500);
			});
		});
	}
	else if ($('.welcomemsg').is(":visible")) {
		$('.welcomemsg').hide();
		$('.instructions').hide();
		$('.scopemodel4').fadeIn(1600);
		$('.leftwintitle').fadeOut(function () {
			$(this).text('Data Classification').fadeIn(1500);
		});
	}
}

function resetWindow5 () {
	if ($('.stepcount').text() == "step 1/6") {
		$('.selectedregions1').fadeOut();
		$('.nodewindow1').fadeOut(function () {
			$('.queryreport5').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Name Classification').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 2/6") {
		$('.graph2').fadeOut(function () {
			$('.queryreport5').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Name Classification').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 3/6") {
		$('.table3').fadeOut(function () {
			$('.queryreport5').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Name Classification').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 4/6") {
		$('.scopemodel4').fadeOut(function () {
			$('.queryreport5').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Name Classification').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 6/6") {
		$('.selectedrule6').fadeOut(function () {
			$('.queryreport5').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Name Classification').fadeIn(1500);
			});
		});
	}
	else if ($('.welcomemsg').is(":visible")) {
		$('.welcomemsg').hide();
		$('.instructions').hide();
		$('.queryreport5').fadeIn(1600);
		$('.leftwintitle').fadeOut(function () {
			$(this).text('Name Classification').fadeIn(1500);
		});
	}
}

function resetWindow6 () {
	if ($('.stepcount').text() == "step 1/6") {
		$('.selectedregions1').fadeOut();
		$('.nodewindow1').fadeOut(function () {
			$('.selectedrule6').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Class Groups').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 2/6") {
		$('.graph2').fadeOut(function () {
			$('.selectedrule6').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Class Groups').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 3/6") {
		$('.table3').fadeOut(function () {
			$('.selectedrule6').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Class Groups').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 4/6") {
		$('.scopemodel4').fadeOut(function () {
			$('.selectedrule6').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Class Groups').fadeIn(1500);
			});
		});
	}
	else if ($('.stepcount').text() == "step 5/6") {
		$('.queryreport5').fadeOut(function () {
			$('.selectedrule6').fadeIn(1600);
			$('.leftwintitle').fadeOut(function () {
				$(this).text('Class Groups').fadeIn(1500);
			});
		});
	}
	else if ($('.welcomemsg').is(":visible")) {
		$('.welcomemsg').hide();
		$('.instructions').hide();
		$('.selectedrule6').fadeIn(1600);
		$('.leftwintitle').fadeOut(function () {
			$(this).text('Class Groups').fadeIn(1500);
		});
	}
}

$(document).ready(function () {
	// hide all assets except for the welcoming message and IT logo at first
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
	//$('.virtualobjectlist3').hide();
	$('.scopemodel4').hide();
	$('.queryreport5').hide();
	$('.selectedrule6').hide();
	//$('.rulelist6').hide();
	$('.button1').click(function () {
		/*$('.description').fadeIn(400);
		$('.stepcount').fadeIn(400);*/
		if ($('.description').text() != "Edit/create virtual objects") {
			$('.description').fadeOut(function () {
				$(this).text("Edit/create virtual objects").fadeIn(700);
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
			//$('.welcomemsg').hide();
			//$('.instructions').hide();
			//resetWindows('.button1');
			resetWindow1();
			//$('.welcomemsg').hide();
			//$('.instructions').hide();
		};
		if ($('.stepcount').text() != "step 1/6") {
			$('.stepcount').fadeOut(function () {
				$(this).text("step 1/6").fadeIn(700);
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
		if ($('.description').text() != "Establish grid connection") {
			$('.description').fadeOut(function () {
				$(this).text("Establish grid connection").fadeIn(700);
			});
			//resetOneWindow('.button2');
			resetWindow2();
		};
		if ($('.stepcount').text() != "step 2/6") {
			$('.stepcount').fadeOut(function () {
				$(this).text("step 2/6").fadeIn(700);
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
		if ($('.description').text() != "Populate local region tree and search index") {
			$('.description').fadeOut(function () {
				$(this).text("Populate local region tree and search index").fadeIn(700);
			});
			//resetWindows('.button3');
			resetWindow3();
		};
		if ($('.stepcount').text() != "step 3/6") {
			$('.stepcount').fadeOut(function () {
				$(this).text("step 3/6").fadeIn(700);
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
		if ($('.description').text() != "Data classification patterns") {
			$('.description').fadeOut(function () {
				$(this).text("Data classification patterns").fadeIn(700);
			});
			//resetOneWindow('.button4');
			resetWindow4();
		};
		if ($('.stepcount').text() != "step 4/6") {
			$('.stepcount').fadeOut(function () {
				$(this).text("step 4/6").fadeIn(700);
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
		if ($('.description').text() != "Name classification examples") {
			$('.description').fadeOut(function () {
				$(this).text("Name classification examples").fadeIn(700);
			});
			//resetOneWindow('.button5');
			resetWindow5();
		};
		if ($('.stepcount').text() != "step 5/6") {
			$('.stepcount').fadeOut(function () {
				$(this).text("step 5/6").fadeIn(700);
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
		if ($('.description').text() != "Context class groups") {
			$('.description').fadeOut(function () {
				$(this).text("Context class groups").fadeIn(700);
			});
			//resetWindows('.button6');
			resetWindow6();
		};
		if ($('.stepcount').text() != "step 6/6") {
			$('.stepcount').fadeOut(function () {
				$(this).text("step 6/6").fadeIn(700);
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

});