$(document).ready(function () {
	$('#faculty').tablesorter({
		sortList: [[0,0], [1,0]],
		headers: {
			2: {
				sorter: false //disables email sorting
			}
		}
	});

	$('#faculty tr').each(function () {
		$(this).append('<td></td>');
	});

	$('#faculty tr').each(function () {
		if ($(this).children().html().split(', ').length == 2) {
			var name = $(this).find(':nth-child(1)').html().split(', ');
			var email = name[0].toLowerCase() + '.' + name[1].toLowerCase() + '@vansd.org';
			$(this).find(':nth-child(3)').html(email);
		}
	});

	$('#faculty tr td').each(function () {
		if (validateEmail($(this).html())) {
			$(this).html('<a href="mailto:' + $(this).html() + '">' + $(this).html() + '</a>');
		}
	});
});

function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
} 
