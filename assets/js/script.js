// genero variabili associate all id ----> card_top
var btnGenera = document.getElementById('btn_genera');
// console.log(btnGenera);
var btnAnnulla = document.getElementById('btn_annulla');
// console.log(btnAnnulla);

// genero variabili associate all id ----> card_bottom


var bottomFullName = document.getElementById('nome_passeggero');
var bottomOfferta = document.getElementById('sconto');
var bottomCarrozza = document.getElementById('carrozza');
var bottomCodiceCp = document.getElementById('codice_cp');
var bottomFinalTicketPrice = document.getElementById('ticket_price');




// Event Listener

btnGenera.addEventListener('click',

function() {

    document.getElementById('your_ticket').style.display = 'block';

//

// CALCOLO NOME PASSEGGERO IN CARD_BOTTOM

var fullName = document.getElementById('full-name');
// console.log(fullName.value);

var fullNameInput = fullName.value;
// console.log(fullNameInput);
document.getElementById('nome_passeggero').innerHTML = fullNameInput;


var kmToRun = document.getElementById('km');
var kmToRunInput = kmToRun.value;
// console.log(kmToRunInput);

var fascia = document.getElementById ('fascia');
var fasciaInput = fascia.value;
console.log(fasciaInput);
// console.log(fascia);

// CALCOLO PREZZO BIGLIETTO CARD_BOTTOM

// prezzo biglietto per km

var kmPrice = 0.21;
var ticketCost = kmPrice * kmToRunInput;

if (fasciaInput == "minorenne") {
    ticketCost = ticketCost - (ticketCost * 0.2);
    // console.log(ticketCost);
    bottomFinalTicketPrice.innerHTML = ticketCost.toFixed(2) + "&euro;";
} 
else if (fasciaInput == "over65") {
    ticketCost = ticketCost - (ticketCost * 0.4);
    bottomFinalTicketPrice.innerHTML = ticketCost.toFixed(2) + "&euro;";
}
else {
    bottomFinalTicketPrice.innerHTML = ticketCost.toFixed(2) + "&euro;";
}





}


)




btnAnnulla.addEventListener('click',

function() {

document.getElementById('your_ticket').style.display = 'none';


}


)
