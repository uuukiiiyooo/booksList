class Book {
  constructor(_title, _author) {
    this.title = _title;
    this.author = _author;
  }
}

const bookListContainer = document.getElementById('bookList');
const addBook = document.querySelector('#addBook');
let removeBtns;
let bookArr = [];

function addB(_title, _author) {
  const n = new Book(_title, _author);
  bookArr.push(n);
}

function update() {
  bookListContainer.innerHTML = '';
  bookArr.forEach((book) => {
    bookListContainer.innerHTML += `
    <div id="cont">
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button class='remove-btn'">Remove</button>
    <hr>
    </div>
    `;
  });

  addBook.addEventListener('click', () => {
    const inputTitle = document.getElementById('bookTitle').value;
    const inputAuthor = document.getElementById('bookAuthor').value;
    addB(inputTitle, inputAuthor);
    update();
  });

  removeBtns = document.querySelectorAll('.remove-btn');
  removeBtns.forEach((removeBtn, index) => {
    removeBtn.addEventListener('click', () => {
      bookArr.splice(index, 1);
      update();
    });
  });

  // Save books to localStorage
  localStorage.setItem('bookArr', JSON.stringify(bookArr));
}
// // Load books from localStorage on page load
// window.onload = function () {
//   if (localStorage.getItem('bookArr')) {
//     bookArr = JSON.parse(localStorage.getItem('bookArr'));
//     update();
//   }
// };
