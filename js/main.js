$(document).ready(function () {
	init();
});

function init() {
	$('#bgImage').load(function () {
		$('#backgroundHide').fadeOut(800);
	});
}