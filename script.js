const btnEntra = document.getElementById('entrar');

let objDados = {
  email: 'tryber@teste.com',
  senha: '123456',
};
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('password');

function validaEmailESenha() {
  if (inputEmail.value === objDados.email && inputSenha.value === objDados.senha) {
    alert('Olá, Tryber!');
  }
}

btnEntra.addEventListener('click', validaEmailESenha);
