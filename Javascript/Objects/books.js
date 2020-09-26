function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = false;
    this.info = function(){
        const hasRead = (this.read === true) ? 'has read' : 'not read yet';
        console.log(
            title + ' by' 
            + author + ', '
            + pages + ' pages, '
            + hasRead);
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295)

console.log(theHobbit.info());