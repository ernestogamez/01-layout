// 4. Read Books

const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

function isBookRead(books, titleToSearch) {
    let book = books.find(element => element.title == titleToSearch);
    return book == undefined ? "El libro no está en la lista" : book.isRead;
  }

console.log(isBookRead(books, "Devastación")); 
console.log(isBookRead(books, "Canción de hielo y fuego")); 
console.log(isBookRead(books, "Los Pilares de la Tierra")); 