document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    const icon = this.querySelector('.btn-darkmode-icon');
    const text = this.querySelector('.btn-darkmode-text');
    
    if (document.body.classList.contains('dark-mode')) {
        icon.textContent = '☀️';
        text.textContent = 'Modo Claro';
    } else {
        icon.textContent = '🌙';
        text.textContent = 'Modo Escuro';
    }
});