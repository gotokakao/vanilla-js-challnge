const quotes = [
    {
        quote : "If you would win a man to your cause, first convince him that you are his sincere friend.",
        author : "Abraham Lincoln",
    },
    {
        quote : "Many an optimist has become rich by buying out a pessimist.",
        author : "Robert G. Allen",
    },
    {
        quote : "Everything in your world is created by what you think.",
        author : "Oprah Winfrey",
    },
    {
        quote : "If you want the present to be different from the past, study the past.",
        author : "Baruch Spinoza",
    },
    {
        quote : "Weakness of attitude becomes weakness of character.",
        author : "Albert Einstein",
    },
    {
        quote : "IThe farther behind I leave the past, the closer I am to forging my own character.",
        author : "Isabelle Eberhardt",
    },
    {
        quote : "Friends may come and go, but enemies accumulate.",
        author : "Thomas Jones",
    },
    {
        quote : "Only in the agony of parting do we look into the depths of love.",
        author : "George Eliot",
    },
    {
        quote : "Look at market fluctuations as your friend rather than your enemy; profit from folly rather than participate in it.",
        author : "Warren Buffett",
    },
    {
        quote : "Man is the artificer of his own happiness.",
        author : "Henry David Thoreau",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
