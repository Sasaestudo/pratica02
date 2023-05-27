const contatos = [
  { nome: 'Guilherme', fone: '61994450450' }
];

const root = document.getElementById('root');

function titulo(nome) {
  const h2 = document.createElement('h2');
  return h2;
};

function InputText() {
  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'nome';
  input.placeholder = 'Nome do Contato';
  return input;
};

function InputTel() {
  const input = document.createElement('input');
  input.type = 'tel';
  input.name = 'fone';
  input.placeholder = 'Fone do Contato'
  return input;
}

function InputSubmit() {
  const input = document.createElement('input');
  input.type = 'submit';
  input.name = 'enviar';
  return input;
}

function FormContato() {
  const form = document.createElement('form');

  const nome = InputText();
  form.appendChild(nome);

  const fone = InputTel();
  form.appendChild(fone);

  const enviar = InputSubmit();
  form.appendChild(enviar);

  form.addEventListener('submit', handleSubmit);

  return form;
}

function handleSubmit(evento) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  
}