var compScore = 0;
var userScore = 0;
var userScore_span = document.getElementById("user-score")
var compScore_span = document.getElementById("comp-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");

function getComputerchoice() {
  var choices=["r","p","s"];
  var randomnumber=Math.floor(Math.random() * 3);
  return choices[randomnumber];

}

function convertToWord(letter) {
  if (letter == "r") return "Rock";
  if (letter == "p") return "Paper";
  if (letter == "s") return "Scissors";
}

function win(userChoice, computerChoice) {
userScore++;
userScore_span.innerHTML=userScore;
compScore_span.innerHTML=compScore;
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();
result_p.innerHTML=`${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} You win !`;
document.getElementById(userChoice).classList.add("green-glow");
setTimeout(function () {document.getElementById(userChoice).classList.remove("green-glow")} ,1000);


}

function lose(userChoice,computerChoice) {
  compScore++;
  userScore_span.innerHTML=userScore;
  compScore_span.innerHTML=compScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML= `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}.You lose ...`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function () {document.getElementById(userChoice).classList.remove("red-glow")} ,1000);
}

function draw(userChoice,computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  result_p.innerHTML= `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}.It is a draw`;
  document.getElementById(userChoice).classList.add("gray-glow")
  setTimeout(function () {document.getElementById(userChoice).classList.remove("gray-glow")} ,1000);
}


function game(userChoice) {
  const computerChoice = getComputerchoice();
  switch (userChoice + computerChoice ) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice,computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice,computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice,computerChoice);
      break;


  }

}

function main() {
  rock_div.addEventListener("click",function() {
    game("r");
  });
  paper_div.addEventListener("click",function() {
      game("p");
  });
  scissors_div.addEventListener("click",function() {
     game("s");
  });
}

main();
