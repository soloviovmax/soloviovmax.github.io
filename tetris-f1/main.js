document.addEventListener('DOMContentLoaded', function() {
    
    var userCar = document.getElementById('user-car'),
        gameArea = document.querySelector('.game-area'),
        rivalCarsArea = document.querySelector('.game-area__rival-cars'),
        scoreField = document.querySelector('.score__numbers'),
        startBtn = document.querySelector('.game-area__dialog-start-button'),
        startDialog = document.querySelector('.game-area__dialog');

    var userCarPosition = 240,
        gameIteration = 0,
        gameSpeed = 300;

        // Управление для User Car
        var controls = window.addEventListener('keydown', function(ev) {
            var userCarStyles = getComputedStyle(userCar);
                userCarPosition = parseInt(userCarStyles.left);

            if (ev.key === 'ArrowRight') {
                if (userCarPosition !== 420) {
                    userCarPosition += 20;
                    userCar.style.left = (userCarPosition + 'px');
                    console.log(userCarPosition);
                }
            } else if (ev.key === 'ArrowLeft') {
                if (userCarPosition !== 0) {
                    userCarPosition -= 20;
                    userCar.style.left = (userCarPosition + 'px');
                    console.log(userCarPosition);
                }
            }
        });
        
        // Старт
        startBtn.addEventListener('click', function () {

            var score = 0;
            scoreField.textContent = '0';

            startDialog.classList.remove('game-area__dialog--active');

            var game = setInterval(function () {

                if (gameIteration % 20 === 0) {
                    createRival();
                } else if (gameIteration % 5 === 0 || gameIteration === 0) {
                    createRival();
                }
        
                moveRival();
        
                gameIteration++;
            }, 100);


            // Создание Rival Cars
            function createRival() {
                var newRival = document.createElement('div'),
                    rivalPosX = posGenerate();

                newRival.classList.add('game-area__rival-car');
                newRival.style.left = (rivalPosX + 'px');
                rivalCarsArea.appendChild(newRival);
            }

            // Создание 2-x Rival Cars на 1 поле
            function createTwoRival() {
                var rivalFirstPosX = posGenerate(2),
                    rivalSecondPosX = posGenerate(2);

                for (var i = 0; i < 2; i++) {
                    var newRival = document.createElement('div');

                    newRival.classList.add('game-area__rival-car');

                    if (i === 0) {
                        var rivarPosX = rivalFirstPosX;
                    } else {
                        var rivarPosX = rivalSecondPosX + 240;
                    }
                    newRival.style.left = (rivarPosX + 'px');
                    rivalCarsArea.appendChild(newRival);
                }
            }

            // Генерация позиции Rival Cars
            function posGenerate(numbersOfCurs) {
                if (numbersOfCurs === 2) {
                    return Math.round(Math.random() * 9) * 20;
                }
                return Math.round(Math.random() * 21) * 20;
            }

            // Игровой процесс (Движение и удаление Rival Cars, проверка аварий, запись счета)
            function moveRival() {
                var rivalCars = document.querySelectorAll('.game-area__rival-car');
                for (var i = 0; i < rivalCars.length; i++) {
                    var rivalCarStyles = getComputedStyle(rivalCars[i]),
                        rivarCarPositionY = parseInt(rivalCarStyles.bottom),
                        rivarCarPositionX = parseInt(rivalCarStyles.left);
                    
                    if (rivarCarPositionY === 80 && userCarPosition === rivarCarPositionX 
                        || rivarCarPositionY === 80 && userCarPosition === rivarCarPositionX - 20 
                        || rivarCarPositionY === 80 && userCarPosition === rivarCarPositionX + 20) {
                        clear();
                    } else if (rivarCarPositionY === 60 && userCarPosition === rivarCarPositionX + 40) {
                        clear();
                    } else if (rivarCarPositionY === 60 && userCarPosition === rivarCarPositionX - 40) {
                        clear();
                    } else if (rivarCarPositionY === -80) {
                        rivalCarsArea.removeChild(rivalCarsArea.firstElementChild);
                        score++;
                        scoreField.textContent = score * 100;
                    }
                    rivalCars[i].style.bottom = (rivarCarPositionY - 20 + 'px');
                }
            }
            
            // Очистка после столкновения
            function clear() {
                    var carsNumber = rivalCarsArea.children.length;
                for (var i = 0; i < carsNumber; i++) {
                    rivalCarsArea.removeChild(rivalCarsArea.firstElementChild);
                }
                startDialog.classList.add('game-area__dialog--active');
                clearInterval(game);
            }
        });
});