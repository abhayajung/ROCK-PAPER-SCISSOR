function calculate(playerChoice) {
  const options = ["ROCK", "PAPER", "SCISSORS"];

  const computerChoice = Math.floor(Math.random() * 3);
  const computerMove = options[computerChoice];
  const playerMove = options[playerChoice];

  let result = "";
  if (playerChoice == computerChoice) {
    document.write(" got a tie!!");
  } else if (
    (playerChoice == 0 && computerChoice == 2) ||
    (playerChoice == 1 && computerChoice == 0) ||
    (playerChoice == 2 && computerChoice == 1)
  ) {
    result = "you won!";
  } else {
    result = "YOU LOST!";
  }

  document.getElementById("result").innerHTML = `You chose : ${playerMove} <br>
  Computer chose: ${computerMove}<br>
  <strong>${result}</strong>`;
}
