// Função para mostrar o nome do local ao passar o mouse
function mostrarLocal(event, local) {
    const nomeLocal = document.getElementById('nome-local');
    nomeLocal.textContent = `Local: ${local}`;
}

// Função para esconder o nome ao tirar o mouse
function esconderLocal() {
    const nomeLocal = document.getElementById('nome-local');
    nomeLocal.textContent = '';
}
