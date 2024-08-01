// Adiciona um event listener ao formulário para lidar com a submissão
document.getElementById('registerForm').addEventListener('submit', async function(event) {
    // Previne o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // Coleta os valores dos campos do formulário
    const email = document.getElementById('email').value;
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const password = document.getElementById('password').value;

    
    try {
        // Faz uma requisição HTTP POST para o endpoint de registro no backend
        const response = await fetch('http://localhost:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                nome: nome,
                sobrenome: sobrenome,
                password: password
            })
        });

        // Verifica se a requisição foi bem-sucedida
        if (response.ok) {
            const data = await response.json();
            console.log('Registration successful:', data);
            // Tratar registro bem-sucedido (por exemplo, redirecionar para a página de login)
        } else {
            console.error('Registration failed:', response.statusText);
            // Tratar falha no registro (por exemplo, exibir mensagem de erro)
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
});