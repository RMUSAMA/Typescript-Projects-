import chalk from "chalk";
import { Console } from "console";
import inquirer from "inquirer";

async function welcome(){
    console.log(chalk.whiteBright(`            --------------------------`))
    console.log(chalk.yellowBright(`            OBJECT ORIENTED PROGRAMING`))
    console.log(`            --------------------------`)
    console.log(chalk.whiteBright(`OOP:    
     `))
    }
class Person{
    constructor(personality = "Mystery"){
       this.personality = personality;
    }
   public personality:string ;
}

interface ans{question_1:number}
async function question1(){
const answer : ans = await inquirer.prompt([{
    type:"input",
    name:"question_1",
    message:"Type 1 if you want to talk to others and type 2 if you would rather keep to yourself \n",
    // validate: function(input) {
    //     if ( input == false) {
    //       return "Input cannot be a string";
    //     }
    //     return true;}
    }])
    if(answer.question_1==1){
        const pr = new Person("Extrovert");
        console.table(pr);
   }else if(answer.question_1==2){
        const pr = new Person("Introvert");
        console.table(pr);
   }else{
       const pr = new Person();
       console.log(`You are still a ${pr.personality}`);
   }
   
}


class Student extends Person {

}

await welcome();
await question1();
