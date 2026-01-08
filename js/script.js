'use strict';

let container = document.querySelector('.container');


container.addEventListener('click', (e) => {
    if (e.target.dataset.readMoreBtn === undefined) return;

    let card = e.target.closest('.card');

    let hiddenText = card.querySelector('.hidden');

    if (hiddenText.classList.contains('visible')) {
        hiddenText.classList.remove('visible');
        e.target.textContent = 'Read more';
    } else {
        hiddenText.classList.add('visible');
        e.target.textContent = 'Hide';
    }
})
