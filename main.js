    function switchLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
        if (el.getAttribute('data-lang') === lang) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
}

    // Optional: Standard auf Deutsch setzen
    window.addEventListener('DOMContentLoaded', () => {
    switchLanguage('de');
});
