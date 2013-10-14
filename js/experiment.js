$(document).ready(function () {
	$('.searchBox').on({
		keypress: function (e) {
			if (developmentMode && e.which == 13) {
				run($(this).val());
			}
			if (e.which == 13){
				if ($('.searchBox').val().trim().split(" ")[0] == "developmentl") {
					$(this).val("");
					openDevelopment();
					developmentMode = true;
				}
			}
		}
	});
});

var developmentMode = false

function openDevelopment() {
	$('#searchBox').css({
		'position' : 'fixed',
		'left' : '50%',
		'top' : '168px',
		'margin-left' : '228px',
		'width' : '240px',
		'background' : 'white',
		'padding' : '0 8px'
	});
	$('#searchBox').animate({
		'top' : '0',
		'left' : '0',
		'margin-left' : '0',
		'width' : '100%'
	}, function () {
		$('body').append('<div id="developmentOutput"></div>');
		$('#developmentOutput').css({
			'width' : '952px',
			'padding' : '8px',
			'position' : 'fixed',
			'left' : '50%',
			'bottom' : '0',
			'background-color' : 'black',
			'margin-left' : '-484px',
			'height' : '0',
			'color' : 'white'
		});
		$('#developmentOutput').animate({
			'height' : window.innerHeight - 48,
			'left' : '0',
			'margin-left' : '0',
			'width' : '100%'
		});
	});
}
function closeDevelopment() {
	$('#developmentOutput').animate({
		'height' : '0',
		'left' : '50%',
		'margin-left' : '-484px',
		'width' : '952px'
	}, function () {
		$('#developmentOutput').remove();

		$('#searchBox').animate({
			'top' : '168px',
			'left' : '50%',
			'margin-left' : '228px',
			'width' : '240px'
		}, function () {
			$('#searchBox').css({
				'position' : 'static',
				'width' : '0',
				'padding' : '0',
				'padding-left' : '32px',
				'margin' : '0',
				'background-image' : 'url(\'images/openSearchButtonLight.png\')',
				'background-position' : '5px 5px',
				'background-repeat' : 'no-repeat',
				'background-color' : '#082D7A',
				'box-shadow' : 'none',
				'cursor' : 'pointer'
			});
			$('#searchBox').blur();
			$('#closeSearchBox').hide();
		});
	});
}

var commands = ['help', 'strobe', 'exit']
function run(commandArgs) {
	commandArgs = commandArgs.trim();
	commandArgs = commandArgs.split(" ");
	var command = commandArgs[0];
	$.each(commands, function (key, value) {
		if (command == value) {
			$('.searchBox').val("");
			eval(command + "(commandArgs)");
		}
	});
}

function output(string) {
	var outputOld = $('#developmentOutput').html();
	$('#developmentOutput').html('<p>' + string + '</p>' + outputOld);
}

function inArray(array, check) {
	var success = false
	$.each(array, function (key, value) {
		if (check == value) {
			success = true;
		}
	})
	if (success) {
		return true;
	}else{
		return false;
	}

}

/*Commands*/
function help(args) {
	console.log(args[1]);
	if (args[1] == undefined) {
		var helpText = "Available commands are";
		$.each(commands, function (key, value) {
			helpText += " /" + value;
		});
		helpText += ". Use /help &lt;command&gt; to get help with a specific command."
		output(helpText);
	}else{
		helpHelper(args[1]);
	}	
}
function helpHelper(command) {
	if (command == 'help') {
		output('/help is used to get information about what the commands do, and what arguments can be passed into them.');
	}else if (command == 'exit') {
		output('/exit is used to close the command window and restore site functionality.');
	}else if (inArray(commands, command)) {
		output('There is no information available on /' + command + '.');
	}else{
		output('/' + command + ' does not exist');
	}
}


function strobe() {
	output('true');
}


function exit(args) {
	closeDevelopment();
}
