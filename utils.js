
export const CART = 'CART';

// RENDER BOOK
export function renderBook(book) {
    
    const li = document.createElement('li');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const cover = document.createElement('img');
    const price = document.createElement('p');
    const category = document.createElement('p');
    const description = document.createElement('p');
    const addButton = document.createElement('button');
    const removeButton = document.createElement('button');

    li.classList.add('book');

    title.classList.add('title');
    title.textContent = book.title;
    li.appendChild(title);

    author.classList.add('author');
    author.textContent = book.author;
    li.appendChild(author);

    cover.classList.add('cover');
    cover.src = `../assets/${book.cover}`;
    li.appendChild(cover);

    price.classList.add('price');
    price.textContent = `$${book.price.toFixed(2)}`;
    li.appendChild(price);

    description.classList.add('description');
    description.textContent = `${book.description}`;
    li.appendChild(description);

    category.classList.add('category');
    category.textContent = `${book.category}`;
    li.appendChild(category);

    

    
    
    addButton.addEventListener('click', () => {
        const cart = getLocalCart(CART) || [];
        const itemInCart = findById(cart, book.id);
        console.log('added', book.id);

        if (itemInCart === undefined){
            const newCartItem = {
                id: book.id,
                quantity: 1,
            };
            cart.push(newCartItem);
        } else {
            itemInCart.quantity++;
        }

        setLocalCart(CART, cart);
    });


    removeButton.addEventListener('click', () =>{
        const cart = getLocalCart(CART) || [];
        const itemInCart = findById(cart, book.id);
        console.log('removed', book.id);
        if (itemInCart){
            if (itemInCart.quantity !== 0){
                itemInCart.quantity--;
            }
        }
        setLocalCart(CART, cart);
    });
    
    li.appendChild(addButton);
    addButton.textContent = 'Add to cart';
    li.appendChild(removeButton);
    removeButton.textContent = 'Remove from cart';
    return li;
}

export function getLocalCart(key) {
    if (key) {
        return JSON.parse(localStorage.getItem(key));
    } else {
        return [];
        // this isn't a correct fix for the "fall-back"
    }
}


function setLocalCart(key, value) {
    const stringyKey = JSON.stringify(value);
    localStorage.setItem(key, stringyKey);

    return stringyKey;
}

// FIND BY ID
export function findById(theArray, theId) {
    for (let i = 0; i < theArray.length; i++) {
        const item = theArray[i];
        if (item.id === theId) {
            return item;
        }
    }
}


// Calclineitem
export function calcLineItem(quantity, price) {
    const subTotal = quantity * price;

    return subTotal.toFixed(2);
}

export function calcOrderTotal(cartArray, bookArray) {

    let accumulator = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const theBook = cartArray[i];
        const actBook = findById(bookArray, theBook.id);
        const finalTotal = actBook.price * theBook.quantity;
        accumulator = accumulator + finalTotal;
    }
    return accumulator;
}