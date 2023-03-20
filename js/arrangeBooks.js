const bookListContainer = document.getElementById('bookList');
const submitBook = document.querySelector('#submitBook');
let booksDetails = [];

submitBook.addEventListener('click', () => {
  const singleBook = document.getElementById('bookTitle').value;
  const singleAuthor = document.getElementById('bookAuthor').value;
  let newBook = new DisplayBooks(singleBook, singleAuthor);
  booksDetails.push(newBook);
  booksDetails.forEach((book) => {
    bookListContainer.innerHTML += `
      <p>${book.title}<br>${book.author}</p>
      <button>Remove</button>
    `
});
})

function DisplayBooks(title, author) {
  this.title = title;
  this.author = author;
}
// const example = new DisplayBooks('Book name', 'Book Author')