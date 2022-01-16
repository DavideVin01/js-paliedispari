// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// const userChoice = prompt('Pari o dispari?').trim();
// console.log('Hai scelto', userChoice);
// const userNumber = parseInt(prompt('Scegli un numero da 1 a 5').trim());
// console.log('Il numero scelto è', userNumber);

// // ! VALIDAZIONE
// if (userChoice === 'Pari' || userChoice === 'Dispari' && !isNaN(userNumber)) {
//     const computerNumber = randomNumber(1, 5);
//     console.log('Il numero del computer è', computerNumber);

//     let sum = userNumber + computerNumber;
//     console.log('La somma è', sum);


//     let pariODispari = evenOrOdd(sum);

//     function randomNumber(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }

//     function evenOrOdd(numero) {
//         if (numero % 2 === 0)
//             return "Pari";
//         else
//             return "Dispari";
//     }

//     if (userChoice == pariODispari) {
//         console.log("Hai vinto");
//     } else {
//         console.log("Hai perso");
//     }
// } else {
//     console.log('Non hai inserito Pari o Dispari.');
// }

const choiseElement = document.getElementById('even-odd');
const userNumberElement = document.getElementById('user-number');
const sendButton = document.getElementById('send-button');
const resultElement = document.getElementById('result-display');
const userElement = document.getElementById('user');
const cpuElement = document.getElementById('cpu');
const sumDisplayElement = document.getElementById('sum-display');

sendButton.addEventListener('click', function () {
    const choiseElementValue = choiseElement.value.trim();
    userElement.innerText = `Hai scelto ${choiseElementValue}`;

    const userNumberValue = parseInt(userNumberElement.value);
    cpuElement.innerText = `Il numero scelto è ${userNumberValue}`;

    // ! VALIDAZIONE
    if (!isNaN(userNumberValue)) {
        const computerNumber = randomNumber(1, 5);
        cpuElement.innerText = `Il numero scelto dal computer è ${computerNumber}`;

        let sum = userNumberValue + computerNumber;
        console.log('La somma è', sum);

        let pariODispari = evenOrOdd(sum);

        sumDisplayElement.innerText = `La somma dei due numeri è ${sum}`;

        function randomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function evenOrOdd(numero) {
            if (numero % 2 === 0)
                return "Pari";
            else
                return "Dispari";
        }

        if (choiseElementValue == pariODispari) {
            resultElement.innerText = "Ha vinto il Giocatore!";
        } else {
            resultElement.innerText = "Ha vinto il Computer!";
        }
    } else {
        console.log('Non hai inserito Pari o Dispari.');
    }
})