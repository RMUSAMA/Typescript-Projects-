import inquirer from "inquirer";
import chalk from "chalk";

async function welcome(){
console.log(chalk.whiteBright(`            ---------------------------`))
console.log(chalk.yellowBright(`            WELCOME TO THE QUIZ SESSION`))
console.log(`            ---------------------------`)
console.log(chalk.whiteBright(`Quiz:
 `))
}



let result = 0;
async function question1() {
    const answers = await inquirer.prompt({
      name: 'question_1',
      type: 'list',
      message: 'JavaScript was created in 10 days then released on\n',
      choices: [
        'May 23rd, 1995',
        'Nov 24th, 1995',
        'Dec 4th, 1995',
        'Dec 17, 1996',
      ],
    });
  
    if(answers.question_1 === 'Dec 4th, 1995'){
        result+=1;
    }
  }
  
  async function question2() {
    const answers = await inquirer.prompt({
      name: 'question_2',
      type: 'list',
      message: 'What is x? var x = 1_1 + "1" + Number(1)\n',
      choices: ['4', '"4"', '"1111"', '69420'],
    });
     if(answers.question_2 === '"1111"'){
        result+=1;
     }
  }
  
  async function question3() {
    const answers = await inquirer.prompt({
      name: 'question_3',
      type: 'list',
      message: `What is the first element in the array? ['🐏', '🦙', '🐍'].length = 0\n`,
      choices: ['0', '🐏', '🐍', 'undefined'],
    });
  
     if(answers.question_3 === 'undefined'){
        result+=1;
     }
  }
  
  async function question4() {
    const answers = await inquirer.prompt({
      name: 'question_4',
      type: 'list',
      message: 'Which of the following is NOT a primitive type?\n',
      choices: [
        'boolean',
        'number',
        'null',
        'object', // Correct
      ],
    });
     if(answers.question_4 === 'object'){
        result+=1;
     }
  }
  
  async function question5() {
    const answers = await inquirer.prompt({
      name: 'question_5',
      type: 'list',
      message:
        'JS is a high-level single-threaded, garbage-collected,\n' +
        'interpreted(or just-in-time compiled), prototype-based,\n' +
        'multi-paradigm, dynamic language with a ____ event loop\n',
      choices: ['multi-threaded', 'non-blocking', 'synchronous', 'promise-based'],
    });
      if(answers.question_5 === 'non-blocking'){
        result+=1;
    }
    console.log(chalk.yellow(`\n You have scored ${result} out of 5 \n BEST OF LUCK!!`))
  }

  await welcome();
  await question1();
  await question2();
  await question3();
  await question4();
  await question5();
