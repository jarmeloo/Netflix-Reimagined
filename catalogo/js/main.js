import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');
        
        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const container = document.getElementById('main-content');
    
    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    // Se o usuário descer mais de 50px...
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.classList.remove('top');
    } else {
        // Se voltar para o topo...
        navbar.classList.add('top');
        navbar.classList.remove('scrolled');
    }
});