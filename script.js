const btnEntra = document.getElementById('entrar');

const objDados = {
  email: 'tryber@teste.com',
  senha: '123456',
};
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('password');

function validaEmailESenha() {
  if (inputEmail.value === objDados.email && inputSenha.value === objDados.senha) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnEntra.addEventListener('click', validaEmailESenha);

const inputAgreement = document.getElementById('agreement');

const btnSubmit = document.getElementById('submit-btn');

inputAgreement.addEventListener('click', () => {
  if (inputAgreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});
