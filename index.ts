#! /usr/bin/env node
import inquirer from "inquirer"
const randomNumber = Math.floor(Math.random()* 6 + 1 );

const answers = await inquirer.prompt([
    {
    name:"userGuessedNumber",
    message:"Please guess a number between 1-6:",
    type:"number",
 }
])
if(randomNumber === answers.userGuessedNumber)
{
    console.log("You Guessed right number")
}
else{
    console.log("You Guessed wrong number")
}