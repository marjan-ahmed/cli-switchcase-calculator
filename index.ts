#! usr/bin/env noden
import inquirer from "inquirer"; //import this independenci for taking user input
import chalk from "chalk"; //import this independenci for good UI/UX

console.log(chalk.greenBright("Welcome to my Calculator (By Marjan Ahmed)"));
console.log("\n");

const answers = await inquirer.prompt([{
    name: "firstNum",
    type: "number",
    message: chalk.blueBright("Enter your first number: ")
},
{
    name: "operator",
    type: "list",
    choices: ["+", "-", "*", "/"],
    message: chalk.blueBright("Enter any operator: ")
},
{
    name: "secondNum",
    type: "number",
    message: chalk.blueBright("Enter your second number: ")
}
]);

const {firstNum, operator, secondNum} = answers;

let results:number

switch(operator){
    case "+":
        results = firstNum + secondNum;
    break;

    case "-":
        results = firstNum - secondNum;
    break;

    case "*":
        results = firstNum * secondNum;
    break;

    case "/":
    results = firstNum / secondNum;
    break;
    default:
            console.log(chalk.red("Invalid operator"));

}
console.log(`${firstNum} ${operator} ${secondNum} = ${results}`)