const cowsay = require("cowsay");
const Quote = require("inspirational-quotes");

quote=Quote.getQuote();

console.log(
  cowsay.say({
    text: quote.text,
    e: "xxx",
    T: "U",
  })
);
