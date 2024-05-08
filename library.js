let booksInStock = [
    {
        title: "Harry Potter",
        author: "J.K.Rowling",
        year: 1995,
        status: "available",
        rate: 0,
    },
    {
        title: "The Lord of the Rings",
        author: "J.R.R.Tolkien",
        year: 1955,
        status: "available",
        rate: 0,
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949,
        status: "booked",
        rate: 0,
    }
];

class Library {
    #booksList;

    constructor(booksInStock) {
        this.#booksList = booksInStock;
    }

    getPrivateField() {
        return this.#booksList;
    }

    addBook(book) {
        this.#booksList.push(book);
        return;
    };

    removeBook(title) {
        this.#booksList.map(book => {
            if(book.title === title) {
                this.#booksList.splice(this.#booksList.indexOf(book), 1);
            }
        })
    };

    findBooksByAuthor(name) {
        return this.#booksList.filter(book => book.author === name);
    };

    getListOfAvailableBooks() {
        return this.#booksList.filter(book => book.status === "available");
    };
};

class Book extends Library {
    #arrOfPoints = [];
    rate = 0;
    status = "available";

    constructor(title, author, year) {
        super();
        this.title = title;
        this.author = author;
        this.year = year;
    }

    addRating(user, point, titleOfBook) {
        if((user.books.find((book) => book === titleOfBook)) && point <= 5 && point > 0) {
                this.rate = point;
                this.#arrOfPoints.push(point);
            return this.rate;
        } else return "wrong data";
    } ;
  
    getAverageRating() {
        if (this.#arrOfPoints.length > 0) {
          const sum = this.#arrOfPoints.reduce((acc, val) => acc + val, 0);
          return sum / this.#arrOfPoints.length;
        }
      return 0;
    };
};

class User extends Library {
    books = [];
    #arrOfUsers = [];
 
    constructor(name) {
        super();
        this.name = name;
    }

    addNewUser(name) {
        this.#arrOfUsers.push(name);
        return name;
    }

    borrowBook(title, library) {
        this.books.push(title);
        const book = library.find(book => book.title === title);
        if (book.status === "available") {
            book.status = "booked";
            return book;
        }
        return "book is not available";
    };
    
    returnBook(title, library) {
        const book = library.find(book => book.title === title);
        if (book.status === "booked") {
          book.status = "available";
          return book;
        }
        return "book is available";
    };
};

const myLibrary = new Library(booksInStock);

const newBook = new Book("Test book", "Test author", 2000);

const user = new User('Lena');
user.addNewUser('Lena');

user.borrowBook("Harry Potter", myLibrary);
user.returnBook("1984", myLibrary);

console.log(booksInStock);

console.log('-----------------------------');

user.borrowBook("1984", myLibrary);
user.returnBook("Harry Potter", myLibrary);

newBook.addRating(user, 5, "1984");

const myBook = new Book("Qwerty", "Test author", 1994);
myLibrary.addBook(myBook)

console.log(user.showBooks());

console.log(user.borrowBook("Qwerty", myLibrary));
console.log(user.returnBook("Qwerty", myLibrary));

myBook.addRating(user, 5, "Qwerty");
console.log(booksInStock);