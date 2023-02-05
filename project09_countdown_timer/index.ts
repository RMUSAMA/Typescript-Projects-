import chalk from "chalk"
import inquirer from "inquirer"


async function welcome(){
  console.log(chalk.whiteBright(`            -----------------`))
  console.log(chalk.yellowBright(`            COUNT DOWN TIMER `))
  console.log(`            -----------------`)
  console.log(chalk.whiteBright(`STOP-WATCH:
   `))
  }
  
type ans = {question1:number}  
async function question(){
  const answers : ans = await inquirer.prompt([{
    type:"input",
    name:"question1",
    message:"For how much time you want to run your stop watch \n Enter your time in seconds",
  }])
  let countdown = answers.question1;
  const timer = setInterval(() => {
    countdown--;
      process.stdout.clearLine(0);
      process.stdout.cursorTo(0);
      process.stdout.write( " Seconds Remaining :  " + countdown );
    if (countdown <= 0) {
      console.log("\n Time's up!");
      clearInterval(timer);
    }
  }, 1000);
  
}



// let endDate = new Date("2023-02-05");
// const timer = setInterval(() => {
//   let currentDate = new Date();
//   let difference = endDate.getTime() - currentDate.getTime();
//   let remainingSeconds = Math.floor(difference / 1000);
//   if (remainingSeconds <= 0) {
//     console.clear();
//     console.log("Time's up!");
//     clearInterval(timer);
//   } else {
//     process.stdout.clearLine(0);
//     process.stdout.cursorTo(0);
//     process.stdout.write( " Seconds Remaining" + remainingSeconds );
//   }
// }, 1000);



await welcome();
await question();