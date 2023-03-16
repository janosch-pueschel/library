"use strict";

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let myLibrary = [
  {
    title: "Title1",
    author: "Author1",
    pages: 244,
    read: "not read",
  },
  {
    title: "Title2",
    author: "Author2",
    pages: 123,
    read: "read",
  },
  {
    title: "Title3",
    author: "Author3",
    pages: 587,
    read: "not read",
  },
];

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function createNewBook() {
  let title = prompt("Book-Title:");
  let author = prompt("Author:");
  let pages = prompt("Pages:");
  let read = prompt("Read:");
  let newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
}

function createNewBook() {
  let title = prompt("Book-Title:");
  let author = prompt("Author:");
  let pages = prompt("Pages:");
  let read = prompt("Read:");
  let newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
}

const addBookBtn = document.getElementById("add-btn");
addBookBtn.addEventListener("click", createNewBook);


// function to display all books of myLibrary

function displayBooks() {
  for (let books of myLibrary) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    document.getElementById("container").appendChild(bookCard);
    for (let key in books) {
      bookCard.innerHTML += `<p>${books[key]}</p>`;
    }
  }
}

displayBooks();
