import { createCard } from './Card.js';

export function createCarousel(category) {
    const section = document.createElement('div');
    section.className = 'slider-section';

    // Header for Title and Indicators
    const header = document.createElement('div');
    header.className = 'slider-header';

    const title = document.createElement('h2');
    title.className = 'slider-title';
    title.innerText = category.title;

    const indicators = document.createElement('div');
    indicators.className = 'slider-indicators';

    header.appendChild(title);
    header.appendChild(indicators);
    section.appendChild(header);

    const row = document.createElement('div');
    row.className = 'movie-row';

    category.items.forEach(item => {
        const card = createCard(item);
        row.appendChild(card);
    });

    section.appendChild(row);

    // ✅ SÓ AS SETINHAS ADICIONADAS
    const container = document.createElement('div');
    container.className = 'carousel-arrows-container';
    container.appendChild(row);

    // Seta esquerda
    const prevBtn = document.createElement('button');
    prevBtn.className = 'carousel-arrow prev';
    prevBtn.innerHTML = '‹';
    prevBtn.type = 'button';
    container.appendChild(prevBtn);

    // Seta direita
    const nextBtn = document.createElement('button');
    nextBtn.className = 'carousel-arrow next';
    nextBtn.innerHTML = '›';
    nextBtn.type = 'button';
    container.appendChild(nextBtn);

    section.appendChild(container);

    // Funcionalidade das setas
    initArrows(container, row);
    
    return section;
}

function initArrows(container, row) {
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    const cardWidth = 258;

    prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        row.scrollLeft -= cardWidth * 3;
    });

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        row.scrollLeft += cardWidth * 3;
    });

    // Hover mostra setas
    container.addEventListener('mouseenter', () => container.classList.add('hover'));
    container.addEventListener('mouseleave', () => container.classList.remove('hover'));
}