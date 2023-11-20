
//chiedere all'utente i km che vuole percorrere

const km = prompt('Quanti km vuoi percorrere?');
console.log(km);

//chiedere all'utente l'età

const età = prompt('Quanti anni hai?');
console.log(età);

//il prezzo del biglietto è definito in base ai km (0.21 € al km)

const prezzo_biglietto = km * 0.21;
console.log(prezzo_biglietto);

//va applicato uno sconto del 20% per i minorenni

if(età < 18){

    const prezzo_biglietto_min18 = prezzo_biglietto - (prezzo_biglietto * 20 / 100);
    console.log(prezzo_biglietto_min18);
    document.writeln(prezzo_biglietto_min18);

    //va applicato uno sconto del 40% per gli over 65 (fortunelli)
}else if(età > 65){

    const prezzo_biglietto_over65 = prezzo_biglietto - (prezzo_biglietto * 40 / 100);
    console.log(prezzo_biglietto_over65);
    document.writeln(prezzo_biglietto_over65);

}else{

    //prezzo normale
    console.log(prezzo_biglietto);
    document.writeln(prezzo_biglietto);
}


