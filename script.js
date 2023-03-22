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

function closeForm() {
  newBookForm.style.display = "none";
}

const addBookBtn = document.getElementById("add-btn");
addBookBtn.addEventListener("click", () => {
  createNewBook();
  closeForm();
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

    bookCard.innerHTML += `<input type="checkbox" id="read-status" class="read-status-checkbox">`;
    let readStatus = document.getElementById("read-status");
    if (books.read === "already read") {
      readStatus.checked = true;
      console.log("book is read");
    } else if (books.read === "not read yet") {
      readStatus.checked = false;
      console.log("book is not read");
    }
  }
  updateReadStatus();
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

function updateReadStatus() {
  const readStatusCheckbox = document.getElementsByClassName(
    "read-status-checkbox"
  );

  for (let i = 0; i < readStatusCheckbox.length; i++) {
    readStatusCheckbox[i].addEventListener("click", () => {
      console.log("works");
      let libraryIndex =
        readStatusCheckbox[i].parentNode.getAttribute("data-library-index");
      if (myLibrary[libraryIndex]["read"] === "already read") {
        myLibrary[libraryIndex]["read"] = "not read yet";
      } else if (myLibrary[libraryIndex]["read"] === "not read yet") {
        myLibrary[libraryIndex]["read"] = "already read";
      }
      displayBooks();
    });
  }
}
