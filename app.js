let quote = document.querySelector(".quote");
let author = document.querySelector(".name");
let speech = document.querySelector(".speech");
let copy = document.querySelector(".copy");
let facebook = document.querySelector(".facebook");
let button = document.querySelector("button");

function changeQuote() {
  button.classList.add("loading");
  button.innerText = "Loading Quote...";
  fetch("https://api.quotable.io/random")
    .then((data) => {
      return data.json();
    })
    .then((result) => {
      quote.textContent = result.content;
      author.textContent = result.author;
      button.innerText = "New Quote";
      button.classList.remove("loading");
    });
}
button.addEventListener("click", changeQuote);

// working on sounds
speech.addEventListener("click", () => {
  // SpeechSynthesisUtterance is a web speech api that represent a speech request
  let utterance = new SpeechSynthesisUtterance(
    `${quote.textContent} By ${author.textContent}`
  );
     utterance.lang = "en-US";
  speechSynthesis.speak(utterance); // speak methode of speechSynthesis speaks the utterance
});

// Working on copy button
copy.addEventListener("click", () => {
  //The Clipboard API can be used to implement cut, copy, and paste features within a web application.
  navigator.clipboard.writeText(quote.textContent);
});

// facebook button
facebook.addEventListener("click", () => {
  let fbUrl = "https://www.facebook.com/";
  window.open(fbUrl, "_blanck");
});
