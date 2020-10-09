
import { seedAndGetProducts, renderBook } from '../utils.js';
// import { getLocalStorageBooks, renderBook } from '../utils.js';



// const localStorageBooks = getLocalStorageBooks();

// const ul = document.querySelector('#list');

// for (let i = 0; i < localStorageBooks.length; i++) {
//     const book = localStorageBooks[i];

//     const li = renderBook(book);

//     ul.appendChild(li);    
// }


const ul = document.querySelector('#list');

const theList = seedAndGetProducts();

for (let i = 0; i < theList.length; i++) {
    const books = theList[i];
    const li = renderBook(books);
    ul.appendChild(li);
}