/* **Snack1**
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.
**Snack2**
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
**Snack3**
Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari
**Snack4 (Bonus)**
Crea due array che hanno un numero di elementi diversi.  
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */


/* Snack1 
Inserisci un numero, se è pari stampa il numero, 
se è dispari stampa il numero successivo.

1. Utente deve inserire un numero, quindi prendo quel num dall'HTML 
2. se (if) pari stampa numero (console.log)
3. se dispari stampa numero dopo (console.log)
*/
 
const bottone = document.getElementById('bottone');
const numero = document.getElementById('numero');
bottone.addEventListener('click', function() {
    let num = parseInt(numero.value); 
    if( num % 2 == 0 ) /* resto della divisione è zero allora è vero */ {
        console.log(num) 
    } else num++; {
        console.log(num)
    }
});
/* FATTO E APPOSTO ES.1 */

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


/* Snack3 
1. Crea un array di numeri interi 
2. fai la somma di tutti gli elementi che sono in posizione(indice) dispari
*/
/* 
const i = [10, 5, 50, 2, 30, 24, 15, 75];
for (let i = 0; i < 10; i++){
    console.log(i)
} 


/* snack4 */

/* const frutta = [mela, banana, cocco, melagrano, pera, fragola, arancia, limone]
const topping = [cioccolato, vaniglia, menta, croccantino]

if (frutta.length > topping.length) {
    const elementiDaAgg = frutta.length - topping.length;
    console.log(elementiDaAgg)
    for(let i=0; i < elementiDaAgg; i++){
        topping.push(i);
    } console.log(topping);
} else if(topping.length > frutta.length){
    const elementiDaAgg = topping.length - frutta.length;
    for(let i=0; i < elementiDaAgg; i++){
        topping.push(i);
    } console.log(frutta);
}     
else {
    console.log('sono uguali')
} */
