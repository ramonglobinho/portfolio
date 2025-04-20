// Atualiza o ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Data de modificação
let modificado = new Date(document.lastModified);
let dia = modificado.getDate().toString().padStart(2, '0');
let mes = (modificado.getMonth() + 1).toString().padStart(2, '0');
let ano = modificado.getFullYear();
let horas = modificado.getHours().toString().padStart(2, '0');
let minutos = modificado.getMinutes().toString().padStart(2, '0');

let dataFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}`;
document.getElementById('data').textContent = dataFormatada;

// Menu Hamburger
document.addEventListener("DOMContentLoaded", () => {
    const hamButton = document.getElementById('menu-top');
    const navigation = document.querySelector('.menu-topo');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('active');
        hamButton.classList.toggle('active');
    });

    // Fecha o menu quando um link é clicado
    const navLinks = document.querySelectorAll('.menu-topo a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navigation.classList.remove('active');
            hamButton.classList.remove('active');
        });
    });

    // Scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animações ao rolar (scroll reveal)
    const elementosAnimados = document.querySelectorAll('.scroll-anim');

    const observador = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elementosAnimados.forEach(el => observador.observe(el));
});
