const togglePassword = document.querySelector('.password-toggle');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function(e) {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  this.querySelector('i').classList.toggle('fa-eye-slash');
});

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // previne o comportamento padrão do formulário
  alert('Cliente cadastrado!'); // exibe o pop-up
  window.location.replace('individual.html'); // redireciona para a nova página
  form.reset(); // limpa o formulário
});

