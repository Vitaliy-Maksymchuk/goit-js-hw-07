'use strict';

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', () => {
    const formatedInput = inputName.value.trim();
    outputName.textContent = formatedInput || 'Anonymous';
});