let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const reusult_p = document.querySelector(".result > p"); 
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice () {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
if (letter === "r") return "Rock";
if (letter === "p") return "Paper";
return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  reusult_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}You Win!`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  reusult_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses ${convertToWord(computerChoice)}${smallCompWord}You Lost....!`; 
}

function draw (userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallCompWord = "comp".fontsize(3).sub();
  reusult_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}Draw!`; 
}


function game (userChoice, computerChoice)  {
  switch (userChoice + computerChoice) {
    case "rs":
      win(userChoice, computerChoice);
       break;  
        case "pr":
         win(userChoice, computerChoice);
          break;
           case "sp":
            win(userChoice, computerChoice);
             break;
              case "rp":
               lose(userChoice, computerChoice);
                break;
                 case "ps":
                  lose(userChoice, computerChoice);
                   break;
                    case "sr":
                     lose(userChoice, computerChoice);
                      break;
                       case "rr":
                        draw(userChoice, computerChoice);    
                         break; 
                          case "pp":
                           draw(userChoice, computerChoice);    
                            break;  
                             case "ss":
                              draw(userChoice, computerChoice);    
                               break;
  }
}

function main() {
  
  rock_div.addEventListener('click', function() {
  
    game("r", getComputerChoice());
  })

  paper_div.addEventListener('click', function() {
  game("p" , getComputerChoice());
  })

  scissors_div.addEventListener('click', function() {
  game("s", getComputerChoice());
})
}

main();