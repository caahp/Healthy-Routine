const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  axios.post('http://localhost:3000/api/exercicios', {
    "tipo": "Musculação",
    "hora": "22:00",
    "duracao": 100,
    "calorias": 300
  })
  
  .then(function (response) {
    console.log(response);
    alert('Exercício cadastrado!');
    window.location.replace('individual.html'); 
    form.reset();
  })
  .catch(function (error) {
    console.log(error);
  });
});