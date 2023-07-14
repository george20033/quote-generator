function quoteGenerator() {
  var quotes = [
    `“Be yourself; everyone else is already taken.”`,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    `“A room without books is like a body without a soul.”`,
    `“You only live once, but if you do it right, once is enough.”`,
    `Be the change that you wish to see in the world.”`,
    `“In three words I can sum up everything I've learned about life: it goes on.”`,
    `“If you tell the truth, you don't have to remember anything.”`,
  ];
  var randomNum = randomNumber();
  document.getElementById("quote").innerHTML = quotes[randomNum];
  document.getElementById("author").innerHTML = authors(randomNum);
}
quoteGenerator();

function randomNumber() {
  return Math.floor(Math.random() * 7);
}

function authors(index) {
  var author = [
    `― Oscar Wilde`,
    `― Albert Einstein`,
    `― Marcus Tullius Cicero`,
    `― Mae West`,
    `― Mahatma Gandhi`,
    `― Robert Frost`,
    `― Mark Twain`,
  ];
  return author[index];
}
