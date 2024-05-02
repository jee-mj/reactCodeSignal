/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
// 'How to make react code ugly:', 'A deep dive'

// const books = ['Book 1', 'Book 2', 'Book 3', 'Book 4'];
// 
// function BookList() {
//   return (
//     <ul>
//       {books.map((book) => (
//         <li>{book}</li>  // one <li> for each book
//       ))}
//     </ul>
//   );
// }

// const books = [
//   { id:1, title: 'Book 1' },
//   { id:2, title: 'Book 2' },
// ];
// 
// function BookList() {
//   return (
//     <ul>
//       {books.map((book) => (
//         <li key={book.id}>{book.title}</li>  // key=book.id
//       ))}
//     </ul>
//   );
// }

// We can use CSS files in react

import React from 'react';
import './BookList.css';   // import the CSS file
const books = [
  { id: 1, title: 'Book 1', isAvailable: true },   // book available
  { id: 2, title: 'Book 2', isAvailable: false },  // book checked out
];
function BookList() {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id} className={`book ${book.isAvailable ? 'book-available' : 'book-checkedout'}`}>
          {book.title}
        </li>
      ))}
    </ul>
  );
}
export default BookList;