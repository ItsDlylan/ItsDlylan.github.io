const sendEmail = (e) => {
	e.preventDefault();
	console.log('hit');

	const text = document.createElement('h1');
	emailjs.sendForm('service_begjst4', 'template_iads0pq', e.target).then(
		function (response) {
			console.log('SUCCESS!', response.status, response.text);
			text.textContent = 'Email Sent! Thank you!';
			document.querySelector('.form__message').appendChild(text);
			text.classList.add('form__message-h1');
			setTimeout(() => {
				document.querySelector('.form__message-h1').remove();
			}, 1000);
		},
		function (err) {
			console.log('FAILED...', err);
			text.textContent = `Something went wrong, Please try again later: ${err} `;
			document.querySelector('.form__message').appendChild(text);
			text.classList.add('form__message-h1');
			setTimeout(() => {
				document.querySelector('.form__message-h1').remove();
			}, 1000);
		},
	);
};

const form = document.querySelector('.contact__form');
form.addEventListener('submit', sendEmail);
