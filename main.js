function switchLanguage(lang) {

    // Show content in the selected language
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display =
            el.dataset.lang === lang ? 'block' : 'none';
    });

    // Update the active language button
    document.querySelectorAll('#language_switch button')
        .forEach(button => {
            button.setAttribute(
                'aria-pressed',
                String(button.dataset.language === lang)
            );
        });

    // Update the document language
    document.documentElement.lang = lang;
}

// Default language
window.addEventListener('DOMContentLoaded', () => {
    switchLanguage('de');
});