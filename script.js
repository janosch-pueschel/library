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
    read = "read";
  } else {
    read = "not read";
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
      if (key == "read") {
        bookCard.innerHTML += `<div class="read-status-container">
        <p>${books[key]}</p>
        <input type="checkbox" id="read-status" class="read-status-checkbox">
        </div>`;
      } else {
        bookCard.innerHTML += `<p>${books[key]}</p>`;
      }
    }

    bookCard.innerHTML += `<button class="delete-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg></button>`;

    let readStatus = document.getElementById("read-status");
    if (books.read === "read") {
      readStatus.checked = true;
    } else if (books.read === "not read") {
      readStatus.checked = false;
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

function updateReadStatus() {
  const readStatusCheckbox = document.getElementsByClassName(
    "read-status-checkbox"
  );

  for (let i = 0; i < readStatusCheckbox.length; i++) {
    readStatusCheckbox[i].addEventListener("click", () => {
      let libraryIndex =
        readStatusCheckbox[i].parentNode.parentNode.getAttribute(
          "data-library-index"
        );
      if (myLibrary[libraryIndex]["read"] === "read") {
        myLibrary[libraryIndex]["read"] = "not read";
      } else if (myLibrary[libraryIndex]["read"] === "not read") {
        myLibrary[libraryIndex]["read"] = "read";
      }
      displayBooks();
    });
  }
}

const cancelBtn = document.getElementById("cancel-btn");
cancelBtn.addEventListener("click", closeForm);
