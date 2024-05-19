document.addEventListener("DOMContentLoaded", function () {
	$('.lazy').Lazy();
	/* ======  menu icon click ====== */
	const menuToggle = document.querySelector('#menu-toggle');
	const mobileMenu = document.querySelector('#mobile-menu');
	const bodyEl = document.body;

	if (menuToggle) {

		/*   клик поиконке гамбургер*/  
		menuToggle.addEventListener('click', ()=> {
			
			if (menuToggle.classList.contains('active')) {

				menuToggle.classList.remove('active');
				mobileMenu.classList.remove('active');
				bodyEl.classList.remove('lock');
			
			} else {
				menuToggle.classList.add('active');
			    mobileMenu.classList.add('active');
				bodyEl.classList.add('lock');
			}
		});

       /*   клик по мобильному меню*/  
		mobileMenu.addEventListener('click', () => {
			menuToggle.classList.remove('active');
			mobileMenu.classList.remove('active');
			bodyEl.classList.remove('lock');
		});
	}
	/*HEADER SLIDER */
	var headerSwiper = new Swiper(".header-slider", {
		autoplay:{
			delay: 5000
		},
		loop: true,
		speed: 1000,
		effect: "fade",
		 navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
	
	/*REVIEW SLIDER*/
	var reviewSwiper = new Swiper(".review-slider", {
		slidesPerView: 1,
        spaceBetween: 20,
		
		loop: true,
		speed: 1000,
		// autoHeight: true,
		 navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			 type: "fraction",
		},
		breakpoints: {
		
			599: {
				slidesPerView: 1.2,
				spaceBetween: 20
			},
			
			768: {
				slidesPerView: 1.7,
				spaceBetween: 20
			},
			1024: {
				slidesPerView: 2,
				spaceBetween: 20
			},
		}
	});
	/*SINGLE ARTICLE PAGE  SLIDER*/
 	var singleArticleSlider = new Swiper(".article-slider", {
		
        spaceBetween: 20,
		// autoplay:{
		// 	delay: 5000
		// },
		loop: true,
		speed: 1000,
		// autoHeight: true,
		 navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			 type: "fraction",
		}
	});
 	var part1 = new Swiper(".product-part-1", {
		loop: true,
		speed: 1000,
		spaceBetween: 10,
		 navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
 	var part2 = new Swiper(".product-part-2", {
		loop: true,
		speed: 1000,
		spaceBetween: 10,
		 navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
 	var part3 = new Swiper(".product-part-3", {
		loop: true,
		speed: 1000,
		spaceBetween: 10,
		 navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
 	var part4 = new Swiper(".product-part-4", {
		loop: true,
		speed: 1000,
		spaceBetween: 10,
		 navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});		
	/*круг с цветом в конструкторе*/
	const colorPalette = document.querySelectorAll('.model-color');
	if(colorPalette.length > 0){
		for(let item of colorPalette){
			item.addEventListener('click', ()=>{
				document.querySelector('.model-color--current').classList.remove('model-color--current');
				item.classList.add('model-color--current');
			});
		}
	}

	// VIDEO
	const videoContent = document.querySelectorAll('.video-preview-item');
	if (videoContent.length>0) {

		
		for(let clip of videoContent){
			const videoBtn = clip.querySelector('.play-icon');
			const videoClip = clip.querySelector('video');
			const videoPoster = clip.querySelector('.video-poster');
			

			clip.addEventListener('click', function () {
				if (videoClip.paused) {
					videoClip.play();
					videoBtn.style.opacity = "0";
					videoPoster.style.opacity = "0";
					
				} else {
					videoClip.pause();
					videoBtn.style.opacity = "1";
					videoPoster.style.opacity = "1";
					
				}
				//videoClip.play();
			});
			clip.addEventListener("ended", function () {
				videoClip.pause();
				videoBtn.style.opacity = "1";
				videoPoster.style.opacity = "1";
				
			});
		}
	}
	
	/* ==== Fancybox ===== */
	Fancybox.bind('[data-fancybox]', {
		 Thumbs: false,
		 Toolbar: {
			display: {
			left: [],
			middle: [],
			right: [ "close"],
			},
		},
	});

	/**********for custom input type="file********* */
	'use strict';

	;( function ( document, window, index )
	{
		var inputs = document.querySelectorAll( '.inputfile' );
		Array.prototype.forEach.call( inputs, function( input )
		{
			var label	 = input.nextElementSibling,
				labelVal = label.innerHTML;

			input.addEventListener( 'change', function( e )
			{
				var fileName = '';
				if( this.files && this.files.length > 1 )
					fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
				else
					fileName = e.target.value.split( '\\' ).pop();

				if( fileName ) {

					if ( label.firstChild.nodeType === Node.ELEMENT_NODE ) {
						console.log( label.firstChild.nodeType);
						label.querySelector( 'span' ).innerHTML = fileName;
					} else {
						label.nextElementSibling.innerHTML = fileName;
					}

					console.log(fileName);
				}
				else
					label.innerHTML = labelVal;
			});

			// Firefox bug fix
			input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
			input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
		});
	}( document, window, 0 ));

	/*===== back Top button ===== */
	const backTop = document.querySelector('.back-top');
	if(backTop){
		window.addEventListener('scroll', ()=>{
			if(window.scrollY > 700){
				backTop.classList.add('active');
			}else{
				backTop.classList.remove('active')
			}
		})
	}
});

/* ===== constructor steps ======= */
	const constructorStepTitles = document.querySelectorAll('[js-step-title]');
	const constructorStepContents = document.querySelectorAll('[js-step-content]');
function viewConsructorNextStep(){

	
	constructorStepTitles[0].classList.remove('active');
	constructorStepContents[0].classList.remove('active');
	constructorStepTitles[1].classList.add('active');
	constructorStepContents[1].classList.add('active');	
}
function viewConsructorPrevStep(){
	
	constructorStepTitles[0].classList.add('active');
	constructorStepContents[0].classList.add('active');
	constructorStepTitles[1].classList.remove('active');
	constructorStepContents[1].classList.remove('active');	
}