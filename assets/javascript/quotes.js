const quotesList = [
    '“All our dreams can come true, if we have the courage to pursue them.” —Walt Disney',

    '“The secret of getting ahead is getting started.” —Mark Twain',

    '“If people are doubting how far you can go, go so far that you can’t hear them anymore.” —Michele Ruiz',

    '“One day or day one. You decide.” —Unknown',

    '“No one is to blame for your future situation but yourself. If you want to be successful, then become ‘Successful.’” ―Jaymin Shah',

    '"Learn as if you will live forever, live like you will die tomorrow.” —Mahatma Gandhi',

    'It is better to fail in originality than to succeed in imitation." —Herman Melville'
];

let counter = 0;

let quote = document.getElementById('quote-section');

const interval = setInterval(newQuote, 6600);

function newQuote() {
    quote.innerHTML = quotesList[counter];
    counter++;
    if (counter >= quotesList.length) {
        counter = 0;
    }
}
