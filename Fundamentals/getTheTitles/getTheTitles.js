const getTheTitles = function(books) {
    let bookNames = [];
    books.forEach(book => {
        bookNames.push(book.title);
    });
    return bookNames;


}

module.exports = getTheTitles;
