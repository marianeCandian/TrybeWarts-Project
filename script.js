const btnLogin = document.querySelector('#btn-login');
const email = document.querySelector('#email');
const senha = document.querySelector('#password');

function login() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', login);

const bntEnviar = document.querySelector('#submit-btn');
const checkBox = document.querySelector('#agreement');

function habilitar() {
  bntEnviar.disabled = !checkBox.checked;
}

checkBox.addEventListener('change', habilitar);
