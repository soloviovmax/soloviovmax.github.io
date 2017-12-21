document.addEventListener('DOMContentLoaded', function() {
    var accordion = document.querySelector('.accoedion__list'),
        accordionItem = document.querySelectorAll('.accordion__item');

    for (var i = 0; i < accordionItem.length; i++) {

        if (accordionItem[i].children.length > 1) {
            accordionItem[i].classList.add('accordion__item--dropdown');
        }
    }
    
    accordion.addEventListener('click', function(ev) {
        
        if (ev.target.parentElement.classList.contains('accordion__item--dropdown')) {
            var el = document.querySelector('.accordion__item-dropdown--active');
        
            if (el !== null && el !== ev.target.nextElementSibling) {
                el.classList.remove('accordion__item-dropdown--active');
            }

            var dropdown = ev.target.nextElementSibling;
            dropdown.classList.toggle('accordion__item-dropdown--active');
        }
        
    });
});