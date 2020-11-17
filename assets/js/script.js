// add style to an element by id using Js

// var elemLabel = document.getElementById('label');

// elemLabel.className = elemLabel.classList + "brown";



// genero variabili associate all id ----> card_top

var btnGenera = document.getElementById('btn_genera');
// console.log(btnGenera);
var btnAnnulla = document.getElementById('btn_annulla');
// console.log(btnAnnulla);
var fullName = document.getElementById('full-name');
var kmToRun = document.getElementById('km');
var fascia = document.getElementById('fascia');


// genero variabili associate all id ----> card_bottom


var bottomFullName = document.getElementById('nome_passeggero');
var bottomOfferta = document.getElementById('offerta');
var bottomCarrozza = document.getElementById('carrozza');
var bottomCodiceCp = document.getElementById('codice_cp');
var bottomFinalTicketPrice = document.getElementById('ticket_price');




// Event Listener

btnGenera.addEventListener('click',

function() {

    // MOSTRARE CARD_BOTTOM
    document.getElementById('your_ticket').style.display = 'block';


// assegno variabili agli id card_bottom based on Input value

var fullNameInput = fullName.value;
// console.log(fullNameInput);

var kmToRunInput = Math.abs(kmToRun.value);
// console.log(kmToRunInput);

var fasciaInput = fascia.value;
// console.log(fasciaInput);


// CALCOLO NOME PASSEGGERO IN CARD_BOTTOM

document.getElementById('nome_passeggero').innerHTML = fullNameInput;

console.log(fasciaInput);


// CALCOLO PREZZO BIGLIETTO CARD_BOTTOM

// prezzo biglietto per km

var kmPrice = 0.21;
var ticketCost = kmPrice * kmToRunInput;

if (fasciaInput == "minorenne") {
    ticketCost = ticketCost - (ticketCost * 0.2);
    // console.log(ticketCost);
    bottomFinalTicketPrice.innerHTML = ticketCost.toFixed(2) + "&euro;";
    bottomOfferta.innerHTML = 'Under';
} 
else if (fasciaInput == "over65") {
    ticketCost = ticketCost - (ticketCost * 0.4);
    bottomFinalTicketPrice.innerHTML = ticketCost.toFixed(2) + "&euro;";
    bottomOfferta.innerHTML = 'Over65';
    // console.log(bottomOfferta);
}
else {
    bottomFinalTicketPrice.innerHTML = ticketCost.toFixed(2) + "&euro;";
    bottomOfferta.innerHTML = "";
}


// CALCOLO NUMERO CARROZZA


// CALCOLO CODICE CP

if (kmToRunInput > 0 && fullNameInput !== "") {

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

bottomCarrozza.innerHTML = Math.floor(Math.random() * 10) + 1;
}
else {alert('Fill both name and km form to get the right price and discount');}

// questa funzione l'ho studiata in passato


bottomCodiceCp.innerHTML = getRndInteger (90000, 99999);

}


)



btnAnnulla.addEventListener('click',

function() {

document.getElementById('your_ticket').style.display = 'none';


}


)

