import { books as sourceOfTruth } from '../books.js';
import { findById } from '../utils.js';



// RENDER TABLE ROW
export function renderLineItems(cartItem) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdTotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;

    const bookData = findById(
        sourceOfTruth, 
        cartItem.id
    );
    const price = bookData.price;
    const title = bookData.title;

    tdPrice.textContent = `$${price}`;
    tdName.textContent = title;

    const total = price * cartItem.quantity;

    tdTotal.textContent = `$${total}`;

    tr.append(tdName, tdPrice, tdQuantity, tdTotal);

    return tr;
}