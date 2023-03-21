const bookList = document.getElementById('bookList');
const submitButton = document.getElementById('submitButton')

let bookShelf = JSON.parse(localStorage.getItem('bookShelf')) || [];

function addBook(title, author) {
  const newBook = {
    title: title,
    author: author,
  };

  bookShelf.push(newBook);

  localStorage.setItem('bookShelf', JSON.stringify(bookShelf));
  document.getElementById('bookTitle').value = '';
  document.getElementById('bookAuthor').value = '';

  displayBook(newBook);
}

function displayBook(book) {
  const singleBook = document.createElement('li');
  singleBook.setAttribute('id', `${book.title}-${book.author}`);

  const bookPrint = document.createElement("span");
  bookPrint.innerHTML = `${book.title}<br>${book.author}<br>`;
  const removeButton = document.createElement('button');
  removeButton.innerText = 'Leave team';
  removeButton.addEventListener('click', () => removeBook(book.title, book.author));

  singleBook.appendChild(bookPrint);
  singleBook.appendChild(removeButton);
  bookList.appendChild(singleBook);
}

function removeBook(title, author) {
  bookShelf = bookShelf.filter(book => book.title !== title || book.author !== author);

  localStorage.setItem('bookShelf', JSON.stringify(bookShelf));

  const singleBook = document.getElementById(`${title}-${author}`);
  if (singleBook) {
    bookList.removeChild(singleBook);
  }
}

bookShelf.forEach(book => displayBook(book));

submitButton.addEventListener('click', () => {
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;
  addBook(title, author);
});