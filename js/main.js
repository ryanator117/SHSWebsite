$(document).ready(function () {
	size();
	$(window).resize(function () {
		size();
	});
	
	$('section .left, section .right, nav, footer, body').addClass('shadow');
	
	$('nav a:not(.noLink)').click(function () {
		openLink($(this).attr('href'));
	});
});

function size() {
	$('section').css('height', $(window).height() - $('header').height() - $('nav').height() - $('footer').height());
	var width = 0;
	$('nav a').each(function () {
		width += $(this).outerWidth();
	});
	$('nav a:first-of-type').css('margin-left', 500 - (width / 2) + 'px');
	
	$('body').click(function (e) {
		width = $(window).width() / 2;
		if (e.pageX < (width - 500) || e.pageX > (width + 500)) {
			$('#navBG').fadeOut(400);
		}
	});
}

function openLink(href) {
	$('#navBGnav').html($('nav').html());
	href = href.substring(1);
	$('#navBG h1').html(href);
	
	$('#navBG').fadeIn(400);

	$('nav a:not(.noLink)').click(function () {
		openLink($(this).attr('href'));
	});
}
