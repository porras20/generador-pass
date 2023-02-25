const btn = document.querySelector('.btn');
const cantidad = document.querySelector('#length');
const alert = document.querySelector('#alert');
let base = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numeros = '1234567890';
const simbolos = '/*-=¿?()&%$#!|"¡{}[]';

btn.addEventListener('click', () => {
  generate();
})


const generate = () => {
  if (cantidad.value < 36 ) {
    if (check1.checked) {
      base += numeros;
    }
    if (check2.checked) {
      base +=simbolos;
    }
    generatePassword();
  }else{
    alert.classList.remove('alert', 'alert-success');
    alert.classList.add('alert','alert-danger');
    alert.textContent = 'Escoja una contraseña menor a 36 caracteres';
  }
}

const generatePassword = () => {
  let password = '';
  for (let i = 0; i < cantidad.value; i++) {
    let random = Math.floor(Math.random() * base.length);
    password += base.charAt(random);
  }
  alert.classList.remove('alert', 'alert-danger');
  alert.classList.add('alert', 'alert-success');
  alert.textContent = password;
}