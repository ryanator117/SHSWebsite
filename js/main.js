$(document).ready(function () {
	size();
	$(window).resize(function () {
		size();
	});
	
	$('nav a').click(function () {
		openLink($(this).attr('href'));
	});
	
	$('#navBG').not('a').click(function () {
		$(this).fadeOut(400);
	});
	
});

function size() {
	$('section').css('height', $(window).height() - $('header').height() - $('nav').height() - $('footer').height());
	var width = 0;
	$('nav a').each(function () {
		width += $(this).outerWidth();
	});
	$('nav a:first-of-type').css('margin-left', 500 - (width / 2) + 'px');
}

function openLink(href) {
	href = href.substring(1);
	$('#navBG h1').html(href);
	$('#navBG').fadeIn(400);
}