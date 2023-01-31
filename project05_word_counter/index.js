import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
let result = answers.Sentence.trim().split(" ");
console.log(`Your sentence has ${result.length} words in this sentence.`);
