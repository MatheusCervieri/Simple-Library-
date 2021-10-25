let MyLibrary = [];
let bookscards = []; //divs with the books information. 
const bookscardsdiv = document.querySelector('#bookscards');
const inputs = {
    inputbooktitle: document.querySelector('#BookTitle'),
    inputbookauthor: document.querySelector('#BookAuthor'),
    inputnumberofpages: document.querySelector('#NumberofPages'),
    inputcheckbox: document.querySelector('#readcb'),
}

const buttons = {
    addbook: document.querySelector("#newbook"),
}
console.log(inputs.inputbookauthor);

function consolebooktitle(booktitle){
    console.log(booktitle);
}

function Book (title,author,numberofpages,isreaded){
    this.id = MyLibrary.length;
    this.title = title;
    this.author = author;
    this.numberofpages = numberofpages;
    this.isreaded = isreaded;
    this.createCard = function (i){
        let divcard = document.createElement('div');
        bookscardsdiv.appendChild(divcard);
        bookscardsdiv.className = "bookscardsgrid";
        divcard.className = "card";
        divcard.id = i;
        let divtitle = document.createElement('div');
        let divauthor = document.createElement('div');
        let divpages = document.createElement('div');
        let removebtn = document.createElement('button');
        let divcheckbox = document.createElement('div');
        let textcheckbox = document.createElement('p');
        let checkbox = document.createElement('input');
        divtitle.className = "divtitle";
        divauthor.className = "divauthor";
        divpages.className = "divpages";
        removebtn.className = "removebtn";
        checkbox.className = "checkbox";
        divcheckbox.className = "divcheckbox";
       textcheckbox.className = "textcheckbox";

        let id= this.id;
        divcard.appendChild(divtitle);
        divcard.appendChild(divauthor);
        divcard.appendChild(divpages);
        divcard.appendChild(divcheckbox);
        divcheckbox.appendChild(textcheckbox);
        divcheckbox.appendChild(checkbox);
        divcard.appendChild(removebtn);
        divtitle.textContent = "Book Title: " + this.title;
        divauthor.textContent = "Author: " + this.author;    
        divpages.textContent = "Pages: " + this.numberofpages;
        textcheckbox.textContent = "Is Readed?"
        removebtn.textContent = "Remove this book";
        checkbox.type = "checkbox";
        checkbox.checked = this.isreaded;
        removebtn.addEventListener('click', function(event){
            RemoveBookFromLibrary(id);
        });
        checkbox.addEventListener('change', function() {
            if (this.checked) {
              console.log("Checkbox is checked..");
              this.isreaded = true;
            
            } else {
              console.log("Checkbox is not checked..");
              this.isreaded = false;
            }
        });

          
    }

    this.createDivsInsideCard = function (author){
        let divauthor = document.createElement('div');
        divauthor.textContent = author;
        this.appendChild(divauthor);
    }
}



function AddBooksToLibrary(title,author,numberofpages,isreaded){
  MyLibrary.push(new Book(title,author,numberofpages,isreaded)); 
  
}
function RemoveBookFromLibrary(bookid){
    ShowBooks();
    MyLibrary = MyLibrary.filter(function(el){
        return el.id !== bookid;
      });
      removeAllBooksCards();
      createBooksCards();
      ShowBooks();
   
}

function ShowBooks (){
    for (i = 0; i < MyLibrary.length; i++){
        console.log(MyLibrary[i].title);
    }
}

function UpdateDisplay(){

}


function createBooksCards(){
    for (i = 0; i < MyLibrary.length; i++){
       MyLibrary[i].createCard(i);
    }
}

function removeAllBooksCards(){
    bookscardsdiv.innerHTML = "";
}

buttons.addbook.addEventListener('click', () => {
   removeAllBooksCards();
    AddBooksToLibrary(inputs.inputbooktitle.value, inputs.inputbookauthor.value,inputs.inputnumberofpages.value,inputs.inputcheckbox.checked);
   createBooksCards();

});

AddBooksToLibrary("Como Passar em Medicina", "Matheus Cervieri", "83", true);
AddBooksToLibrary("Geração de Valor", "Flavio Augusto", "103", true);
AddBooksToLibrary("Desperte o Gigante Interior", "Anthony Robbins", "103", true);
ShowBooks();
createBooksCards();
