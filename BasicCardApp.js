var BasicCard = require("./BasicCard");
var cardData = require("./basic.json");
var inquirer = require("inquirer");

startGame();

function startGame(){
	var currentCard;
	var cardArray =[];
	var initialScore = 0;
	var initialIndex = 0;

	// console.log(cardData[0]);
	// console.log(cardData[1]);

	for (var i = 0; i < cardData.length; i++) {
		currentCard = new BasicCard(cardData[i].front, cardData[i].back)
		cardArray.push(currentCard);
	}
	
	//console.log(currentCard);

var count = 0;

var askQuestion = function() {
  if (count < cardData.length ) {
    debugger;

    inquirer.prompt([
      {
        name: "questions",
        type: "input",
        message: cardData[initialIndex].front
      },


    ]).then(function(answer){
    	if (answer == cardData[initialIndex].back){
    		console.log("That is correct!")
    	}
    	if (answer !== cardData[initialIndex].back){
    		console.log("Sorry that is incorrect. Correct answer is: "+ cardData[initialIndex].back )
    	}

      count++;
      initialIndex++;

      askQuestion();
    });
  }
  else {
    console.log("All questions have been asked");
  }
};
// call askquestion to run the code again
askQuestion();

}