$(document).ready(function() {
	// $(".bg").fadeIn(200);
	// $("#main-title").fadeIn(200);



	//carousel shiz
	const distanceToNextImage = -450;
	let ghcCurrentImageNumber = 0;

	$("#lightbox-ghc").hide();
	$("#overlay-ghc").hide();

	$("#right-ghc").click(function() {
		ghcCurrentImageNumber = (ghcCurrentImageNumber + 1) % 8;
		$("#carousel-strip-ghc").css("left", ghcCurrentImageNumber * distanceToNextImage );

		// ghcCurrentImageNumber += 1;
		// $("#carousel-strip-ghc").css("left", ghcCurrentImageNumber * distanceToNextImage);
	})

	$("#left-ghc").click(function() {
		ghcCurrentImageNumber -= 1;
		$("#carousel-strip-ghc").css("left", ghcCurrentImageNumber * distanceToNextImage);
		// 	ghccurrentImageNumber = ghcCurrentImageNumber == 0 ? 8 : (ghcCurrentImageNumber - 1);
		// 	$("#carousel-strip").css("left", ghcCurrentImageNumber * distanceToNextImage + "px");
	})

	$("#image-ghc").click(function() {
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		ghccurrentImageNumber = parseInt($(this).attr("id"), 10);
		let newLeft = distanceToNextImage * ghccurrentImageNumber;
		$("#carousel-strip-ghc").css("left", newLeft);
		$("#lightbox-ghc").show();
		$("#overlay-ghc").show();

		// let imgNum = parseInt($(this).attr("id"));
		// // console.log(imgNum);
		// $("#carousel-strip-ghc").css("left", imgNum * distanceToNextImage);
		// $("#lightbox-ghc").show();
	})
	
	// OTHER CODE
	// This closes the lightbox when you click on the overlay or the x.
	$("#overlay-ghc, #close-ghc").click(function() {
		$("#lightbox-ghc").hide();
	})

//europe
	let europeCurrentImageNumber = 0;

	$("#lightbox-europe").hide();

	$("#right-europe").click(function() {
		europeCurrentImageNumber = (europeCurrentImageNumber + 1) % 38;
		$("#carousel-strip-europe").css("left", europeCurrentImageNumber * distanceToNextImage );

		// ghcCurrentImageNumber += 1;
		// $("#carousel-strip-ghc").css("left", ghcCurrentImageNumber * distanceToNextImage);
	})

	$("#left-europe").click(function() {
		// europeCurrentImageNumber -= 1;
		// $("#carousel-strip-europe").css("left", europeCurrentImageNumber * distanceToNextImage);
		europeCurrentImageNumber -= 1;
		$("#carousel-strip-europe").css("left", europeCurrentImageNumber * distanceToNextImage);
			// europeCurrentImageNumber = europeCurrentImageNumber == 0 ? 8 : (europeCurrentImageNumber - 1);
			// $("#carousel-strip").css("left", europeCurrentImageNumber * distanceToNextImage + "px");
	})

	$("#image-europe").click(function() {
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		europecurrentImageNumber = parseInt($(this).attr("id"), 10);
		let newLeft = distanceToNextImage * europecurrentImageNumber;
		$("#carousel-strip-europe").css("left", newLeft);
		$("#lightbox-europe").show();

		// let imgNum = parseInt($(this).attr("id"));
		// // console.log(imgNum);
		// $("#carousel-strip-ghc").css("left", imgNum * distanceToNextImage);
		// $("#lightbox-ghc").show();
	})
	
	// OTHER CODE
	// This closes the lightbox when you click on the overlay or the x.
	$("#overlay-europe, #close-europe").click(function() {
		$("#lightbox-europe").hide();
	})
	//
	
//costa rica
	let crCurrentImageNumber = 0;

	$("#lightbox-cr").hide();

	$("#right-cr").click(function() {
		crCurrentImageNumber = (crCurrentImageNumber + 1) % 11;
		$("#carousel-strip-cr").css("left", crCurrentImageNumber * distanceToNextImage );

		// ghcCurrentImageNumber += 1;
		// $("#carousel-strip-ghc").css("left", ghcCurrentImageNumber * distanceToNextImage);
	})

	$("#left-cr").click(function() {
		// europeCurrentImageNumber -= 1;
		// $("#carousel-strip-europe").css("left", europeCurrentImageNumber * distanceToNextImage);
		crCurrentImageNumber -= 1;
		$("#carousel-strip-cr").css("left", crCurrentImageNumber * distanceToNextImage);
			// europeCurrentImageNumber = europeCurrentImageNumber == 0 ? 8 : (europeCurrentImageNumber - 1);
			// $("#carousel-strip").css("left", europeCurrentImageNumber * distanceToNextImage + "px");
	})

	$("#image-cr").click(function() {
		$('html, body').animate({ scrollTop: 0 }, 'fast');

		crcurrentImageNumber = parseInt($(this).attr("id"), 10);
		let newLeft = distanceToNextImage * crcurrentImageNumber;
		$("#carousel-strip-cr").css("left", newLeft);
		$("#lightbox-cr").show();

		// let imgNum = parseInt($(this).attr("id"));
		// // console.log(imgNum);
		// $("#carousel-strip-ghc").css("left", imgNum * distanceToNextImage);
		// $("#lightbox-ghc").show();
	})
	
	// OTHER CODE
	// This closes the lightbox when you click on the overlay or the x.
	$("#overlay-cr, #close-cr").click(function() {
		$("#lightbox-cr").hide();
	})
});