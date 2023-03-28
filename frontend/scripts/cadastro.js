const togglePassword = document.querySelector('.password-toggle');
const password = document.querySelector('#password');
	  
	togglePassword.addEventListener('click', function(e) {
		const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
		password.setAttribute('type', type);
		this.querySelector('i').classList.toggle('fa-eye-slash');
	});