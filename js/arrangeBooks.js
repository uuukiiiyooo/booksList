/* eslint-disable no-unused-vars */

class BookShelf {
  constructor() {
    this.bookList = document.getElementById('bookList');
    this.submitButton = document.getElementById('submitButton');
    this.bookShelf = JSON.parse(localStorage.getItem('bookShelf')) || [];
    this.init();
  }

  init() {
    this.bookShelf.forEach((book) => this.displayBook(book));
    this.submitButton.addEventListener('click', () => {
      const title = document.getElementById('bookTitle').value;
      const author = document.getElementById('bookAuthor').value;
      this.addBook(title, author);
    });
  }

  removeBook(title, author) {
    this.bookShelf = this.bookShelf.filter(
      (book) => book.title !== title || book.author !== author,
    );
    localStorage.setItem('bookShelf', JSON.stringify(this.bookShelf));
    const singleBook = document.getElementById(`${title}-${author}`);
    if (singleBook) {
      this.bookList.removeChild(singleBook);
    }
  }

  displayBook(book) {
    const singleBook = document.createElement('li');
    singleBook.setAttribute('id', `${book.title}-${book.author}`);
    const bookPrint = document.createElement('span');
    bookPrint.innerHTML = `${book.title} by ${book.author}<br>`;
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.addEventListener('click', () => this.removeBook(book.title, book.author));
    singleBook.appendChild(bookPrint);
    singleBook.appendChild(removeButton);
    this.bookList.appendChild(singleBook);
  }

  addBook(title, author) {
    const newBook = {
      title,
      author,
    };
    this.bookShelf.push(newBook);
    localStorage.setItem('bookShelf', JSON.stringify(this.bookShelf));
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
    this.displayBook(newBook);
  }
}

const bookShelf = new BookShelf();

// Nav Bar
const displayListLink = document.getElementById('displayList');
const displayAddLink = document.getElementById('displayAdd');
const displayContactLink = document.getElementById('displayContact');

// get the content sections
const listDisplaySection = document.querySelector('.listDisplays');
const inputDataSection = document.getElementById('inputData');
const contactSection = document.getElementById('contact');

// add click event listeners to the navigation links
displayListLink.addEventListener('click', () => {
  listDisplaySection.classList.remove('hidden');
  inputDataSection.classList.add('hidden');
  contactSection.classList.add('hidden');
});

displayAddLink.addEventListener('click', () => {
  listDisplaySection.classList.add('hidden');
  inputDataSection.classList.remove('hidden');
  contactSection.classList.add('hidden');
});

displayContactLink.addEventListener('click', () => {
  listDisplaySection.classList.add('hidden');
  inputDataSection.classList.add('hidden');
  contactSection.classList.remove('hidden');
});

// Time and Date
const currentDate = new Date();
const date = currentDate.toDateString();
const time = currentDate.toLocaleTimeString();
document.querySelector('.current-date').innerHTML = `${date} ${time}`;