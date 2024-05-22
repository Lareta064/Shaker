document.addEventListener("DOMContentLoaded", function () {
	const bodyEl = document.body;
	setTimeout(()=>{
		 bodyEl.setAttribute('style', 'opacity:1')
	},200)
	$('.lazy').Lazy();
	/* ======  menu icon click ====== */
	const menuToggle = document.querySelector('#menu-toggle');
	const mobileMenu = document.querySelector('#mobile-menu');
	

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
		autoplay:{
			delay: 3000
		},
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
	const videoPosters = document.querySelectorAll('[data-video-btn]');
	const videoModals = document.querySelectorAll('[data-modal]');

	if (videoPosters.length>0) {

		
		for(let item of videoPosters){

			item.addEventListener('click', function () {
				const itemDataVal = item.getAttribute('data-video-btn');
				for(let videoModal of videoModals){
					const videoModalData = videoModal.getAttribute('data-modal');
					console.log(itemDataVal);
					console.log(videoModalData);

					if(videoModalData == itemDataVal){
						console.log('123');
						videoModal.classList.add('active');
					}
				}
			});
			
		}

		for(let videoModal of videoModals){
			const modalClose = videoModal.querySelector('.btn-close');
			videoModal.addEventListener('click', (e)=>{
				if(e.target == modalClose || e.target == e.currentTarget){
					videoModal.classList.remove('active');
				}
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

	/*====== page Contacts ========*/

	$(".accordion-wrap").on("click", function(){   
		$(this).children().eq(1).slideToggle(300);  
		
		
		$(this).find(".accordion-item").addClass("active");
		$(this).siblings().find(".accordion-item").removeClass("active");

		$(".accordion-wrap .accordion-text").not($(this).children().eq(1)).slideUp(300);
	});
	
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
	const constructorStepTitles = document.querySelectorAll('[data-step-title]');
	const constructorStepContents = document.querySelectorAll('[data-step-content]');
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