const body = document.querySelector('body');

// Загрузка цвета из localStorage
if (localStorage.getItem('bg-color') !== null) {
    body.style.background = localStorage.getItem('bg-color');
}

function switchRedTheme () {
    body.style.background = 'red';
    localStorage.setItem('bg-color', 'red');
}

function switchGreenTheme () {
    body.style.background = 'green';
    localStorage.setItem('bg-color', 'green');
}

function switchBlueTheme () {
    body.style.background = 'blue';
    localStorage.setItem('bg-color', 'blue');
}

function switchWhiteTheme () {
    body.style.background = 'white';
    localStorage.setItem('bg-color', 'white');
}
