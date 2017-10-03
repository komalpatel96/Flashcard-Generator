var ClozeCard = require("./ClozeCard");
var cardData = require("./cloze.json");
var inquirer = require("inquirer");

startGame();

function startGame(){
	var currentCard;
	var cardArray =[];
	var initialScore = 0;
	var initialIndex = 0;

	for (var i = 0; i < cardData.length; i++) {
		currentCard = new ClozeCard(cardData[i].partial, cardData[i].cloze)
		cardArray.push(currentCard);
    console.log(cardData[i].partial);
	}
	//playRound(initialScore, cardArray, initialIndex);

  var count = 0;

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 5) {
    debugger;
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "questions",
        type: "input",
        message: currentCard.partial
      },

    ]).then(function(answer) {
       if (answer === ClozeCard.cloze) {
        console.log("Yes! That is the correct answer");
      }
      else {
        console.log("Sorry! That answer is incorrect");
      } 

      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which prints "all questions asked" to the console
    // when the code has been run five times
  }
  else {
    console.log("All questions asked");
  }
};

// call askquestion to run our code
askQuestion();

}