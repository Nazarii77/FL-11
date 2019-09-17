const newGame = require("./newGame.js");

let round = 0;
let humanWins = 0;
let pcWins = 0;

var compare = (human, machine) => {
  var options = human + " vs. " + machine + " ";
  if (human === machine) {
    return options + "It's a tie!";
  }
  if (human === "Rock") {
    if (machine === "Scissors") {
      // rock wins
      humanWins++;
      return options + "You won!";
    } else {
      // paper wins
      pcWins++;
      return options + "Human lost! Try again.";
    }
  }
  if (human === "Paper") {
    if (machine === "Rock") {
      // paper wins
      humanWins++;
      return options + "You won!";
    } else {
      // scissors wins
      pcWins++;
      return options + "Human lost! Try again.";
    }
  }
  if (human === "Scissors") {
    if (machine === "Rock") {
      // rock wins
      pcWins++;
      return options + "Human lost! Try again.";
    } else {
      // scissors wins
      humanWins++;
      return options + "You won!";
    }
  }
};

choice = e => {
  round++;
  if (round < 4) {
    var str = e.textContent;
    str = str.replace(/\s/g, "");
    var HumanChoice = str;
    var ArtificialIntelligence = Math.random();
    var result;
    if (ArtificialIntelligence < 0.34) {
      ArtificialIntelligence = "Rock";
    } else if (ArtificialIntelligence <= 0.67) {
      ArtificialIntelligence = "Paper";
    } else {
      ArtificialIntelligence = "Scissors";
    }

    var element = document.getElementById("results");
    if (element === null) {
      var main = document.getElementById("main");
      let divaddresult = document.createElement("div");
      divaddresult.setAttribute("id", "results");
      main.appendChild(divaddresult);
      element = divaddresult;
    }

    if (round === 3) {
      var text =
        `Round ${round}    ` + compare(HumanChoice, ArtificialIntelligence);
      if (humanWins === pcWins) {
        textFinal = " FINAL RESULT: No one won, it is a tie.";
      } else if (humanWins > pcWins) {
        textFinal = " FINAL RESULT:  You WON!!!";
      } else {
        textFinal = " FINAL RESULT: COMPUTER WON!!!";
      }

      var node = document.createTextNode(text);
      var para = document.createElement("p");
      para.appendChild(node);
      element.appendChild(para);

      var nodefinal = document.createTextNode(textFinal);
      var parafinal = document.createElement("p");
      parafinal.appendChild(nodefinal);
      element.appendChild(parafinal);
    } else {
      var node = document.createTextNode(
        `Round ${round}    ` + compare(HumanChoice, ArtificialIntelligence)
      );
      var para = document.createElement("p");
      para.appendChild(node);
      element.appendChild(para);
    }
  }

  /*  newGame = () => {
    round = 0;
    humanWins = 0;
    pcWins = 0;
    var element = document.getElementById("results");
    if (element !== null) {
      element.remove();
    }
  };*/
};
