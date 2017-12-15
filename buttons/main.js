window.addEventListener('DOMContentLoaded', function () {

      // Кнопки
  var buttonTop = document.getElementById('buttonTop'),
      buttonRight = document.getElementById('buttonRight'),
      buttonBottom = document.getElementById('buttonBottom'),
      buttonLeft = document.getElementById('buttonLeft'),

      // Блоки
      blockTop = document.querySelector('.blocks__item--top'),
      blockRight = document.querySelector('.blocks__item--right'),
      blockBottom = document.querySelector('.blocks__item--bottom'),
      blockLeft = document.querySelector('.blocks__item--left'),

      // Активный Класс
      activeClass = 'blocks__item--active';

  // Функция
  function menu(control, menu, activeClass) {
    var isOpen = false;
    control.addEventListener('click', function (e) {
      isOpen = !isOpen;
      e.target.firstElementChild.innerText = (isOpen) ? 'Close' : 'Open';
      menu.classList.toggle(activeClass);

      // Изменение цвета body
      if (blockTop.classList.contains(activeClass)
          || blockRight.classList.contains(activeClass)
          || blockBottom.classList.contains(activeClass)
          || blockLeft.classList.contains(activeClass)) {
        document.body.style.backgroundColor = '#c0c0c0';
      } else {
        document.body.style.backgroundColor = '';
      }
    });
  }

  // Вызов функции
  menu(buttonTop, blockTop, activeClass);
  menu(buttonRight, blockRight, activeClass);
  menu(buttonBottom, blockBottom, activeClass);
  menu(buttonLeft, blockLeft, activeClass);
})

