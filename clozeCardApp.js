var ClozeCard = require("./ClozeCard");
var cardData = require("./cloze.json");
var inquirer = require("inquirer");


startGame();

function startGame(){
  var currentCard;
  var cardArray =[];
  var initialScore = 0;
  var initialIndex = 0;


  // console.log(partial)
  // console.log(cardData[0].fullText);
  // console.log(cardData[1]);

  for (var i = 0; i < cardData.length; i++) {
    currentCard = new ClozeCard(cardData[i].partial, cardData[i].cloze)
    cardArray.push(currentCard);
  }

var partial = cardData[initialIndex].fullText
partial = partial.replace(cardData[initialIndex].cloze, "...")
  
  //console.log(currentCard);

var count = 0;

var askQuestion = function() {
  if (count < cardData.length ) {
    debugger;

    inquirer.prompt([
      {
        name: "questions",
        type: "input",
        message: partial
      },


    ]).then(function(answer){
      if (answer == cardData[initialIndex].cloze){
        console.log("That is correct!")
      }
      if (answer !== cardData[initialIndex].cloze){
        console.log("Sorry that is incorrect. Correct answer is: "+ cardData[initialIndex].cloze)
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