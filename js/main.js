$(document).ready(function () {
	size();
	$(window).resize(function () {
		size();
	});
});
function size() {
	$('section').css('height', $(window).height() - $('header').height() - $('nav').height() - $('footer').height());
	
	$('nav a').css('padding', '5px 0');
	var width = 0;
	$('nav a').each(function () {
		width += $(this).width();
	});
	var padding = Math.floor((1000 - width) / 11);
	$('nav a').css('padding', '5px ' + padding + 'px');
	width = 0;
	$('nav a').each(function () {
		width += $(this).outerWidth();
	});
	$('nav').css('width', 1000 - ((1000-width) / 1) + 'px');
	$('nav').css('padding', '0 ' + ((1000-width) / 2) + 'px');
}