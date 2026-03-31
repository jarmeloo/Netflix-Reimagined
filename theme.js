const sunIcon = `
<circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" fill="none"/>
<line x1="12" y1="1" x2="12" y2="4" stroke="currentColor" stroke-width="2"/>
<line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" stroke-width="2"/>
<line x1="4.22" y1="4.22" x2="6.34" y2="6.34" stroke="currentColor" stroke-width="2"/>
<line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="currentColor" stroke-width="2"/>
<line x1="1" y1="12" x2="4" y2="12" stroke="currentColor" stroke-width="2"/>
<line x1="20" y1="12" x2="23" y2="12" stroke="currentColor" stroke-width="2"/>
<line x1="4.22" y1="19.78" x2="6.34" y2="17.66" stroke="currentColor" stroke-width="2"/>
<line x1="17.66" y1="6.34" x2="19.78" y2="4.22" stroke="currentColor" stroke-width="2"/>
`;

const moonIcon = `
<path d="M21 12.79A9 9 0 0 1 11.21 3 
         7 7 0 1 0 21 12.79z" fill="currentColor"/>
`;

function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('icon');

    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        icon.innerHTML = moonIcon;
    } else {
        localStorage.setItem('theme', 'dark');
        icon.innerHTML = sunIcon;
    }
}

window.onload = function () {
    const savedTheme = localStorage.getItem('theme');
    const icon = document.getElementById('icon');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        icon.innerHTML = moonIcon;
    } else {
        icon.innerHTML = sunIcon;
    }
};