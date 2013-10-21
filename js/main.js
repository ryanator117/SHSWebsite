$(document).ready(function () {
	size();
	$(window).resize(function () {
		size();
	});
});

function size() {
	$('section').css('height', $(window).height() - $('header').height() - $('nav').outerHeight() - $('footer').outerHeight());
}

//Calendar
var curDate = new Date();
var curYear = curDate.getFullYear();
var curMonth = curDate.getMonth();
var curDay = curDate.getDate();
var curHour = curDate.getHours();
var curMin = curDate.getMinutes();
var curPeroid = "";

if (curHour > 12) {
	curHour -= 12;
	curPeroid = "PM"
}else{
	curPeroid = "AM"
}

var keys10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var keys9 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var keys8 = [0, 0, 0, 0, 0, 0, 0, 0];
var keys7 = [0, 0, 0, 0, 0, 0, 0];
var keys6 = [0, 0, 0, 0, 0, 0];
var keys5 = [0, 0, 0, 0, 0];
var keys4 = [0, 0, 0, 0];
var keys3 = [0, 0, 0];
var keys2 = [0, 0];
var keys1 = [0];

var keys = [keys1, keys2, keys3, keys4, keys5, keys6, keys7, keys8, keys9, keys10]

$(document).keydown(function (e) {
	console.log(e.which);
	$.each(keys, function (key, value) {
		value.splice(0, 1);
		value.push(e.which);
		test(value)
	});
});

function test(array) {
	if (array.toString() == [76, 83, 68].toString()) {
		lsd();
	}
	if (array.toString() == [88].toString()) {
		stop();
	}
	if (array.toString() == [81, 87, 69, 82, 84, 89, 85, 73, 79, 80].toString()) {
		gravity();
	}
}

var lsdInterval;
function lsd() {
	$('*').css('transition', 'background-color .5s');
	lsdInterval = setInterval(function () {
		$('*').each(function () {
			$(this).css('background-color', "#" + (Math.random().toString(16) + '000000').slice(2, 8));
		});
	}, 500);
}

function gravity() {
	$('section, #container, article').addClass('ignoreMe');
	$('section, #container, article').delay(1000).css({
		'background' : 'transparent',
		'transition' : 'background 2s'
	});
	$('body').jGravity({
		target: 'everything',
		ignoreClass: 'ignoreMe',
		weight: 50,
		depth: 1,
		drag: true
	});	
}

function stop() {
	clearInterval(lsdInterval);
	$('*').removeStyle('background-color');
	$('*').removeStyle('transition');
}



