#! /usr/bin/env node

import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

const sleep = ()=>{
    return new Promise((res) => {
        setTimeout(res,1000);
    })
}
async function welcome(){
    let rainbow = chalkAnimation.pulse("Lets start calculation");
    await sleep();
    rainbow.stop();
}

await welcome();
console.log(`
 _____________________
|  _________________  |
| | CALCULATOR      | |
| | By USAMA     0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
`)                                                                                                                                 



const answers: {
    operator:string,
    firstNumber: number,
    secondNumber: number,
}
 = await inquirer.prompt([
{
        type: "list",
        name:"operator",
        message:"Which operation do you want to perform",
        choices:["Addition","Subtraction","Multiplication","Division"],
},
{
    type: "number",
    name:"firstNumber",
    message:"Enter your first number : ",
},
{
    type: "number",
    name:"secondNumber",
    message:"Enter your second number : ",
}
])
const {operator, firstNumber, secondNumber} = answers;
console.log(operator);
// console.log(firstNumber)
// console.log(secondNumber)

if(operator && firstNumber && secondNumber){
    let result : number = 0;
    if(operator==="Addition"){
        result = firstNumber + secondNumber
    } else  if(operator==="Subtraction"){
        result = firstNumber - secondNumber
    }  else  if(operator==="Multiplication"){
        result = firstNumber * secondNumber
    }  else  if(operator==="Division"){
        result = firstNumber / secondNumber
    } 

    console.log("The result is : ",result)
} else{
    console.log("Kindly enter a valid number.")
}

