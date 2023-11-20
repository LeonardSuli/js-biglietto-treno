
//chiedere all'utente i km che vuole percorrere

const km = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log(km);

//chiedere all'utente l'età

const età = prompt('Quanti anni hai?');
console.log(età);

//il prezzo del biglietto è definito in base ai km (0.21 € al km)

let prezzo_biglietto = km * 0.21;
console.log(prezzo_biglietto);

//va applicato uno sconto del 20% per i minorenni

// if(età < 18){
//     let prezzo_biglietto_min18 = prezzo_biglietto * 20%
// }

