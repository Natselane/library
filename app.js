let myLibrary = [];

const tableBody = document.querySelector("#tableBody");
let removeBtns; 

function Book(author, title, numOfPages) {
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
  }
  
function addBookToLibrary() {
  let author = window.prompt("Author of the book:");
  let title = window.prompt("Title of the book:"); 
  let numOfPages = window.prompt("Number of the pages:");

  let newBook = new Book(author, title, numOfPages);
  myLibrary.push(newBook);
}

function addBooksToTable(library) {
  myLibrary.forEach(book => {
    const newBook = document.createElement("tr");
    const newContent = `<td class="author">${book.author}</td><td class="title">${book.title}</td><td class="num-of-pages">${book.numOfPages}</td><td class="remove-book"><button class="delete-book">Delete</button></td>`;
    newBook.innerHTML = newContent;
    tableBody.appendChild(newBook);
  });
  removeBtns = document.querySelectorAll(".delete-book");
}

let harryPotter = new Book("JK Rowling", "Harry Potter", "343");
let peterPan = new Book("JM Barrie", "Peter Pan", "623");
myLibrary.push(harryPotter, peterPan);

removeBtns.forEach(button => {
  button.addEventListener("click", () => {
    console.log("click");
  })
})