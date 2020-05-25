
// ESERCIZIO 1

// Array contenente Elenco delle email degli invitati

var indirizziEmail = ['marco@gmail.com', 'luca@libero.it', 'laura@hotmail.com', 'franca@outlook.it', 'severino@gmail.com', 'leonardo@gmail.com', 'pippo@hotmail.com', 'antonio@virgilio.it', 'angela@gmail.com'];

// console.log(indirizziEmail[4]);


// Messaggio Esito Invito
bottoneInvito = document.getElementById('btn_invito');
var esitoInvito = document.getElementById('esito');
var verifica = false;


// Chiedo all'utente la sua email
emailUtente = document.getElementById('indirizzo_email');

// Controllo che l'email sia presente

// Evento cliccando il tasto controllo invito

bottoneInvito.addEventListener('click',
function () {

  for ( var i = 0; i < indirizziEmail.length; i++ ) {
    if (indirizziEmail[i] == emailUtente.value) {
      verifica = true;
      // Esito controllo
    }

  }

  if (verifica) {
    esitoInvito.innerHTML = "Fai parte degli invitati alla festa, benvenuto! :-)";

  }
  else {
    esitoInvito.innerHTML = "Mi dispiace, ma non fai parte degli invitati alla festa. Sarà per l'anno prossimo :-(";



  }

}

);






// ESERCIZIO 2

// Scelta numeri

var numeroUtente = document.getElementById('numero_utente');

var numeroPc = document.getElementById('numero_pc')

// Bottone scelta

var bottoneScelta = document.getElementById('btn_numero');

// Risutato

var risultato = document.getElementById('risultato')

// Evento cliccando sul botto Scelta
bottoneScelta.addEventListener('click',
function () {

  // Assegnazione numero PC e comparazione
  numeroPc = numeroPc.innerHTML = parseInt(Math.floor(Math.random() * 10));
  numeroUtente = parseInt(numeroUtente.value);
  if (numeroUtente > numeroPc) {
    risultato = risultato.innerHTML = "Hai vinto! :-)";


  }

  else if (numeroUtente < numeroPc) {
    risultato = risultato.innerHTML = "Hai perso! :-(";

  }

  else if (numeroUtente == numeroPc) {
    risultato = risultato.innerHTML = "Hai pareggiato! :-/";

  }

  // risultato finale

  console.log(numeroUtente);

}
);
