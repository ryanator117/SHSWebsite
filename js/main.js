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
		$("#email").html("the feedback email address");
		$("#email_link").attr("href", "#");
	});
});