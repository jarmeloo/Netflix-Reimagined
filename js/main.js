// Função para armazenar o perfil ativo no localStorage
function armazenarPerfilAtivo(nome, imagem) {
    localStorage.setItem('perfilAtivoNome', nome);
    localStorage.setItem('perfilAtivoImagem', imagem);
}

// Adicionar event listeners aos perfis
document.addEventListener('DOMContentLoaded', () => {
    const perfis = document.querySelectorAll('.profile');

    perfis.forEach(perfil => {
        perfil.addEventListener('click', (event) => {
            event.preventDefault(); // Impedir a navegação imediata

            const figcaption = perfil.querySelector('figcaption');
            const img = perfil.querySelector('img');

            if (figcaption && img) {
                const nome = figcaption.textContent;
                const imagem = img.src;

                armazenarPerfilAtivo(nome, imagem);

                // Navegar para a página do catálogo
                window.location.href = perfil.href;
            }
        });
    });
});