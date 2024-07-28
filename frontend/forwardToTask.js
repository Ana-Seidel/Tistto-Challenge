// Função para o botão "Criar" funcionar

function handleFormSubmit(event) {
    event.preventDefault();
    window.location.href = 'file:///C:/Users/anaaf/Desktop/Portfólio/Tistto%20Challenge/frontend/toDoList.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
});

// Função para ter o spinner para carregar a página
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('spinner').style.display = 'block';
        setTimeout(() => {
            window.location.href = this.href;
        }, 1000);
    });
});