// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

const userWord = prompt('Inserisci una parola');

let reversed = '';



for (let i = 0; i < userWord.length; i++) {
    let currentWord = userWord[i];
    reversed += currentWord;
}

for (let i = userWord.length - 1; i >= 0; i--) {
    let currentWord = userWord[i];
    reversed += currentWord;
}

function capovolgi(userWord) {
    let risultato = '';
    for (let i = userWord.length - 1; i >= 0; i--) {
        let currentWord = userWord[i];
        risultato += currentWord;
    }
    return risultato;
}

let parolaRovesciata = capovolgi(userWord);
console.log(parolaRovesciata);

function isPalindroma(userWord) {
    let parolaRovesciata = capovolgi(userWord);

    return (parolaRovesciata === userWord);
}

if (isPalindroma(userWord)) {
    console.log('è palindroma');
} else {
    console.log('non è palindroma');
}