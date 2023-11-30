document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleModeBtn = document.getElementById('toggleModeBtn');

    // Adiciona ou remove a classe 'dark-mode' ao corpo do documento
    function toggleDarkMode() {
        body.classList.toggle('light-mode');
    }

    // Adiciona um ouvinte de eventos ao botão para alternar o modo claro/escuro
    toggleModeBtn.addEventListener('click', toggleDarkMode);
});
