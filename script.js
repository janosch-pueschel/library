"use strict";

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function createNewBook() {
  let title = prompt("Book-Title:");
  let author = prompt("Author:");
  let pages = prompt("Pages:");
  let read = prompt("Read:");
  let newBook = new Book(title, author, pages, read);
}