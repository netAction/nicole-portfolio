$(function() {

	// Smooth scrolling to anchors
	// https://stackoverflow.com/questions/14804941
	$(".navbar-nav a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 300, function(){
			window.location.hash = hash;
		});
	});

});

