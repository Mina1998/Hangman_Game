const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);

let lettersDiv = document.querySelector(".letters");
lettersArray.forEach((letter) => {
    let span = document.createElement("span");
    let letterTextNode = document.createTextNode(letter.toUpperCase());
    span.appendChild(letterTextNode);
    span.classList.add("letter-box");
    lettersDiv.appendChild(span);
})

// Object of Words and Categories
const words = {
    programming: ["php", "javascript","go", "ruby", "scala", "mysql", "python", "fortran"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Coco", "Up"],
    people: ["Albert Einstein", "Alexander", "Cleopatra"],
    countries: ["Egypt", "Syria", "Palestine", "Qatar", "Bahrain"]
};

// Get All Keys from Object and Return them in an Array
let keys = Object.keys(words);
// Generate Random Key Number
let randomPropertyNumber = Math.floor(Math.random() * keys.length);
// Return the Words of the Category
let randomWordsArray = words[keys[randomPropertyNumber]];
// Generate Random Word Number
let randomWordNumber = Math.floor(Math.random() * randomWordsArray.length);
let randomWord = randomWordsArray[randomWordNumber];
document.querySelector(".category span").innerHTML = keys[randomPropertyNumber];

let lettersGuess = document.querySelector(".letters-guess");
let randomWordArray = Array.from(randomWord);

let wordWithoutSpacing = "";
for(let i = 0; i < randomWordArray.length; i++) {
    if (randomWordArray[i] !== ' ') {
        wordWithoutSpacing += randomWordArray[i];
    }
}

console.log(randomWord);
let wordWithoutSpacingLength = wordWithoutSpacing.length;
let numberOfGuessedRightLetters = 0;
const numberOfAllowedFaults = 7;
let numberOfGuessedFaultLetters = 0;

randomWordArray.forEach((letter) => {
    let span = document.createElement("span");
    if (letter === ' '){
        span.classList.add("space");
    } 
    span.classList.add("guess-letter-box");
    lettersGuess.appendChild(span);
});

document.addEventListener("click" , (e) => {
    if (e.target.className === "letter-box") {
        e.target.classList.add("clicked");
        let guessLettersSpans = document.querySelectorAll(".guess-letter-box");
        let clickedLetter = e.target.innerHTML;
        let found = false;
        randomWordArray.forEach((letter, index) => {
            if (clickedLetter.toUpperCase() === letter.toUpperCase()) {
                guessLettersSpans[index].innerHTML = clickedLetter;
                numberOfGuessedRightLetters++;
                found = true;
            }
        })
        if (!found) {
            numberOfGuessedFaultLetters++;
        }
        found = false;
        console.log(numberOfGuessedFaultLetters);
        if (wordWithoutSpacingLength === numberOfGuessedRightLetters) {
            document.querySelector(".status").innerHTML = "YOU WIN!!";
            document.querySelector(".status").style.display = "block";
        }
    }
})