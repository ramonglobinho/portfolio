let modificado = new Date(document.lastModified);

// Formata a data para o padrão brasileiro (dd/mm/aaaa)
let dia = modificado.getDate().toString().padStart(2, '0');
let mes = (modificado.getMonth() + 1).toString().padStart(2, '0'); // Mês começa em 0
let ano = modificado.getFullYear();
let horas = modificado.getHours().toString().padStart(2, '0');
let minutos = modificado.getMinutes().toString().padStart(2, '0');

// Formata a data e hora
let dataFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}`;

document.getElementById('data').textContent = dataFormatada


const hamButton = document.querySelector('#menu-top');
const navigation = document.querySelector('.menu-topo');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});