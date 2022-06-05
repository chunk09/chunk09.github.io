const quotes = [
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "Anyone who has never made a mistake has never tried anything new.",
    author: "Albert Einstein",
  },
  {
    quote: "Let me assert my firm belief that the only thing we have to fear is fear itself.",
    author: "F.D. Roosevelt",
  },
  {
    quote: "life is not fair get used to it.",
    author: "Bill Gates",
  },
  {
    quote: "There is no cure for birth and death, save to enjoy the interval.",
    author: "George Santayana",
  },
  {
    quote: "By nature, men are nearly alike. by practice, they get to be wide apart.",
    author: "Confucius",
  },
  {
    quote: "Science is organized knowledge. Wisdom is organized life.",
    author: "Immanuel Kant",
  },
  {
    quote: "Though the sun is gone, I have a light.",
    author: "Kurt cobain",
  },
  {
    quote: "The road to success and the road to failure are almost exactly the same.",
    author: "Colin R. Davis",
  },
  {
    quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    author: "Albert Schweitzer",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuotote = quotes[Math.floor(Math.random() * quotes.length)];

if (quote instanceof HTMLSpanElement) {
  quote.innerText = todayQuotote.quote;
}
if (author instanceof HTMLSpanElement) {
  author.innerText = todayQuotote.author;
}
