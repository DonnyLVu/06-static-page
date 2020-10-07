
import { renderLineItems } from './render-line-items.js';


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
    table.appendChild(tr);
}