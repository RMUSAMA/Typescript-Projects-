import inquirer from "inquirer";

console.log(`
                                     
                        
8888888888   888888888       888888888888888888   
        88      88           88      88      88  
        88      88           88      88      88  
8888888888      88           88      88      88  
88      88      88           88      88      88  
8888888888      88           88      88      88                           

`)


interface ans {
  userId: string;
  pin: number;
  accountType: string;
  transactionType: string;
  FastcashAmount: number;
  WithdrawalAmount: number;
}
const answer: ans = await inquirer.prompt([
  {
    type: "string",
    name: "userId",
    message: "Kindly enter your username : ",
  },
  {
    type: "password",
    name: "pin",
    message: "Kindly enter your pin number : ",
    when(answer) {
      if (typeof answer.userId === "string" ) {
        return answer.userId
      } else {
        console.log("You entered an invalid username");
      }
    },
  },
  {
    type: "list",
    name: "accountType",
    message: "Select your account type",
    choices: ["Saving", "Current", "Default"],
  },
  {
    type: "list",
    name: "transactionType",
    message: "Select your transaction ",
    choices: ["Fastcash", "Withdrawal"],
    when(answer) {
      return answer.accountType;
    },
  },
  {
    type: "list",
    name: "FastcashAmount",
    message: "Select your amount",
    choices: [500, 1000, 5000, 10000],
    when(answer) {
      return answer.transactionType == "Fastcash";
    },
  },
  {
    type: "number",
    name: "WithdrawalAmount",
    message: "Enter your amount",
    when(answer) {
      return answer.transactionType == "Withdrawal";
    },
  },
]);

const {
  userId,
  pin,
  accountType,
  transactionType,
  FastcashAmount,
  WithdrawalAmount,
} = answer;
if (userId && pin) {
  const balance = 100000;
  // console.log(`Previous balance : Rs ${balance}`);
  if(WithdrawalAmount%5 == 0){
    if (balance >= WithdrawalAmount) {
        const remaining = balance - WithdrawalAmount;
        console.log(`Your remaining balance is Rs ${remaining} \nThank You!`);
      }else if (balance >= FastcashAmount) {
        const remaining = balance - FastcashAmount;
        console.log(`Your remaining balance is Rs ${remaining} \nThank You!`);
      } else {
        console.log(`Insufficient balance in your account`);
      }
  }else{
    console.log(`You entered an Invalid amount`);
  }
  
}
