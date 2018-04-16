export default class AnimateNumber {
    constructor() {
        // DOM
        this.numbersWrap = document.querySelectorAll('.stats__number');
        this.stats = document.querySelector('.stats');

        this.complete = false;
        
        this._windowEvent();
    };
    _counter(numberWrap) {
        if (this.complete === false) {
            for (let i = 0; i < numberWrap.length; i++) {
                let finiteNumber = parseInt(numberWrap[i].textContent),
                    startNumber = Math.round((finiteNumber / 3) * 2),
                    numbersDifference = finiteNumber - startNumber,
                    time = 2000 / numbersDifference;
    
                for (let n = 0; n <= numbersDifference; n++) {
                    setTimeout(() => {
                    
                        if (numberWrap[i].dataset.suffix) { 
                            numberWrap[i].textContent = n + startNumber + ' ' + numberWrap[i].dataset.suffix;
                        } else {
                            numberWrap[i].textContent = n + startNumber;
                        }
                    }, time * n);
                };
            };
            this.complete = true;
        }
    };

    _windowEvent() {
        window.addEventListener('scroll', () => {
            if (this.stats.getBoundingClientRect().top <= window.innerHeight) {
                this._counter(this.numbersWrap);
            };
        });
    };
};