document.addEventListener("DOMContentLoaded", function () {

	/* ======  menu icon click ====== */
	const menuToggle = document.querySelector('#menu-toggle');
	const mobileMenu = document.querySelector('#header-menu');
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

});