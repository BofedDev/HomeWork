'use strict';
let list = document.querySelector('.list');
let input = document.querySelector('#input');
let btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
        if(input.value.trim() === '') return;
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.textContent = input.value;
        let clear = document.createElement('p');
        clear.textContent = '✖';
        clear.classList.add('delete');
        li.append(p, clear);
        list.append(li);
        input.value = '';
})
list.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }

})
