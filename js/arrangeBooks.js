const bookListContainer = document.getElementById('bookList');
const submitBook = document.querySelector('#submitBook');

submitBook.addEventListener('click', () => {
  const singleBook = document.getElementById('bookTitle').value;
  const singleAuthor = document.getElementById('bookTitle').value;
  console.log(singleBook);
  console.log(singleAuthor);
})


// let booksDetails = [
//   {
//     title: 'Something',
//     author: 'Ukiyo',
//   },
//   {
//     title: 'Something II',
//     author: 'Same',
//   }
// ];

// booksDetails.forEach((book) => {
//   submitBook.addEventListener('click', () => {
//     bookListContainer.innerHTML += `
//       <p>${book.title}<br>${book.author}</p>
//       <button>Remove</button>
//     `
//   });
// });

// function DisplayBooks(title, author) {
//   this.title = title;
//   this.author = author;
//   this.add = function() {
//     booksData.push(this.title, this.author);
//   }
// }

// const example = new DisplayBooks('Book name', 'Book Author')