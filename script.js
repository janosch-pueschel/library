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
  let read;
  if (document.getElementById("book-read").checked === true) {
    read = "already read";
  } else {
    read = "not read yet";
  }

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
let bookCard;

function displayBooks() {
  containerEl.innerHTML = "";
  for (let books of myLibrary) {
    bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-library-index", `${myLibrary.indexOf(books)}`);
    containerEl.insertBefore(bookCard, containerEl.firstChild);
    for (let key in books) {
      bookCard.innerHTML += `<p>${books[key]}</p>`;
    }
    bookCard.innerHTML += `<button class="delete-btn">Delete</button>`;
  }
  displayDeleteBtn();
}

const newBookForm = document.getElementById("new-book-form");
const formBtn = document.getElementById("form-btn");

formBtn.addEventListener("click", function () {
  newBookForm.style.display = "grid";
});

function displayDeleteBtn() {
  const deleteBtn = document.getElementsByClassName("delete-btn");

  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", function deleteBook() {
      let libarayIndex =
        deleteBtn[i].parentNode.getAttribute("data-library-index");
      myLibrary.splice(libarayIndex, 1);
      deleteBtn[i].parentNode.remove();
      displayBooks();
    });
  }
}

// ToDos
// - read-btn for each book to update status of read
