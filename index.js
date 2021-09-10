// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');

hamMenuBtn.addEventListener('click', () => {
	if (smallMenu.classList.contains('header__sm-menu--active')) {
		smallMenu.classList.remove('header__sm-menu--active');
	} else {
		smallMenu.classList.add('header__sm-menu--active');
	}
});

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container');

headerLogoConatiner.addEventListener('click', () => {
	location.href = 'index.html';
});
const sendEmail = (e) => {
	e.preventDefault();
	console.log('hit');
	// 	emailjs
	// 		.sendForm(
	// 			'service_begjst4',
	// 			'aebf7c8be72205c3b67521842b2b2021',
	// 			e.target,
	// 			'user_SCXmKosxT5hSDF3lbDIFb',
	// 		)
	// 		.then(
	// 			(result) => {
	// 				console.log(result.text);
	// 			},
	// 			(error) => {
	// 				console.log(error.text);
	// 			},
	// 		);
	// };
	emailjs
		.sendForm(
			'service_begjst4',
			'service_begjst4',
			e.target,
			'user_SCXmKosxT5hSDF3lbDIFb',
		)
		.then(
			function (response) {
				console.log('SUCCESS!', response.status, response.text);
			},
			function (err) {
				console.log('FAILED...', err);
			},
		);
};

const form = document.querySelector('.contact__form');
form.addEventListener('submit', sendEmail);
