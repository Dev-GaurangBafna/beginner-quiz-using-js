const prompt = require ("prompt-sync")();

console.log ("Welcome to the quiz!");

let correctAnwers = 0;
const totalQuestions = 3;

//Ques1
const answer1 = prompt ("What is the brain of the computer? ");
const correct_answer1 = "CPU";

if (answer1.toLocaleUpperCase() === correct_answer1) {
    console.log ("Your answer is correct!");
    correctAnwers++;
}
else{
    console.log ("Your answer is wrong!");
}

//Ques2
const answer2 = prompt ("What is better a 3090to or 4060? ");
const correct_answer2 = "3090ti";

if (answer2.toLocaleLowerCase() === correct_answer2) {
    console.log ("Your answer is correct!");
    correctAnwers++;
}
else{
    console.log ("Your answer is wrong!");
}

//Ques3
const answer3 = prompt ("What is the recommended amount of RAM in 2023? ");
const correct_answer3 = "16GB";

if (answer3.toLocaleUpperCase() === correct_answer3) {
    console.log ("Your answer is correct!");
    correctAnwers++;
}
else{
    console.log ("Your answer is wrong!");
}

let percent = Math.round((correctAnwers / totalQuestions) * 100);

console.log ("You got " + correctAnwers + " questions correct!")
console.log ("You scored " + percent.toString() + "%")


