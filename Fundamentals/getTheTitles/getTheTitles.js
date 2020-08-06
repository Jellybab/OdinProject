const getTheTitles = function(books) {
    let bookNames = [];
    books.array.forEach(book => {
        bookNames.push(book[0]);
    });
    return bookNames;


}

module.exports = getTheTitles;
