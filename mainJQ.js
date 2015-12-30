$(document).ready(function() {

	var menuFade = function() {
		$('.menuButton').on('click', function() {
			$(this).fadeOut();
			$('#navigationContainer').fadeIn();
			$('.menuClose').fadeIn();
		});

		$('.menuClose').on('click', function() {
			$(this).fadeOut();
			$('#navigationContainer').fadeOut();
			$('.menuButton').fadeIn();
		});

	 }();

$('#navigationContainer').hide();


}); // end document.ready
