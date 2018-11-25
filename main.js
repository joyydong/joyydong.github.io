$(document).ready(function() {
	const distanceToNextImage = -450;
	let currentImageNumber = 0;

	$("#lightbox").hide();

	$("#right").click(function() {
		currentImageNumber += 1;
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
	})

	$("#left").click(function() {
		currentImageNumber -= 1;
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage);
	})

	$(".item").click(function() {
		let imgNum = parseInt($(this).attr("id"));
		// console.log(imgNum);
		$("#carousel-strip").css("left", imgNum * distanceToNextImage);
		$("#lightbox").show();
	})
	

	// OTHER CODE
	// This closes the lightbox when you click on the overlay or the x.
	$("#overlay, #close").click(function() {
		$("#lightbox").hide();
	})
});