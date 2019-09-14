var myFunc2 = () => {
  console.log("hello2");
};

myFunc2();
//this will be  converted  to es5 too

//this will be included in app.js as a commonjs module
newGame = () => {
  round = 0;
  humanWins = 0;
  pcWins = 0;
  var element = document.getElementById("results");
  if (element !== null) {
    element.remove();
  }
};

module.exports = newGame();
