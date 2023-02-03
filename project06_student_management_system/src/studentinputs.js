import inquirer from "inquirer";
import { ask } from "../index.js";
import { studentClass } from "../src/classes.js";
import chalk from "chalk";
import { multipleCourseInput, multipleStudentData, multipleInstructorData } from "../index.js";
async function studentInputs() {
    let loop = true;
    while (loop) {
        const student = await inquirer.prompt([{
                type: "string",
                name: "name",
                message: "Name of a student :",
            },
            {
                type: "number",
                name: "age",
                message: "Age of a student :"
            },
            {
                type: "number",
                name: "ID",
                message: "ID of a student :"
            },
            {
                type: "string",
                name: "Course",
                message: "Course of a student :"
            },
            {
                type: "confirm",
                name: "addmore",
                message: "Add more students :",
                default: false,
            }
        ]);
        const { name, age, ID, Course } = student;
        const dataInput = new studentClass(name, age, ID, [Course]);
        multipleStudentData.push(dataInput);
        console.log(chalk.yellowBright("Student Added Successfully"));
        if (student.addmore === false) {
            loop = false;
            if (multipleInstructorData.length !== 0) {
                console.log(chalk.red("<<<<<<<<<... Instructor Details...>>>>>>>>>>"));
                console.table(multipleInstructorData);
            }
            if (multipleCourseInput.length !== 0) {
                console.log(chalk.whiteBright("<<<<<<<<<... Course Details...>>>>>>>>>>"));
                console.table(multipleCourseInput);
            }
            if (multipleStudentData.length !== 0) {
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
export { studentInputs };
// export {student}
