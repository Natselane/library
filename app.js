const newBookBtn = document.querySelector("#new-book-btn");
const newBookForm = document.querySelector(".new-book-form");
const tableBody = document.querySelector("#tableBody");
const addNewBookBtn = document.querySelector("#add-new-book-btn");
const newAuthor = document.querySelector("#author");
const newTitle = document.querySelector("#title");
const newNumOfPages = document.querySelector("#num-of-pages");
const notReadRadio = document.querySelector("#not-read");
const readRadio = document.querySelector("#read");

let myLibrary = [];

function Book(id, author, title, numOfPages, status) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.status = status;

    this.changeStatus = function(newStatus) {
      this.status = newStatus;
    };
};

let harryPotter = new Book("0", "JK Rowling", "Harry Potter", "343", "read");
let peterPan = new Book("1,", "JM Barrie", "Peter Pan", "623", "not read");
myLibrary.push(harryPotter, peterPan);

function addRowToTable() {
    myLibrary.forEach(book => {
        const counter = checkCounter(book);
        const author = checkAuthor(book);
        const title = checkTitle(book);
        const numOfPages = checkNumOfPages(book);
        const status = checkStatus(book);
        let status2;
        status === "read" ? status2 = "not read" : status2 = "read";
        
        const tr = document.createElement("tr");
        const remove = addRemoveBtn(tr);
        tr.innerHTML = `<td class="book-number">${counter}</td><td class="author">${author}</td><td class="title">${title}</td><td class="num-of-pages">${numOfPages}</td><td class="status"><select class="form-control-sm"><option selected>${status}</option><option>${status2}</option></select></td>`;
        tr.appendChild(remove);
        tableBody.appendChild(tr);
    });
};

// Check everything needed for a book
const checkCounter = (book) => myLibrary.indexOf(book) + 1;
const checkAuthor = (book) => book.author;
const checkTitle = (book) => book.title;
const checkNumOfPages = (book) => book.numOfPages;
const checkStatus = (book) => book.status;

// Add remove book button
const addRemoveBtn = (tr) => {
    // Add remove button to the row
    const tdRemoveBook = document.createElement("td");
    tdRemoveBook.className = "remove-book";
    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.classList.add("btn");
    removeBtn.classList.add("btn-danger");
    removeBtn.classList.add("btn-sm");
    removeBtn.innerHTML = "Delete";
    tdRemoveBook.appendChild(removeBtn);

    // Delete a book
    removeBtn.addEventListener("click", () => {
        // Delete from the library array
        let indexToRemove;
        myLibrary.forEach((book, index) => {
          if (book.title == tr.querySelectorAll("td")[2].innerText) {
            indexToRemove = index;
          };
        });
        myLibrary.splice(indexToRemove - 1, 1);
        // Delete from the table
        tableBody.removeChild(tr);
    });
    return tdRemoveBook;
};

function deleteAllBooks() {
  while (tableBody.rows.length > 0) {
    tableBody.deleteRow(0);
  };
};

function addNewBook() {
  let libLength = myLibrary.length + 1;
  let id = libLength.toString();
  let author = newAuthor.value;
  let title = newTitle.value;
  let numOfPages = newNumOfPages.value;
  let status;
  readRadio.checked === true ? status = "read" : status = "not read";
  console.log({id, author, title, numOfPages, status});
  myLibrary.push(new Book(id, author, title, numOfPages, status));
  deleteAllBooks();
  addRowToTable();
};

// Event listeners
newBookBtn.addEventListener("click", () => newBookForm.classList.toggle("form-display-none"));

addRowToTable();

const select = document.querySelectorAll("select");

select.forEach(select => {
  select.addEventListener("change", (event) => {
    let currentValue = event.target.value;
    let index = select.parentElement.parentElement.querySelector("td").innerText - 1;
    myLibrary[index].changeStatus(currentValue);
  });
});

addNewBookBtn.addEventListener("click", () => {
  addNewBook();
});
