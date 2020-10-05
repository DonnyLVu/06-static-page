export function renderBook(book) {
    
    const li = document.createElement('li');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const cover = document.createElement('img');
    const price = document.createElement('p');
    const category = document.createElement('p');
    const description = document.createElement('p');
    const button = document.createElement('button');

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

    button.textContent = 'Add to cart';

    li.appendChild(button);

    return li;
}