
import { renderLineItems } from './render-line-items.js';
import { CART } from '../utils.js';
import { calcOrderTotal } from '../utils.js';
import { getLocalCart } from '../utils.js';


const table = document.querySelector('tbody');
const myCart = getLocalCart('CART') || [];

for (let i = 0; i < myCart.length; i++) {
    const myBook = myCart[i];
    const tr = renderLineItems(myBook);
    // console.log(tr);
    // console.log(myCart);
    table.appendChild(tr);
    
}
const orderTotal = calcOrderTotal(myCart, CART);

const theCartTotal = document.querySelector('#cartTotal');
if (theCartTotal){
    theCartTotal.textContent = orderTotal;
}

// console.log(orderTotal);
theCartTotal.textContent = `$${orderTotal}`;


const orderButton = document.querySelector('button');

orderButton.addEventListener('click', () => {

    const stringyCart = JSON.stringify(myCart, true, 2);

    if (myCart.length) {
        alert('You have ordered => :' + stringyCart);
        localStorage.removeItem('CART');
        window.location.href = './';
        // console.log('Cart should be empty');
        
    } else {
        orderButton.disabled = true;
        alert('Why are you trying to buy an empty cart? You weirdo.');
        // console.log('user did not purchase any fake books');
    }
});
