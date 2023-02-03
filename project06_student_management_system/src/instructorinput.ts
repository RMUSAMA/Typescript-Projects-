import inquirer from "inquirer";
import { ask, multipleCourseInput, multipleStudentData } from "../index.js";
import chalk from "chalk";
import { InstructorClass } from "./classes.js";
import { multipleInstructorData } from "../index.js";


async function instructorInput() {
    let loop = true;
    while (loop) {
        const instructor = await inquirer.prompt([{
                type: "string",
                name: "name",
                message: "Name of the instructor :",
            },
            {
                type: "number",
                name: "age",
                message: "Age of the instructor :"
            },
            {
                type: "number",
                name: "salary",
                message: "Salary of the instructor :"
            },
            {
                type: "string",
                name: "Course",
                message: "Course of the instructor :"
            },
            {
                type: "confirm",
                name: "addmore",
                message: "Do you want to add more students ?",
                default: false
            },
            {
                type: "confirm",
                name: "addmore",
                message: "Add more :",
                default: false,
            }]);
        const { name, age, salary, Course } = instructor;
        const dataInput = new InstructorClass(name, age, salary, Course);
        multipleInstructorData.push(dataInput);
        console.log(chalk.yellowBright("Instructor Added Successfully"));
        if (instructor.addmore === false) {
            loop = false;
            if(multipleInstructorData.length!==0){
                 console.log(chalk.red("<<<<<<<<<... Instructor Details...>>>>>>>>>>"));  
                console.table(multipleInstructorData);
            }
            if(multipleCourseInput.length!==0){
                console.log(chalk.whiteBright("<<<<<<<<<... Course Details...>>>>>>>>>>"));  
                console.table(multipleCourseInput);
            }
            if(multipleStudentData.length!==0){
                console.log(chalk.yellow("<<<<<<<<<... Student Details...>>>>>>>>>>"));  
                console.table(multipleStudentData);
            }
        }
        else {
            loop = false;
            await ask();
        }
    }
}
export { instructorInput };
