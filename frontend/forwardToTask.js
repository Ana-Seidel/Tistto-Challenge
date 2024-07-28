// Função para o botão "Criar" funcionar
function handleFormSubmit(event) {
    event.preventDefault();
    window.location.href = 'file:///C:/Users/anaaf/Desktop/Portfólio/Tistto%20Challenge/frontend/toDoList.html';
}

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

// Função para ocultar o spinner e exibir o conteúdo após 3s
function hideSpinnerAndShowContent() {
    document.getElementById('spinner').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');
}

// Timer para mostrar o conteúdo
setTimeout(hideSpinnerAndShowContent, 3000);

//To do List
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }

    const taskInput = document.getElementById('taskInput');
    const addButton = document.getElementById('addButton');
    const taskList = document.getElementById('taskList');

    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;
            li.addEventListener('click', () => {
                li.classList.toggle('done');
            });
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
