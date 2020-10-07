
import { renderLineItems } from './render-line-items.js';
import { books } from '../books.js';
import { calcOrderTotal } from '../utils.js';

export const myCart = [
    {
        id: 'callOfFive',
        quantity: 4
    },
    {
        id: 'spiceAndNice',
        quantity: 3
    },
    {
        id: 'theJumpingBone',
        quantity: 1
    }
];

const table = document.querySelector('tbody');


for (let i = 0; i < myCart.length; i++) {
    const myBook = myCart[i];
    const tr = renderLineItems(myBook);
    console.log(tr);
    console.log(myCart);
    table.appendChild(tr);
    
}
const orderTotal = calcOrderTotal(myCart, books);

const theCartTotal = document.querySelector('#cartTotal');
if (theCartTotal){
    theCartTotal.textContent = orderTotal;
}

console.log(orderTotal);
theCartTotal.textContent = `$${orderTotal}`;
