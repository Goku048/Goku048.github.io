// theme.js - Simple theme initialization
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
});

// Initialize theme based on saved preference or OS preference
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply the theme
    if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
}