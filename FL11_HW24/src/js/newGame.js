/*var myFunc2 = () => {
  console.log("hello from module 2, you will not see this in builded version ");
};*/

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
    console.log(" this is function from module executed ");
  }
};

module.exports = newGame();
