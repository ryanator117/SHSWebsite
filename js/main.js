$(document).ready(function () {
	size();
	$(window).resize(function () {
		size();
	});
});
function size() {
	$('section').css('height', $(window).height() - $('header').height() - $('nav').height() - $('footer').height());
	
	$('nav a').css('padding', '5px 0');
	var linkLeft = $('nav a').last().offset().left;
	var containerLeft = $('#container').last().offset().left;
	var padding = (linkLeft - containerLeft);
	padding /= 6;
	$('nav a').css('padding', '5px ' + padding + 'px');
}