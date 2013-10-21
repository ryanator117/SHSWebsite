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
	$.each(keys, function (key, value) {
		value.splice(0, 1);
		value.push(e.which);
		console.log(value);
	});
});


