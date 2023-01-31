import inquirer from "inquirer";

let conversion = {
    "PKR":{
        "USD":0.0037105751391,
        "GBP":0.33278,
        "PKR":1,
    },
    "GBP":{
        "USD":1.2352373290426,
        "GBP":1,
        "PKR":332.78,
    },
    "USD":{
        "USD":1,
        "GBP":0.81,
        "PKR":269.5,
    }
}

interface ans {
    From:"PKR"|"USD"|"GBP",
    to:"PKR"|"USD"|"GBP",
    amount:number,
}
const answer:ans = await inquirer.prompt ([
    {
        type:"list",
        name:"From",
        choices:["PKR","USD","GBP"],
        message:"Select your currency : "
    },
    {
        type:"list",
        name:"to",
        choices:["PKR","USD","GBP"],
        message:"Select your convertion currency : "
    },
    {
        type:"number",
        name:"amount",
        message:"Enter your conversion amount : "
    }
])


const{to,From,amount}=answer;
if(From && to && amount){
    let result = (conversion[From][to] * amount) ;
    console.log(`Your result from ${From} to ${to} is ${result}`);
}else {
    console.log("Invalid inputs")
}