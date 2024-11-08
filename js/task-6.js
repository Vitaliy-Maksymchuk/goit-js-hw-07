'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxContainer = document.querySelector('#boxes');

function createBox(quantity) {

  boxContainer.innerHTML = '';

  const elements = [];

  for(let i = 0; i < quantity; i++) {
    const item = document.createElement('div');
    item.style.width = `${30 + i * 10}px`;
    item.style.height = `${30 + i * 10}px`;
    item.style.backgroundColor = getRandomHexColor();
    elements.push(item);
  };

boxContainer.append(...elements);
};

createBtn.addEventListener('click', () => {
  const quantity = Number(input.value.trim());

  if(quantity < 1 || quantity > 100 || typeof quantity !== 'number') {
    return alert('Please enter a number between 1 and 100');
  }

  createBox(quantity);

  input.value = '';
});

function destroyBox() {
  boxContainer.innerHTML = '';
};

destroyBtn.addEventListener('click', destroyBox);
