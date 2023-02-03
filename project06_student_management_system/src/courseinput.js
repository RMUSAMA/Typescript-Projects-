import inquirer from "inquirer";
import chalk from "chalk";
import { ask } from "../index.js";
import { CourseClass } from "./classes.js";
import { multipleCourseInput } from "../index.js";
async function courseInput() {
    let loop = true;
    while (loop) {
        const course = await inquirer.prompt([{
                type: "number",
                name: "ID",
                message: "Enter the ID of the student you want to assign : "
            },
            {
                type: "string",
                name: "courseName",
                message: "Which course do you want to assign : "
            },
            {
                type: "number",
                name: "students",
                message: "No of Students you want to assign that course:",
            },
            {
                type: "string",
                name: "instructor",
                message: "Which instructor will teach these courses:",
            },
            {
                type: "confirm",
                name: "addmore",
                message: "Are you you want to add more ? ",
                default: false,
            }
        ]);
        const { ID, courseName, students, instructor } = course;
        const dataInput = new CourseClass(ID, courseName, students, instructor);
        console.log(chalk.yellowBright("Course Added Successfully"));
        multipleCourseInput.push(dataInput);
        if (course.addmore === false) {
            loop = false;
            // console.table(multipleCourseInput);
        }
        else {
            loop = false;
            await ask();
        }
    }
}
export { courseInput };
export { multipleCourseInput };
