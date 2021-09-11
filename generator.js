let lastRandomQuote;

let filmQuotes = [
    {
        quote: "Frankly, my dear, I don't give a damn.",
        character: "Rhett Butler",
        origin: "Gone With the Wind, 1939"
    },
    {
        quote: "I'm going to make him an offer he can't refuse.",
        character: "Don Corleone",
        origin: "The Godfather, 1972"
    },
    {
        quote: "You don't understand! I coulda had class. I coulda been a contender. "
            + "I could've been somebody, instead of a bum, which is what I am.",
        character: "Terry Malloy",
        origin: "On the Waterfront, 1954"
    },
    {
        quote: "Toto, I've got a feeling we're not in Kansas anymore.",
        character: "Dorothy",
        origin: "The Wizard of Oz, 1939"
    },
    {
        quote: "Here's looking at you, kid.",
        character: "Rick Blaine",
        origin: "Casablanca, 1942"
    },
    {
        quote: "Go ahead, make my day.",
        character: "Dirty Harry",
        origin: "Sudden Impact, 1983"
    }
];

let selectRandomQuote = () => filmQuotes[Math.floor(Math.random() * filmQuotes.length)];

let generateRandomHexCode = () => {
    let generateHexValue = () => Math.floor(Math.random() * 16);
    let convertIntValueToHexChar = (val) => String.fromCharCode(97 + (val - 10));
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        let val = generateHexValue();
        if (val > 9) {
            val = convertIntValueToHexChar(val);
        }
        hexCode += val;
    }
    return hexCode;
}

let generateQuote = () => {
    document.body.style.backgroundColor = generateRandomHexCode();
    let quote = document.querySelector(".quote");
    let caption = document.querySelector(".quote-caption");
    let nextRandomQuote = selectRandomQuote();
    while (nextRandomQuote === lastRandomQuote) {
        nextRandomQuote = selectRandomQuote();
    }
    lastRandomQuote = nextRandomQuote;
    quote.innerText = nextRandomQuote.quote;
    caption.innerHTML = `- ${nextRandomQuote.character}, <cite class=\"quote-origin\">${nextRandomQuote.origin}</cite>`;
}

document.body.addEventListener("click", generateQuote);

generateQuote();