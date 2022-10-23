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





