//CLASSES WITH JAVASCRIPT
// OLD & POOR SYNTAX 
// function Book (title,pages,isbn)
//     {
//         this.title =title;
//         this.pages = pages;
//         this.isbn = isbn;

//     };
//     Book.prototype.printTitle = function(){
//         console.log(this.title);
//     }

// SYNTAX WITH A CLASS IMPLEMENTATION 

 class Book{
     constructor (title,pages,isbn)
         {
             this.title = title;
             this.pages = pages;
             this.isbn = isbn;
         }
         PrintIsbn(){
             console.log(this.isbn);
         };
 };

 let book = new Book('title','pages','isbn');
 console.log(book.title,book.pages,book.isbn);

 class BOOK{
     constructor(books)
        {
            this.books =books;
            
        }
          
 };

 let MyBooks = new BOOK('Harrypotter');
 console.log(MyBooks);

