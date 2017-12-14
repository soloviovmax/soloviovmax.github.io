// Родитель пузырей
var field = document.querySelector('.field');

// Обьявление события
field.addEventListener('click', function(e) {

  // Переменные
  var posX = e.offsetX + 'px',
      posY = e.offsetY + 'px',
      size = (Math.round(Math.random() * 70) + 80) + 'px',
      bubble = document.createElement('div');

  function randomColorGen() {
    return Math.round(Math.random() * 255);
  }

  // Стилизация пузыря
  bubble.classList.add('bubble');
  bubble.style.left = posX;
  bubble.style.top = posY;
  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.backgroundColor = 'rgb(' + randomColorGen() + ',' + randomColorGen() + ',' + randomColorGen() + ')';

  // Добавление пузыря в тело
  this.appendChild(bubble);
  
  // Удаление пузыря после заданного времени
  setTimeout(function () {
      var delEl = field.firstElementChild;
      field.removeChild(delEl);
  }, 1500)
});