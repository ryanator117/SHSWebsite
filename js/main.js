$(document).ready(function () {

	// Email cloaking - Prevent bots from sending spam to the site feedback email

	$("#email").hover(function() { 
		// need to change the href attribute of the email_link and
		// change the innerHTML of the email span to the email
		$("#email").html("WebDesignSkyview@gmail.com");
		$("#email").attr("href", "mailto:WebDesignSkyview@gmail.com?subject=Website Feedback");
	});

	$("#email").mouseout(function() { 
		// need to change the href attribute of the email_link and
		// change the innerHTML of the email span to the placeholder
		$("#email").html("email address");
		$("#email").attr("href", "#");
	});

	// Searchbox opening and closing

	$('#searchBox').click(function (e) {
		if ($('#searchBox').width() == 0) {
			openSearch();
		}
	});
	
	$('#closeSearchBox').click(function (e) {
		closeSearch();
	});
});

function closeSearch() {
	$('#searchBox').animate({
		'width' : '0px'
	});
	$('#searchBox').css({
		'box-shadow' : 'none',
		'background-color' : '#082D7A',
		'background-image' : 'url(\'images/openSearchButtonLight.png\')',
		'cursor' : 'pointer'
	});
	$('#closeSearchBox').hide();
}
function openSearch() {
	$('#searchBox').animate({
		'width' : '224px'
	});
	$('#searchBox').css({
		'box-shadow' : 'inset 0 0 16px #555',
		'background-color' : 'white',
		'background-image' : 'url(\'images/openSearchButtonDark.png\')',
		'cursor' : 'text'
	});
	$('#closeSearchBox').show();
}

function search(text) {
	if (text == '') {
		$('#searchDropdown').slideUp(200);
	}else{
		$('#searchDropdown').slideDown(200);
	}
}