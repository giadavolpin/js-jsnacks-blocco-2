/* Snack2 
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista 
di nomi e una lista di cognomi, 
e da queste vuole generare una falsa lista di invitati con nome e cognome.

1. creo 2 liste una di nomi e una cognomi 
2. faccio un ciclo random dove mischia i nomi e cognomi
3. prendo i nomi e i cognomi e li metto in html (id= lista)
*/

let listanome = document.getElementById('listanome')
let listacognome = document.getElementById('listacognome')
let name = [ "marco", "mattia", "gino", "armando", "stefano", "massiliano"];
let cognomi = [ "volpin", "chiesa", "giorgetti", "boldrin", "manenti", "felice"]

    for (let i = 0; i < 10; i++){
        let numeroRandomNome = Math.floor(Math.random()*name.length);
        listanome.innerHtml = name[numeroRandomNome];
       
        let numeroRandomCognome = Math.floor(Math.random()*cognomi.length);  
        listacognome.innerHtml = cognomi[numeroRandomCognome]    
    }
    console.log(name)
    console.log(cognomi) 

/* NON RIESCO A FARLO VENIRE FUORI NELLA PAGINA */

