$(document).ready(function () {
	size()
	$(window).resize(function () {
		size();
	});
});
function size() {
	$('section').css('height', $(window).height() - $('header').height() - $('nav').height() - $('footer').height());
}