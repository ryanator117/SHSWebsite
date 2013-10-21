$(document).ready(function () {
	size();
	$(window).resize(function () {
		size();
	});
});

$(function () {
	$(document).easteregg({
		sequence : [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
		callback : function () {
			$('*').each(function () {
				var letters = '0123456789ABCDEF'.split('');
				var color = '#';
				for (var i = 0; i < 6; i++ ) {
					color += letters[Math.round(Math.random() * 15)];
				}
				$(this).css('background-color', color);
			});
		}
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