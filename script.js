const user = document.getElementById("user");
const computer = document.getElementById("computer");
const message = document.querySelector(".message");
const message2 = document.querySelector(".message2");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const reset = document.getElementById("reset");
let userScore = 0;
let compScore = 0;

function compChoice() {
  const compArray = ["Taş", "Kağıt", "Makas"];
  const randomChoice = Math.floor(Math.random() * 3);
  return compArray[randomChoice];
}

function userChoice(choice) {
  const compChoices = compChoice();
  if (choice === compChoices) {
    message.textContent = `${choice} - ${compChoices}`;
    message2.textContent = "Berabere!";
  } else if (choice === "Taş" && compChoices === "Makas") {
    message.textContent = `${choice} - ${compChoices}`;
    message2.textContent = "Kullanıcı kazandı!";
    userScore++;
  } else if (choice === "Kağıt" && compChoices === "Taş") {
    message.textContent = `${choice} - ${compChoices}`;
    message2.textContent = "Kullanıcı kazandı!";
    userScore++;
  } else if (choice === "Makas" && compChoices === "Kağıt") {
    message.textContent = `${choice} - ${compChoices}`;
    message2.textContent = "Kullanıcı kazandı!";
    userScore++;
  } else {
    message.textContent = `${choice} - ${compChoices}`;
    message2.textContent = "Bilgisayar kazandı!";
    compScore++;
  }
  user.textContent = userScore;
  computer.textContent = compScore;
}

reset.addEventListener("click", function () {
  user.textContent = 0;
  computer.textContent = 0;
  userScore = 0;
  compScore = 0;
  message.textContent = "Lütfen birini seçiniz. ";
  message2.textContent = " ";
});
rock.addEventListener("click", function () {
  userChoice("Taş");
});
paper.addEventListener("click", function () {
  userChoice("Kağıt");
});
scissors.addEventListener("click", function () {
  userChoice("Makas");
});
