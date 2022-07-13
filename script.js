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
    alert('Email ou senha inválidos');
  }
}

btnEntra.addEventListener('click', validaEmailESenha);
