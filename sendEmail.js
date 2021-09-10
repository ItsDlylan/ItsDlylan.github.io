const sendEmail = (e) => {
	e.preventDefault();
	console.log('hit');

	const text = document.createElement('h1');
	const modalSection = document.querySelector('.form__message');
	const formInputName = document.querySelector('#name');
	const formInputEmail = document.querySelector('#email');
	const formInputSubject = document.querySelector('#subject');
	const formInputMessage = document.querySelector('#message');

	emailjs.sendForm('service_begjst4', 'template_iads0pq', e.target).then(
		function (response) {
			console.log('SUCCESS!', response.status, response.text);
			modalSection.style.marginTop = '5rem';
			text.textContent = 'Email Sent! Thank you!';
			document.querySelector('.form__message').appendChild(text);
			text.classList.add('form__message-h1');
			setTimeout(() => {
				document.querySelector('.form__message-h1').remove();

				// reset form values to empty strings
				formInputName.value = '';
				formInputEmail.value = '';
				formInputMessage.value = '';
				formInputSubject.value = '';
			}, 1000);
		},
		function (err) {
			console.log('FAILED...', err);
			text.textContent = `Something went wrong, Please try again later: ${err} `;
			modalSection.style.marginTop = '5rem';
			modalSection.appendChild(text);
			text.classList.add('form__message-h1');
			setTimeout(() => {
				document.querySelector('.form__message-h1').remove();

				// reset form values to empty strings
				formInputName.value = '';
				formInputEmail.value = '';
				formInputMessage.value = '';
				formInputSubject.value = '';
			}, 1000);
		},
	);
};

const form = document.querySelector('.contact__form');
form.addEventListener('submit', sendEmail);
