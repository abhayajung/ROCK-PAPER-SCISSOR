function calculate(playerChoice) {
  const options = ["ROCK", "PAPER", "SCISSOR"];

  const computerChoice = Math.floor(Math.random() * 3);
  const computerMove = options[computerChoice];
  const playerMove = options[playerChoice];

  const imageMap = {
    ROCK: "punch.png",
    PAPER: "hello.png",
    SCISSOR: "scissor.png",
  };

  let result = "";
  if (playerMove == computerMove) {
    result = " YOU GOT A TIE !!";
  } else if (
    (playerChoice == 0 && computerChoice == 2) ||
    (playerChoice == 1 && computerChoice == 0) ||
    (playerChoice == 2 && computerChoice == 1)
  ) {
    result = "YOU WON!";
  } else {
    result = "YOU LOST!";
  }
  document.getElementById(
    "result"
  ).innerHTML = `You chose :<img src="${imageMap[playerMove]}" alt = "${playerMove}" height="20"><br>
  Computer chose: <img src="${imageMap[computerMove]}" alt = "${computerMove}" height="20"><br>
  <strong>${result}</strong>`;
}
