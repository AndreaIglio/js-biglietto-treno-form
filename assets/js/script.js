// genero variabili associate all id ----> card_top
var btnGenera = document.getElementById('btn_genera');
// console.log(btnGenera);
var btnAnnulla = document.getElementById('btn_annulla');
// console.log(btnAnnulla);


// var fullNameInput = fullName.Value;
// var kmInput = kmToRun.value;
// var fasciaInput = fascia.value;

// prezzo biglietto per km


var kmPrice = 0.21;
var ticketCost = kmPrice * km;
// console.log(ticketCost);


// genero variabili associate all id ----> card_bottom


var bottomFullName = document.getElementById('nome_passeggero');
var bottomSconto = document.getElementById('sconto');
var bottomCarrozza = document.getElementById('carrozza');
var bottomCodiceCp = document.getElementById('codice_cp');
var bottomFinalTicketPrice = document.getElementById('ticket_price');




// Event Listener

btnGenera.addEventListener('click',

function() {

//
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




}


)




btnAnnulla.addEventListener('click',

function() {

document.getElementById('your_ticket').style.display = 'none';


}


)
