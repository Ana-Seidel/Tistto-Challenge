// Função para o botão "Criar" funcionar
function handleFormSubmit(event) {
    event.preventDefault();
    window.location.href = 'file:///C:/Users/anaaf/Desktop/Portfólio/Tistto%20Challenge/frontend/toDoList.html';
}

// Associa o evento de submit ao formulário
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
});
