const data = `[
    {
        "title": "axum",
        "author": "tsegaye",
        "publishedYear": 2010,
        "price": 100
    },
    {
        "title": "adwa",
        "author": "amare",
        "publishedYear": 2015,
        "price": 200
    },
    {
        "title": "mekele",
        "author": "abebe",
        "publishedYear": 2024,
        "price": 300
    }
]`;

const parsedBooks = JSON.parse(data);
console.log("parsedBooks", parsedBooks);
const priceSum = parsedBooks.reduce((total, book) => total+book.price, 0); 

console.log("priceSum", priceSum);
const filteredBooks = parsedBooks.filter((book )=> book.publishedYear < 2019);

console.log("filteredBooks", filteredBooks);
const sortedBooks=parsedBooks.sort((book1, book2) => book1.publishedYear - book2.publishedYear);

console.log("sortedBooks", sortedBooks);

