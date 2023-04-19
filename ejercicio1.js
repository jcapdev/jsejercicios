/*
Enunciado del ejercicio:
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
*/


/*creando clase libro*/

//Crea una clase Libro
//La clase libro tendrá título, autor, año y género.

class Book{
        constructor (title, author, year, gender){
            this.title = title
            this.author = author
            this.year = year
            this.gender = gender
        }
    getAuthor(){
        return this.author;
    }
    
    getGender(){
        return this.gender;
    }
        
    /*devolver registros*/
    //Crea un método que devuelva toda la información del libro
    bookInfo(){
        return '${this.title} es un libro de ${this.gender} escrito por ${this.author} en el año ${this.year}'
    }    
}

/*creando arreglo*/
//Pide 3 libros y guárdalos en un array
//Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.

let books = []

while (books.length < 3) {
    //varibles a guarar
        let title = prompt('introduce el titulo del libro')
        let author = prompt('introduce el titulo del autor')
        let year = prompt('introduce el año')
        let gender = prompt('introduce el genero')
        .toLowerCase()
    /*
    ## VALIDACIONES

    Validar que los campos no se introduzcan vacíos
    Validar que el año sea un número y que tenga 4 dígitos
    Validar que el género sea: aventuras, terror o fantasía
    
    */


    // toLowerCase() es un método predefinido de JavaScript que se utiliza para convertir una cadena de texto a minúsculas.
    // La función isNaN() es una función predefinida de JavaScript que se utiliza para determinar si un valor es NaN (Not a Number), que es un valor especial que representa un resultado matemático no válido o indefinido.
    // devuelve TRUE o false

    //ejemplo
    // console.log(isNaN(123)); // false
    /* 
        console.log(isNaN('123')); // false
        console.log(isNaN('Hola')); // true
        console.log(isNaN(NaN)); // true
        console.log(isNaN(undefined)); // true
    */


    if (title != '' &&
        author !== '' &&
        !isNaN(year) &&
        year.length == 4 &&
        (gender == 'aventura' || gender == 'terror' || gender == 'fantasia')){

            /*
            push() es un método predefinido de JavaScript que se utiliza para agregar uno o varios elementos al final de un array (arreglo).
            ejemplo
                let myArray = [1, 2, 3];

                console.log(myArray); // [1, 2, 3]

                myArray.push(4);

                console.log(myArray); // [1, 2, 3, 4]

                myArray.push(5, 6);

                console.log(myArray); // [1, 2, 3, 4, 5, 6]
           */  
           books.push(new Book(title,author,year,gender)) 

        }

}

// funcion que muestre todos los libros

const showAllBooks = () => {
     console.log(books);
}

//Crea una función que muestre los autores ordenados alfabéticamente
//sort funcion
const showAuthors = ()=>{
    // todos los autores los mete en un array y despues los ordena
    let authors = []
    for(const book of books){
        authors.push(book.getAuthor());   
      }
      //La función sort() en JavaScript se utiliza para ordenar los elementos de una matriz (array) en su lugar.
    console.log(authors.sort())
}

//Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información

const showGender = ()=>{
    const gender = prompt('Introduce el genero')
     
    //fiktrando
    //buscar mediante el metodo getGender, que obtiene unicamente los generos
    for(const book of books){
        //validar el dato ingresado y buscar si existe
        if(book.getGender() == gender) {
            console.log(book.bookInfo())

        }
      }
}


//showAllBooks()
//showAuthors()
showGender()