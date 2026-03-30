// Script para armazenar o perfil ativo no localStorage

document.addEventListener('DOMContentLoaded', () => {
    const profileLinks = document.querySelectorAll('.profile a');

    profileLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Obtém o nome e a imagem do perfil clicado
            const figcaption = link.querySelector('figcaption');
            const img = link.querySelector('img');

            if (figcaption && img) {
                const nome = figcaption.textContent;
                const imagem = img.src;

                // Armazena no localStorage
                localStorage.setItem('perfilAtivoNome', nome);
                localStorage.setItem('perfilAtivoImagem', imagem);
            }
        });
    });
});