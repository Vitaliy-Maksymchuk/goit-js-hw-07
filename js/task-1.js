'use strict';

const categories = document.querySelector('#categories');
const categoriesItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const itemCounter = item.querySelectorAll('ul li').length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${itemCounter}`);
    
});


