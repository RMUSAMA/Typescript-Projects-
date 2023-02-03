import inquirer from "inquirer";
import { InstructorClass, studentClass } from "./src/classes.js";
import { studentInputs } from "./src/studentinputs.js"
import { courseInput } from "./src/courseinput.js";
import { instructorInput } from "./src/instructorinput.js";
import { CourseClass } from "./src/classes.js";


let multipleStudentData: studentClass[] = [];
let multipleInstructorData: InstructorClass[]= [];
let multipleCourseInput: CourseClass[] = [];

async function ask(){
const Person  = await inquirer.prompt([{
    type:"list",
    name:"chose",
    message:"WHICH OF THE BELOW YOU WANT TO ADD :",
    choices:["Student","Instructor","Course","Department"]
}])

if(Person.chose==="Student"){ 
    await studentInputs();
  }
  if(Person.chose==="Instructor"){   
    await instructorInput();
}
  if(Person.chose==="Course"){   
    await courseInput();
}


}






await ask();
export{ask};
export{multipleStudentData};
export{multipleCourseInput};
export{multipleInstructorData};