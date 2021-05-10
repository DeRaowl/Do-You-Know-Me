//Include readLineSync and chalk library
var readLineSync = require("readline-sync");
const chalk = require('chalk');

var userName = readLineSync.question("Please enter your name: ", {
  hideEchoBack: true,
  mask: chalk.magenta('\u2665')
})

var score = 0;

console.log(chalk.bgBlue("Welcome " + userName + " to, DO YOU NOW ME?"));

console.log("---------------------")
var questionOne = {
  question: "Do I leave in bengaluru? [y/n] ",
  answer: "y",
}

var questionTwo = {
  question: "Chennai super kings is my favourite IPL team?[y/n] ",
  answer: "n",
}

var questionThree = {
  question: "Rahul dravid is my favourite cricketer? [y/n] ",
  answer: "y",
}

var questionFour = {
  question: "Maldives is my favourite holiday destination? [y/n] ",
  answer: "y",
}

var questionFive = {
  question: "I am pure vegetarian? [y/n] ",
  answer: "n",
}

var aboutMe = [questionOne, questionTwo, questionThree, questionFour, questionFive];

function doYouKnowMe(quNo, question, answer) {
  var userAnswer = readLineSync.keyIn(quNo + ") " + question, { limit: 'yn' })

  if (userAnswer === answer) {
    score++;
    console.log(chalk.green("\nYou are right!!!"));
    console.log(chalk.magenta("Your current score is: " + score + "\n"));
  }
  else {
    score--;
    console.log(chalk.redBright("\nYou are wrong!!!"));
    console.log(chalk.yellowBright("Your current score is: " + score + "\n"));
  }
}

for (var about = 0; about < aboutMe.length; about++) {
  doYouKnowMe(about + 1, aboutMe[about].question, aboutMe[about].answer);
}

console.log("------------------------");
console.log(chalk.black.bgRedBright.bold("Hey, your final score is: " + score + " :) "));