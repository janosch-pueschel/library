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
  let title = document.getElementById("book-title").value;
  let author = document.getElementById("book-author").value;
  let pages = document.getElementById("book-pages").value;
  let read = document.getElementById("book-read").value;
  let newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  displayBooks();
}

const addBookBtn = document.getElementById("add-btn");
addBookBtn.addEventListener("click", () => {
  createNewBook();
});

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

const newBookForm = document.getElementById("new-book-form");
const formBtn = document.getElementById("form-btn");

formBtn.addEventListener("click", function () {
  newBookForm.style.display = "grid";
});
