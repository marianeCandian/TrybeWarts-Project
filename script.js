const btnLogin = document.querySelector('#btn-login');
const emailLogin = document.querySelector('#email');
const senha = document.querySelector('#password');

function login() {
  if (emailLogin.value === 'tryber@teste.com' && senha.value === '123456') {
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

function limitTextArea(valor) {
  const quant = 500;
  const total = valor.length;
  if (total <= quant) {
    const resto = quant - total;
    document.getElementById('counter').innerHTML = resto;
  }
}

const nome = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const email = document.querySelector('#input-email');
const casa = document.querySelector('#house');
const familia = document.querySelector('#label-family');
const conteudo = document.querySelector('#label-content');
const avaliacao = document.querySelector('#label-rate');
const observacoes = document.querySelector('#textarea');
const forms = document.querySelector('#form-data');

function getCasa() {
  return casa.options[casa.selectedIndex].value;
}

function getFamilia () {
  for (let i = 0; i < familia.length; i += 1) {
    if (familia[i].checked) {
      return familia[i].value;
    }
  }
}

function getConteudo () {
  for (let i = 0; i < conteudo.length; i += 1) {
    if (conteudo[i].checked) {
      return conteudo[i].value;
    }
  }
}

function getAvaliacao() {
  return avaliacao.options[avaliacao.selectedIndex].value;
}

const pNomeSobrenome = document.createElement('p');
const pEmail = document.createElement('p');
const pCasa = document.createElement('p');
const pFamilia = document.createElement('p');
const pConteudo = document.createElement('p');
const pAvaliacao = document.createElement('p');
const pObservacoes = document.createElement('p');

function addItemForms (e) {
  e.preventDefault();
  pNomeSobrenome.innerText = 'Nome: ' + nome.value + sobrenome.value;
  pEmail.innerText = 'Email: ' + email.value;
  pCasa.innerText = 'Casa :' + getCasa();
  pFamilia.innerText = 'Familia: ' + getFamilia();
  pConteudo.innerText = 'Matérias: ' + getConteudo();
  pAvaliacao.innerText = 'Avaliação: ' + getAvaliacao();
  pObservacoes.innerText = 'Observações: ' + observacoes.value;
  forms.appendChild(pNomeSobrenome);
  forms.appendChild(pEmail);
  forms.appendChild(pCasa);
  forms.appendChild(pFamilia);
  forms.appendChild(pConteudo);
  forms.appendChild(pAvaliacao);
  forms.appendChild(pObservacoes);
  console.log('Oi');
}

bntEnviar.addEventListener('click', addItemForms);
