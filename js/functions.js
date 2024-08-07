	function PlayVideo() {


		$(".taptoburst").fadeOut("fast");



		var LongTap = $(".crackers-container.active .long-tap");

		$(".top-headline").removeClass("show-screen").fadeOut();
		LongTap.siblings('video').get(0).play();

	}


	$(".long-tap, .swiper-slide-active").on("click", function () {
		//alert();

		PlayVideo();


	});


	/*function sectionSwitcher(obj){
		$(".cracker-tap").removeClass('active');
		$(".crackers-container").removeClass('active').fadeOut();
		
	    var myEm = $(obj).attr('data-my-element');
	   // alert(myEm);
		$('.cracker-tap[data-my-element = '+myEm+']').addClass('active');
	    $('.crackers-container[data-my-element = '+myEm+']').addClass('active').fadeIn();
	}	*/



	$('.cracker-tap').on("click", function () {

		$(".taptoburst").fadeOut();

		//sectionSwitcher(this);

		$("video").each(function () {
			$(this).get(0).pause();
			$(this).get(0).currentTime = 0;
		});

		$(".top-headline").addClass("show-screen").fadeIn();
		PlayVideo();
	});






	var swiper = new Swiper('.crackers-swiper .swiper-container', {
		slidesPerView: 2,
		centeredSlides: true,
		spaceBetween: 10,
		grabCursor: true,
		/*  navigation: {
        nextEl: '.crackers-swiper .swiper-button-next',
        prevEl: '.crackers-swiper .swiper-button-prev',
      },*/

	});

	swiper.on('slideChangeTransitionEnd', function () {

		//alert();

		//New
		$(".cracker-tap").removeClass('active');
		$(".crackers-container").removeClass('active').fadeOut();

		var myEm = $(".swiper-slide-active .cracker-tap").attr('data-my-element');
		// alert(myEm);
		$('.swiper-slide-active .cracker-tap[data-my-element = ' + myEm + ']').addClass('active');
		$('.crackers-container[data-my-element = ' + myEm + ']').addClass('active').fadeIn();
		//New

		$(".taptoburst").fadeIn();

		setTimeout(function () {
			$(".taptoburst").fadeOut();
		}, 4000);


		$(".swiper-slide-active").find(".cracker-tap").click();

		/*var allVideo = $("video");

		allVideo.get(0).pause();	
		allVideo.get(0).currentTime = 0;	
			
			*/

		$("video").each(function () {
			$(this).get(0).pause();
			$(this).get(0).currentTime = 0;
		});

		$(".top-headline").addClass("show-screen").fadeIn();

		$(".end-screen").removeClass("show-screen");
		$(".crackers-swiper").removeClass("hide-crackers");
		

	});


	/*	  $('video').on('ended',function(){
	    //  console.log('Video has ended!');

	 
	    });
	*/


	$('video').on('timeupdate', function (event) {

		$this = $(this);

		if (this.currentTime > (this.duration - 2)) {
			
		//	alert();

			$(".end-screen").addClass("show-screen");
			$(".crackers-swiper").addClass("hide-crackers");
			
	
		}

	});

 


	$(".close").on("click", function () {

		$(".end-screen").removeClass("show-screen");
		$(".crackers-swiper").removeClass("hide-crackers");
		
		
		
			setTimeout(function(){ 
			$(this).fadeOut();
			}, 3000);
		
		//$("video").currentTime = 0;	

		$("video").get(0);

		swiper.slideNext();

	});


	$("video").on("ended", function(){

	 $(".close").fadeIn();
	 
	  });



	if (Modernizr.touch) {
		$('.tap-anim').on('touchstart', function (e) {
			var left = e.originalEvent.touches[0].pageX;
			var top = e.originalEvent.touches[0].pageY;

			$(this).append('<div class="dot" style="top:' + top + 'px;left:' + left + 'px;"></div>')
			setTimeout(function () {
				$('.tap-anim .dot:first-of-type').remove();
			}, 300);
		});
		document.body.addEventListener('touchmove', function (e) {
			e.preventDefault();
		});

	} else {



		$('.tap-anim').on('mousedown', function (e) {
			var left = e.pageX;
			var top = e.pageY;

			$(this).append('<div class="dot" style="top:' + top + 'px;left:' + left + 'px;"></div>')
			setTimeout(function () {
				$('.tap-anim .dot:first-of-type').remove();
			}, 300);
		});
	}
