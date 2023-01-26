import inquirer from "inquirer";
const SystemGeneratedNo = Math.floor(Math.random()*10);
type ans = {
    UserGuess:number;
}
const answer : ans = await inquirer.prompt([{
    type:"number",
    name:"UserGuess",
    message:"Write your Guess b/w 1 to 10 :"
}])
const {UserGuess} = answer;
    console.log(" UserGuess",UserGuess)
    console.log(" systemGeneratedNo",SystemGeneratedNo)
if(UserGuess===SystemGeneratedNo){
    console.log(" Yaa Hu, your guess is right. \n You Wins!")
} else{
    console.log(" Your guess does match with the System Generated Number \n You Lose!")
}