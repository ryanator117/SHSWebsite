$(document).ready(function () {
	size();
	$(window).resize(function () {
		size();
	});
});

$(function () {
	var running = false;
	$(document).easteregg({
		sequence : [38, 40],
		callback : 	function () {
			var all = $('*');
			all.css('transition', 'background 0.2s ease-in-out');
			var interval = window.setInterval(function () {
				all.each(function () {
					var letters = '0123456789ABCDEF'.split('');
					var color = '#';
					for (var i = 0; i < 6; i++ ) {
						color += letters[Math.round(Math.random() * 15)];
					}
					$(this).css('background-color', color);
				});
			}, 500);
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