$(document).ready(function() {
	$(".bg").hide();
	$(".bg").fadeIn(1500);
	// console.log($(".bg"));
	$("#main-title").hide()
	$("#main-title").fadeIn(2000);



	//carousel shiz
	const distanceToNextImage = -450;

// tahoe 
	let tahoeCurrentImageNumber = 0;
	let tahoeNumberImgs = 5;

	$("#lightbox-tahoe").hide();
	$("#right-tahoe").click(function() {
		tahoeCurrentImageNumber = (tahoeCurrentImageNumber + 1) % tahoeNumberImgs;
		$("#carousel-strip-tahoe").css("left", tahoeCurrentImageNumber * distanceToNextImage );
	})

	$("#left-tahoe").click(function() {
		tahoeCurrentImageNumber = (((tahoeCurrentImageNumber - 1) == -1) ? tahoeNumberImgs-1 : tahoeCurrentImageNumber - 1);
		$("#carousel-strip-tahoe").css("left", tahoeCurrentImageNumber * distanceToNextImage);
	})

	$(".image-tahoe").click(function() {
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		tahoecurrentImageNumber = parseInt($(this).attr("id"), 10);
		let newLeft = distanceToNextImage * tahoecurrentImageNumber;
		$("#carousel-strip-tahoe").css("left", newLeft);
		$("#lightbox-tahoe").show();
	})
	
	// OTHER CODE
	// This closes the lightbox when you click on the overlay or the x.
	$("#overlay-tahoe, #close-tahoe").click(function() {
		$("#lightbox-tahoe").hide();
	})

// seattle 
	let seattleCurrentImageNumber = 0;
	let seattleNumberImgs = 10;

	$("#lightbox-seattle").hide();
	$("#right-seattle").click(function() {
		seattleCurrentImageNumber = (seattleCurrentImageNumber + 1) % seattleNumberImgs;
		$("#carousel-strip-seattle").css("left", seattleCurrentImageNumber * distanceToNextImage );
	})

	$("#left-seattle").click(function() {
		// seattleCurrentImageNumber -= 1;
		seattleCurrentImageNumber = (((seattleCurrentImageNumber - 1) == -1) ? seattleNumberImgs-1 : seattleCurrentImageNumber - 1);
		$("#carousel-strip-seattle").css("left", seattleCurrentImageNumber * distanceToNextImage);
	})

	$(".image-seattle").click(function() {
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		seattlecurrentImageNumber = parseInt($(this).attr("id"), 10);
		let newLeft = distanceToNextImage * seattlecurrentImageNumber;
		$("#carousel-strip-seattle").css("left", newLeft);
		$("#lightbox-seattle").show();
	})
	
	// OTHER CODE
	// This closes the lightbox when you click on the overlay or the x.
	$("#overlay-seattle, #close-seattle").click(function() {
		$("#lightbox-seattle").hide();
	})

// ghc
	let ghcCurrentImageNumber = 0;
	let ghcNumberImgs = 8; 

	$("#lightbox-ghc").hide();

	$("#right-ghc").click(function() {
		ghcCurrentImageNumber = (ghcCurrentImageNumber + 1) % ghcNumberImgs;
		$("#carousel-strip-ghc").css("left", ghcCurrentImageNumber * distanceToNextImage );

		// ghcCurrentImageNumber += 1;
		// $("#carousel-strip-ghc").css("left", ghcCurrentImageNumber * distanceToNextImage);
	})

	$("#left-ghc").click(function() {
		// ghcCurrentImageNumber -= 1;
		ghcCurrentImageNumber = (((ghcCurrentImageNumber - 1) == -1) ? ghcNumberImgs-1 : ghcCurrentImageNumber - 1);
		$("#carousel-strip-ghc").css("left", ghcCurrentImageNumber * distanceToNextImage);
		// 	ghccurrentImageNumber = ghcCurrentImageNumber == 0 ? 8 : (ghcCurrentImageNumber - 1);
		// 	$("#carousel-strip").css("left", ghcCurrentImageNumber * distanceToNextImage + "px");
	})

	$(".image-ghc").click(function() {
		$('html, body').animate({ scrollTop: 0 }, 'fast');
		ghccurrentImageNumber = parseInt($(this).attr("id"), 10); // small c!!!
		let newLeft = distanceToNextImage * ghccurrentImageNumber;
		$("#carousel-strip-ghc").css("left", newLeft);
		$("#lightbox-ghc").show();

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
	let europeNumberImgs = 38

	$("#lightbox-europe").hide();

	$("#right-europe").click(function() {
		europeCurrentImageNumber = (europeCurrentImageNumber + 1) % europeNumberImgs;
		$("#carousel-strip-europe").css("left", europeCurrentImageNumber * distanceToNextImage );

		// ghcCurrentImageNumber += 1;
		// $("#carousel-strip-ghc").css("left", ghcCurrentImageNumber * distanceToNextImage);
	})

	$("#left-europe").click(function() {
		// europeCurrentImageNumber -= 1;
		// $("#carousel-strip-europe").css("left", europeCurrentImageNumber * distanceToNextImage);
		europeCurrentImageNumber = (((europeCurrentImageNumber - 1) == -1) ? europeNumberImgs-1 : europeCurrentImageNumber - 1);
		$("#carousel-strip-europe").css("left", europeCurrentImageNumber * distanceToNextImage);
			// europeCurrentImageNumber = europeCurrentImageNumber == 0 ? 8 : (europeCurrentImageNumber - 1);
			// $("#carousel-strip").css("left", europeCurrentImageNumber * distanceToNextImage + "px");
	})

	$(".image-europe").click(function() {
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
	let crNumberImgs = 11;

	$("#lightbox-cr").hide();

	$("#right-cr").click(function() {
		crCurrentImageNumber = (crCurrentImageNumber + 1) % crNumberImgs;
		$("#carousel-strip-cr").css("left", crCurrentImageNumber * distanceToNextImage );

		// ghcCurrentImageNumber += 1;
		// $("#carousel-strip-ghc").css("left", ghcCurrentImageNumber * distanceToNextImage);
	})

	$("#left-cr").click(function() {
		// europeCurrentImageNumber -= 1;
		// $("#carousel-strip-europe").css("left", europeCurrentImageNumber * distanceToNextImage);
		crCurrentImageNumber = (((crCurrentImageNumber - 1) == -1) ? crNumberImgs-1 : crCurrentImageNumber - 1);
		$("#carousel-strip-cr").css("left", crCurrentImageNumber * distanceToNextImage);
			// europeCurrentImageNumber = europeCurrentImageNumber == 0 ? 8 : (europeCurrentImageNumber - 1);
			// $("#carousel-strip").css("left", europeCurrentImageNumber * distanceToNextImage + "px");
	})

	$(".image-cr").click(function() {
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