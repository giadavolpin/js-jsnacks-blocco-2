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
1. inserire un numero 
2. se pari stampa numero
3. se dispari stampa numero dopo
*/
 
const bottone = document.getElementById('bottone')
const numero = document.getElementById('numero')
bottone.addEventListener('click', risultato)
function risultato() {
    let num = parseInt(numero.value); 

if( num % 2 == 0 ) /* resto della divisione è zero allora è vero */ {
    console.log(num) 
} else num++; {
    console.log(num)
}
} 


/* Snack2 
1.nomi 
2.cognomi 
3. lista falsa con nomi e cognomi random
*/

let name = [ "marco", "mattia", "gino", "armando", "stefano", "massiliano"];
let cognomi = [ "volpin", "chiesa", "giorgetti", "boldrin", "manenti", "felice"]
  

    for (let i = 0; i < 10; i++){
        let name = Math.floor(Math.random()*name.length);
        lista.innerHtml = name[randomname];
        console.log(name[randomname])
       
        let cognomi = Math.floor(Math.random()*cognomi.length);  
     }
    const lista = document.innerHtml(lista);
   

/* Snack3 
1. Crea un array di numeri interi 
2. fai la somma di tutti gli elementi che sono in posizione(indice) dispari
*/

const i = [10, 5, 50, 2, 30, 24, 15, 75];
for (let i = 0; i < 10; i++){
    console.log(i)
} 


/* snack4 */

const frutta = [mela, banana, cocco, melagrano, pera, fragola, arancia, limone]
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
}
