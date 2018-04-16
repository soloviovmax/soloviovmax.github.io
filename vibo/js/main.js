window.addEventListener('DOMContentLoaded', init);

function init() {
   ankers();
   hamburger();
};

function ankers() {
   const buttons = document.querySelectorAll('.nav__btn');

   buttons.forEach(btn => {
      btn.addEventListener('click', function(e) {
         let anker = this.dataset.anker;
         let element = document.getElementById(anker);
         scrollTo(element);    
      });
   });
};

function scrollTo(destination, duration = 500) {
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

function hamburger() {
   const btn = document.querySelector('.header__hamburger');
   const menu = document.querySelector('.nav');

   btn.addEventListener('click', function(e) {
      menu.classList.toggle('nav--active');
   });
}