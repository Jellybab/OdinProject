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

function addNewCard(book){
    const cards = document.querySelector('#book_cards');

    let newCard = document.createElement('article');
    newCard.setAttribute('class', 'card');

    let title = document.createElement('div');
    title.setAttribute('class', 'title');
    title.textContent = book.title;
    newCard.appendChild(title);

    let author = document.createElement('div');
    author.setAttribute('class', 'author');
    author.textContent = book.author;
    newCard.appendChild(author);

    let pages = document.createElement('div');
    pages.setAttribute('class', 'pages');
    pages.textContent = book.pages + ' pages';
    newCard.appendChild(pages);

    let read = document.createElement('div');
    read.setAttribute('class', 'read');
    read.textContent = (book.read === true) ? 'has read' : 'not read yet';
    newCard.appendChild(read);

    cards.appendChild(newCard);

}

function addBookToLibrary(book){
    myLibrary.push(book);
    addNewCard(book);
}

function makeCards(library){
    library.forEach(book => {
        addNewCard(book);
    });
}
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295);
const testBook = new Book('test', 'test', 1);

let myLibrary = [theHobbit, testBook];
makeCards(myLibrary);