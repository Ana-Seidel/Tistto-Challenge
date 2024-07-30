// Função para o botão "Criar" funcionar
function handleFormSubmit(event) {
    event.preventDefault();
    window.location.href = 'https://todolistseidel.netlify.app/';
}

// Associa o evento de submit ao formulário
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
});
