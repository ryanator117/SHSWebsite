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

	$('#search').click(function (e) {
		//Takes the id of the clicked element to decide if
		//the bar should be opened or closed
		id = e.target.id;
		if (id == 'search_open') {
			openSearch();
		}else if (id == 'search_close') {
			closeSearch();
		}
	});

});

var id = null;

function closeSearch() {
	$('#search').animate({
		'width' : '32px'
	});
	$('#search').html('<a href="#"><img src="images/searchIcon.png" id="search_close" /></a><img id="search_close" src="images/closeSearchButton.png"/>');
	// Should replace anchor tag with just img tag and use CSS to set cursor type
	$('#search').html('<a href="#"><img src="images/openSearchButton.png" id="search_close" /></a><img id="search_close" src="images/closeSearchButton.png"/>');
}
function openSearch() {
	openSearch.called = true;
	$('#search').animate({
		'width' : '256px'
	}, 400, function () {
		$('#searchBox').focus();
	});
	$('#search').html('<input type="text" id="searchBox" /><img id="search_close" src="images/closeSearchButton.png"/>	');
	$('#search_close').css('display', 'inline');

	//Initilizes event handelers after the textbox is loaded into the DOM

	$('#searchBox').keyup(function () {
		search($('#searchBox').val());
	});

	$('#searchBox').blur(function () {
		$('#searchDropdown').slideUp(200);
	});
	$('#searchBox').focus(function () {
		search($('#searchBox').val());
	});
}

function search(text) {
	if (text == '') {
		$('#searchDropdown').slideUp(200);
	}else{
		$('#searchDropdown').slideDown(200);
	}
}