// https://www.npmjs.com/package/readline-sync
const readlineSync = require('readline-sync');
//https://www.npmjs.com/package/chalk
const chalk = require('chalk');

// store the highest scores
let highestScores = [
  {
    name: "Vaibhav",
    score: 5
  },
  {
    name: "Ayush",
    score: 4
  },
  {
    name: "Tushar",
    score: 4
  },
  {
    name: "Yash",
    score: 3
  }
]

// store the questions to be asked and their correct answer
let mangaQuestions = [
  {
    question: "The real name of the tailed beast sealed into Naruto Uzumaki?",
    answer: "Kurama"
  },
  {
    question: "The name of the group of shinobi's who captured the tailed beasts?",
    answer: "Akatsuki"
  },
  {
    question: "The visual prowess of the Uchiha clan is the?",
    answer: "Sharingan"
  },
  {
    question: "Who was the sensei of Kakashi Hatake?",
    answer: "Minato Namikaze"
  },
  {
    question: "The Leader of the famous Team 7?",
    answer: "Kakashi Hatake"
  },
  {
    question: "Strongest abitily available to the users possessing the power of Mangekyo Sharingan?",
    answer: "Susanoo"
  }
]


// welcome user message
function welcomeUser() {

  // wait for user input
  const userName = readlineSync.question("Please Enter Your Name? ");
  console.log(`Hi`, chalk.blueBright.bold(`${userName},`), `Welcome to the Naruto Manga Quiz!`);
  console.log("-----------------");
  console.log(chalk.red(`Note: Each correct answer carries one point`));
  console.log("-----------------");
  console.log(`Let's start the quiz!!\n`);

}


// current score
let score = 0;

// playing game ==> check the answer for each asked question with the correct answer.
function answerQuestion(question, answer) {

  // ask the question and store it's answer
  let userAnswer = readlineSync.question(question + "\n");

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Yay, It's Right! ⚡️");
    score = score + 1;
  }
  else {
    console.log("Oops, It's Wrong! 🐸");
  }


  console.log("current score: ", score);
  console.log("-----------------");
}


// ask questions to the user one by one
function playGame() {

  // iterate over each question
  for (let i = 0; i < mangaQuestions.length; i++) {
    let currentQues = mangaQuestions[i];
    answerQuestion(currentQues.question, currentQues.answer);
  }
}


// show the final score of the user
function showScores() {
  console.log("Your score is: ", score);
  console.log("-----------------");

  console.log("-----------------");

  // show the highScores
  console.log("Leader Board:");
  highestScores.map(eachScore => {

    console.log(eachScore.name, " : ", eachScore.score);
  })


}

// check if the user has beaten the highest score or not
function hasBeatenHighestScore() {

  console.log("-----------------");
  let maxScore = 0;
  highestScores.map(eachScore => {

    if (eachScore.score > maxScore) {
      maxScore = eachScore.score;
    }
  });

  // console.log("maxScore: ", maxScore);

  if (score >= maxScore) {
    console.log("Congratulations! You got the highest score, Believe It! 🍜");
  }

  else {
    console.log("Oh No!, You could not beat the highest score, try again 👊");
  }

  console.log("-----------------");
  console.log("I will update your name in the leader board!");

}

// thank you note 
function thankYou() {
  console.log("-----------------");
  console.log(chalk.greenBright.bold("THANK YOU FOR TAKING THIS QUIZ!"));
  console.log("-----------------");
}





welcomeUser(); // welcome the user
playGame(); // start playing the quiz
showScores(); // show the final score to the user
hasBeatenHighestScore(); // check if the user has beaten or equalled the highest score

thankYou();

