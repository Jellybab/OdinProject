const getTheTitles = function(books) {
    let bookNames = [];
    books.forEach(book => {
        bookNames.push(book[0]);
    });
    return bookNames;


}

module.exports = getTheTitles;
