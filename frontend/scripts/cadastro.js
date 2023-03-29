const togglePassword = document.querySelector('.password-toggle');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function(e) {
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  this.querySelector('i').classList.toggle('fa-eye-slash');
});

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  axios.post('http://localhost:3000/api/clientes', {
    "username": "caahp",
    "password": "1234",
    "nome": "carol",
    "idade": 19,
    "peso": 65,
    "altura": 163,
    "exercicios": [],
    "refeicoes": [],
  })
  .then(function (response) {
    console.log(response);
    alert('Cliente cadastrado!');
    window.location.replace('individual.html'); 
    form.reset();
  })
  .catch(function (error) {
    console.log(error);
  });
});


