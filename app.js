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

// function removeBook(book) {
//   console.log("did it");
//   this.innerHTML = 'Dynamic event success.';
//   this.className += ' dynamic-success';
//   // tableBody.removeChild(book);
// }

function addBooksToTable(library) {
  myLibrary.forEach(book => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="author">${book.author}</td><td class="title">${book.title}</td><td class="num-of-pages">${book.numOfPages}</td>`;
    const tdRemoveBook = document.createElement("td");
    tdRemoveBook.className = "remove-book";
    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-btn";
    removeBtn.innerHTML = "Delete";
    tdRemoveBook.appendChild(removeBtn);
    tr.appendChild(tdRemoveBook);
    
    tableBody.appendChild(tr);

    removeBtn.onclick = removeBook => {
      console.log("did it");
      tableBody.removeChild(tr);
    };
  });
  
}



let harryPotter = new Book("JK Rowling", "Harry Potter", "343");
let peterPan = new Book("JM Barrie", "Peter Pan", "623");
myLibrary.push(harryPotter, peterPan);
