//recupero i campi del form
const tripKmField = document.getElementById("trip-km");
const passengerAgeField = document.getElementById("passenger-age");
//pulsante
const button = document.getElementById("ticket-submit")

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
button.addEventListener('click', (e) => {
    e.preventDefault();
    //recupero i dati dal form
    const tripKm = tripKmField.value
    const passengerAge = passengerAgeField.value
    console.log("la distanza è " + tripKm);
    console.log("L'età del passeggero è " + passengerAge);




})