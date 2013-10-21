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
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();

console.log(currentMonth + "" + currentDay + "" + currentYear);