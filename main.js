let darkMode = localStorage.getItem('darkMode');
const darkModeToggle  = document.getElementById('dark-mode-toggle');

// Check if dark mode is enabled
// If it is enabled, then turn it off
// If it is disabled, then turn it on


const enableDarkMode = () => {
    // 1. add the class darkmode to the body
    document.body.classList.add('darkmode');

    // 2. update dark mode in the local storage
    localStorage.setItem('darkMode', 'enabled');
}


const disableDarkMode = () => {
    // 1. remove the class darkmode to the body
    document.body.classList.remove('darkmode');

    // 2. update dark mode in the local storage
    localStorage.setItem('darkMode', 'disabled');
}

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
    } else  {
        disableDarkMode();
    }
});