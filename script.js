//Magic 8 ball answers in array
const answers = [
  "Outlook unclear try again later.",
  "Yes, definitely!",
  "No way, Jose.",
  "Signs point to yes.",
  "My sources say no.",
  "Cannot predict now.",
  "It is certain.",
  "Don't count on it.",
  "Ask again later.",
  "Without a doubt.",
  "Better not tell you now.",
  "Reply hazy, try again.",
  "Very doubtful.",
  "Outlook not so good.",
  "You may rely on it.",
  "As I see it, yes.",
  "My reply is no.",
  "Concentrate and ask again.",
  "Most likely.",
  "It is decidedly so.",
];
// function random() {
//   let random = answers[Math.floor(Math.random() * answers.length)];
//   return random;
// }
const click = document.querySelector(".container");
let answer = document.querySelector("#text");
const eight = document.querySelector("#eight");

click.addEventListener("click", function () {
  click.classList.add("shakeBall");
  answer.classList.add("textZoom");
  eight.style.display = "none";

  //removes class at end of animation. Ensures animation runs on every click.
  answer.addEventListener("animationend", function () {
    click.classList.remove("shakeBall");
    answer.classList.remove("textZoom");
  });
  let random = answers[Math.floor(Math.random() * answers.length)];
  answer.innerHTML = random;
});
