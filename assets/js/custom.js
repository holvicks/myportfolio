$(document).ready(function(){
	"use strict";
    
        /*==================================
==================================== */



/*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. Smooth Scroll spy
3. Progress-bar
4. owl carousel
5. welcome animation support
======================================*/

    // 1. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	
	
	
	// 2. Smooth Scroll spy
		
		$('.header-area').sticky({
           topSpacing:0
        });
		
		//=============

		$('li.smooth-menu a').bind("click", function(event) {
			event.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 0
			}, 1200,'easeInOutExpo');
		});
		
		$('body').scrollspy({
			target:'.navbar-collapse',
			offset:0
		});

	// 3. Progress-bar
	
		var dataToggleTooTip = $('[data-toggle="tooltip"]');
		var progressBar = $(".progress-bar");
		if (progressBar.length) {
			progressBar.appear(function () {
				dataToggleTooTip.tooltip({
					trigger: 'manual'
				}).tooltip('show');
				progressBar.each(function () {
					var each_bar_width = $(this).attr('aria-valuenow');
					$(this).width(each_bar_width + '%');
				});
			});
		}
	
	// 4. owl carousel
	
		// i. client (carousel)
		
			$('#client').owlCarousel({
				items:7,
				loop:true,
				smartSpeed: 1000,
				autoplay:true,
				dots:false,
				autoplayHoverPause:true,
				responsive:{
						0:{
							items:2
						},
						415:{
							items:2
						},
						600:{
							items:4

						},
						1199:{
							items:4
						},
						1200:{
							items:7
						}
					}
				});
				
				
				$('.play').on('click',function(){
					owl.trigger('play.owl.autoplay',[1000])
				})
				$('.stop').on('click',function(){
					owl.trigger('stop.owl.autoplay')
				})


    // 5. welcome animation support

        // $(window).load(function(){
        // 	$(".header-text h2,.header-text h1,.header-text p").removeClass("animated fadeInUp").css({'opacity':'0'});
        //     $(".header-text a").removeClass("animated fadeInDown").css({'opacity':'0'});
        // });

        // $(window).load(function(){
        // 	$(".header-text h2,.header-text h1,.header-text p").addClass("animated fadeInUp").css({'opacity':'0'});
        //     $(".header-text a").addClass("animated fadeInDown").css({'opacity':'0'});
        // });
	    $(window).on('scroll', function() {
			var scrollTop = $(this).scrollTop();
			var windowHeight = $(window).height();
			var docHeight = $(document).height();
	
			// Calculate the current scroll percentage for h1 and h2
			var scrollPercentage = scrollTop / (docHeight - windowHeight);
	
			// Translate h1 and h2 based on scroll percentage
			var h1h2TranslateValue = scrollPercentage * 1000; // Max translation value for h1 and h2
			$('.header-text h1').css('transform', 'translateX(' + (-h1h2TranslateValue) + 'vw)');
			$('.header-text h2').css('transform', 'translateX(' + h1h2TranslateValue + 'vw)');
	
			// Calculate the translateY and opacity for header-container
			var movementDistance = 20; // Maximum movement in pixels
			var translateY = Math.min(scrollTop, movementDistance);
			var opacity = 1 - (scrollTop / windowHeight);
			opacity = Math.max(0, opacity); // Ensure opacity doesn't go below 0
	
			// Apply the translateY and opacity to the header-container and .header-text a
			$('.header-container, .header-text a').css({
				'transform': 'translateY(' + translateY + 'px)',
				'opacity': opacity
			});
	
			// Move the p element in the opposite direction
			var pTranslateY = -translateY; // Moving up when header-container moves down
			$('.header-text p').css({
				'transform': 'translateY(' + pTranslateY + 'px)'
			});
		});

		$('#navbar-menu').on('show.bs.collapse', function() {
			$(this).addClass('dropdown-active');
		});
	
		// Listen for the 'hide.bs.collapse' event on the dropdown menu
		$('#navbar-menu').on('hide.bs.collapse', function() {
			$(this).removeClass('dropdown-active');
		});




		
		
});	

