import inquirer from "inquirer";
let todos:string[]=[];
let loop = true;
while(loop){
    type ans = {TODO:string,addmore:boolean}
    const answer :ans = await inquirer.prompt([
        {
            type:"input",
            name:"TODO",
            message:"What do you want to add in todo list?"
        },
        {
            type:"confirm",
            name:"addmore",
            message:"What do you want to add more in todo list?",
            default:false
        }
    ])
    const {TODO,addmore}=answer;
    loop = addmore 
    if(TODO){
        todos.push(TODO);
    }else {
        console.log("Kindly add valid input");
    }
}

console.log("My Todo list is as follows :")
if(todos.length > 0 ){
    todos.forEach(TODO => {
        console.log(TODO);
    });
}else{
    console.log("No todos found");
}