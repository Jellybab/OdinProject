let myLibrary = [];

//class for Book 
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

//createElements got idea from chris kamp here
//makes creating elements look a lot nicer and easier to see
// https://github.com/chris-kamp/bookshelf/blob/ed3478d87fd4e96ad8bce33b661e9b20915dccdd/main.js#L75
function createElement(args) {
    const element = document.createElement(args.tag);

    if(args.hasOwnProperty("classes")) {
        args.classes.forEach(className => {
            element.classList.add(className);
        });
    }

    if(args.hasOwnProperty("attributes")) {
        args.attributes.forEach(attribute => {
            element.setAttribute(attribute.type, attribute.value);
        });
    }

    if(args.hasOwnProperty("textContent")) {
        element.textContent = args.textContent;
    }

    if(args.hasOwnProperty("eventListener")) {
        element.addEventListener(args.eventListener.type, args.eventListener.callback);
    }

    if(args.hasOwnProperty("parent")) {
        args.parent.appendChild(element);
    }

    return element;
}

//uses createElements function that I received from Chris Kamp
function addNewCard(book){
    const cards = document.querySelector('#book_cards');

    const newCard = createElement({
        tag: 'div',
        classes: ['card'],
        attributes: [{
            type: "data-index",
            value: myLibrary.length
        }],
        parent: cards
    });

    const title = createElement({
        tag: 'div',
        classes: ['title'],
        textContent: book.title,
        parent: newCard
    });

    const author = createElement({
        tag: 'div',
        classes: ['author'],
        textContent: book.author,
        parent: newCard
    });

    const pages = createElement({
        tag: 'div',
        classes: ['pages'],
        textContent: book.pages+ ' pages',
        parent: newCard
    });

    const read = createElement({
        tag: 'div',
        classes: ['read'],
        textContent: (book.read === true) ? 'has read' : 'not read yet',
        parent: newCard
    });

    const buttons = createElement({
        tag: 'div',
        classes: ['book_buttons'],
        parent: newCard
    });

    const readButton = createElement({
        tag: 'button',
        classes: ['buttons',
         'read_button'],
        textContent: 'read?',
        eventListener: {
            type: 'click',
            callback: (e) =>{
                const index = e.target.getAttribute("data-index");
                toggleRead(index);
            }
        },
        parent: buttons
    });

    const deleteBook = createElement({
        tag: 'button',
        classes: ['buttons', 
        'delete_button'],
        textContent: 'delete?',
        eventListener: {
            type: 'click',
            callback: (e) => {
                const index = e.currentTarget.getAttribute('data-index');
                deleteCard(index);
            }
        },
        parent: buttons
    });
    const children = Array.from(newCard.querySelectorAll("*"));
    children.forEach(child => {
        child.setAttribute("data-index", myLibrary.length);
    });
}

//toggles the read variable 
function toggleRead(index){
    myLibrary[index].read = !myLibrary[index].read;
    const cardToChange = document.querySelector(`.read[data-index='${index}']`)
    cardToChange.textContent = (myLibrary[index].read === true) ? 'has read' : 'not read yet';
}

//adds a new book to library and adds it to the screen
function addBookToLibrary(book){
    addNewCard(book);
    myLibrary.push(book);
}

//gets input from user and adds book to library
function addNewBook(){
    if(validateInput()){
        const titleValue = document.getElementById('titleInput').value;
        const authorValue = document.getElementById('authorInput').value;
        const pagesValue = document.getElementById('pagesInput').value;
        const newBook = new Book(titleValue, authorValue, pagesValue);
        addBookToLibrary(newBook);
        document.getElementById('titleInput').value = '';
        document.getElementById('authorInput').value = '';
        document.getElementById('pagesInput').value = '';
    }
}

//deletes card and moves rest of array down an index
function deleteCard(index){
    const cardTodelete = document.querySelectorAll(`[data-index='${index}']`);
    cardTodelete.forEach(element =>{
        element.parentNode.removeChild(element);
    });
    myLibrary.splice(index, 1);
    
    const libraryCards = document.querySelectorAll('.card');
    libraryCards.forEach(card => {
        const cardIndex = card.getAttribute('data-index');
        if(cardIndex > index){
            card.setAttribute('data-index', (cardIndex-1));
            const cardElements = card.querySelectorAll('*');
            cardElements.forEach(element =>{
                element.setAttribute('data-index', (cardIndex-1));
            });
        }
    });
}

function validateInput(){
    const inputs = [
        document.getElementById('titleInput').value,
        document.getElementById('authorInput').value,
        document.getElementById('pagesInput').value
    ]
    let validated = true;
    inputs.forEach(input => {
        if(input === ''){
            validated = false;
        }
    });
    return validated;
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295);
const testBook = new Book('test', 'test', 1);

const addBookButton = document.getElementById('addBook');
addBookButton.addEventListener('click', addNewBook);


addBookToLibrary(theHobbit);
