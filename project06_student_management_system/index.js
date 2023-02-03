import inquirer from "inquirer";
import { studentInputs } from "./src/studentinputs.js";
import { courseInput } from "./src/courseinput.js";
import { instructorInput } from "./src/instructorinput.js";
let multipleStudentData = [];
let multipleInstructorData = [];
let multipleCourseInput = [];
async function ask() {
    const Person = await inquirer.prompt([{
            type: "list",
            name: "chose",
            message: "WHICH OF THE BELOW YOU WANT TO ADD :",
            choices: ["Student", "Instructor", "Course", "Department"]
        }]);
    if (Person.chose === "Student") {
        await studentInputs();
    }
    if (Person.chose === "Instructor") {
        await instructorInput();
    }
    if (Person.chose === "Course") {
        await courseInput();
    }
    // if(multipleStudentData.length!=0){
    //   console.table(multipleStudentData);
    // }
    // if(multipleCourseInput.length!==0){
    //   console.table(multipleCourseInput);
    // }
    // if(multipleInstructorData.length!==0){
    //   console.table(multipleInstructorData)
    // }
}
await ask();
export { ask };
export { multipleStudentData };
export { multipleCourseInput };
export { multipleInstructorData };
