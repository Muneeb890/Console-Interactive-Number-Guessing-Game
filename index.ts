#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

//to generate a secret number
const secretNumber:number = Math.floor(Math.random()*2)+1
console.log(chalk.bold.underline("I've Picked A Number"))
//console.log(secretNumber)

//user input
let userInp = await inquirer.prompt({
    type:"list",
    name:"num",
    message:"Please select the number: ",
    choices:["1","2"]
})
//converting user input into number
let num1:number = parseInt(userInp.num)

//switch case
switch(true){
    case num1 === secretNumber:
        console.log(chalk.bold.green("You Won"))
        break;
        default:
            console.log(chalk.bold.red("Better Luck Next Time"))
}