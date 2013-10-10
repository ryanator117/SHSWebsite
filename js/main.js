$(document).ready(function () {

	// Email cloaking - Prevent bots from sending spam to the site feedback email

	$("#email").hover(function() { 
		// need to change the href attribute of the email_link and
		// change the innerHTML of the email span to the email
		$("#email").html("WebDesignSkyview@gmail.com");
		$("#email_link").attr("href", "mailto:WebDesignSkyview@gmail.com?subject=Website Feedback");
	});

	$("#email").mouseout(function() { 
		// need to change the href attribute of the email_link and
		// change the innerHTML of the email span to the placeholder
		$("#email").html("email address");
		$("#email_link").attr("href", "#");
	});

	// Searchbox opening and closing

	$('#search').click(function (e) {
		//Takes the id of the clicked element to decide if
		//the bar should be opened or closed
		id = e.target.id;
		if (id == 'OSB') {
			openSearch();
		}else if (id == 'CSB') {
			closeSearch();
		}else{
			console.log('Search error');
		}
	});

});

var id = null;

function closeSearch() {
	$('#search').animate({
		'width' : '32px'
	});
	$('#search').html('<a href="#"><img src="images/searchIcon.png" id="OSB" /></a><img id="CSB" src="images/closeSearchButton.png"/>');
}
function openSearch() {
	$('#search').animate({
		'width' : '256px'
	}, 400, function () {
		$('#searchBox').focus();
	});
	$('#search').html('<input type="text" id="searchBox" /><img id="CSB" src="images/closeSearchButton.png"/>	');
	$('#CSB').css('display', 'inline');
}
