"use strict";

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let myLibrary = [];

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
  displayBooks();
}

function createNewBook() {
  let title = prompt("Book-Title:");
  let author = prompt("Author:");
  let pages = prompt("Pages:");
  let read = prompt("Read:");
  let newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  displayBooks();
}

const addBookBtn = document.getElementById("add-btn");
addBookBtn.addEventListener("click", createNewBook);

// function to display all books of myLibrary

const containerEl = document.getElementById("container");

function displayBooks() {
  for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    containerEl.insertBefore(bookCard, containerEl.firstChild);
    for (let key in myLibrary[i]) {
      bookCard.innerHTML += `<p>${myLibrary[i][key]}</p>`;
    }
  }
}
