export default class Name {
    constructor() {
        // DOM
        this.btns = document.querySelectorAll('button');
        this.ankerButtons = [];
        this.sections = document.querySelectorAll('section');


        this._checkAnkers();
        this._btnEvent();
    };

    _checkAnkers() {
        for (let i = 0; i < this.btns.length; i++) {
            if (this.btns[i].dataset.anker) {
                this.ankerButtons.push(this.btns[i]);
            };
        };
    };

    _btnEvent() {
        for (let i = 0; i < this.ankerButtons.length; i++) {
            let btn = this.ankerButtons[i];
            btn.addEventListener('click', e => {
                e.preventDefault()
                let anker = btn.dataset.anker,
                    element = document.getElementById(anker);
                    
                    this._scrollTo(element);

            });
        }
    };

   _scrollTo(destination, duration = 500) {
        const start = window.pageYOffset;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
     
        const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
        const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
        const headerHeight = document.querySelector('.header').offsetHeight;
        let destinationOffset = typeof destination === 'number' ? destination : (destination.offsetTop - headerHeight);

        if (destinationOffset < 0) {
            destinationOffset = 0;
        }

        const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
     
        if ('requestAnimationFrame' in window === false) {
            window.scroll(0, destinationOffsetToScroll);
            return;
        }
     
        function scroll() {
            const now = 'now' in window.performance ? performance.now() : new Date().getTime();
            const time = Math.min(1, ((now - startTime) / duration));
            const timeFunction = time;
            window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

            if (window.pageYOffset === destinationOffsetToScroll) {
                return;
            }
     
            requestAnimationFrame(scroll);
        }
     
        scroll();
    };
};

