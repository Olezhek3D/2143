const body = document.querySelector('body');
const authorText = document.getElementById('art'); // Получаем элемент с текстом

// Загрузка цвета из localStorage
if (localStorage.getItem('bg-color') !== null) {
  body.style.background = localStorage.getItem('bg-color');
  updateTextColor(); // Обновляем цвет текста после загрузки
} 

function switchRedTheme() {
  body.style.background = 'red';
  localStorage.setItem('bg-color', 'red');
  updateTextColor(); 
}

function switchGreenTheme() {
  body.style.background = 'green';
  localStorage.setItem('bg-color', 'green');
  updateTextColor(); 
}

function switchBlueTheme() {
  body.style.background = 'blue';
  localStorage.setItem('bg-color', 'blue');
  updateTextColor(); 
}

function switchWhiteTheme() {
  body.style.background = 'white';
  localStorage.setItem('bg-color', 'white');
  updateTextColor(); 
}

function switchBlackTheme() {
  body.style.background = 'black';
  localStorage.setItem('bg-color', 'black');
  updateTextColor(); 
}

// Функция для обновления цвета текста
function updateTextColor() {
  if (body.style.background === 'black') {
    authorText.style.color = 'white';
  } else {
    authorText.style.color = 'black'; // Цвет текста по умолчанию
  }
}
