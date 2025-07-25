//recupero i campi del form
const tripKmField = document.getElementById("trip-km");
const passengerAgeField = document.getElementById("passenger-age");
//pulsante
const fomrEl = document.querySelector("form")

Const priceKm = 0.21;

//recupero il campo disabilitato per modificarlo dinamicamente all'inserimento dell'età
const passengerTypeField = document.getElementById("passenger-type")
console.log(passengerTypeField);

passengerAgeField.addEventListener('input', () => {
    let passengerType = '';
    //recupero età passeggero
    const passengerAge = passengerAgeField.value
    //controllo létà del passeggero per modificare il campo del typo
    if (passengerAge < 18) {
        passengerType = 'Minorenne';

    } else if (passengerAge > 65) {
        passengerType = 'Over 65';

    } else {
        passengerType = 'Maggiorenne';
    }

    //modifico il valore value del campo 
    passengerTypeField.value = passengerType;
})


//aspetto che il pulsante viene premuto
fomrEl.addEventListener('submit', (e) => {
    //previene il caricamento della pagina al submit
    e.preventDefault();

    //recupero i dati dal form
    const tripKm = number(tripKmField.value)
    const passengerAge = number(passengerAgeField.value)
    let ticketPrice = 0;
    //calcoliamo il prezzo in base all'età
    if (passengerAge < 18) {
        ticketPrice = (tripKm * priceKm * 0.8).toFixed(2);
    } else if (passengerAge > 65) {
        ticketPrice = (tripKm * priceKm * 0.6).toFixed(2);
    } else {
        ticketPrice = (tripKm * priceKm).toFixed(2);
    }

    console.log(ticketPrice);
})