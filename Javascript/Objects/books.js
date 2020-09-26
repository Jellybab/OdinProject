function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = function(){
        const hasRead = (this.read === true) ? 'has read' : 'not read yet';
        return(
            title + ' by' 
            + author + ', '
            + pages + ' pages, '
            + hasRead);
    }
}

let myLibrary = [];

function addBookToLibrary(book){
    myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295)
addBookToLibrary(theHobbit);
console.log(myLibrary[0].info());