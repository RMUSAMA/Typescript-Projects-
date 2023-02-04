import inquirer from "inquirer";
import chalk from "chalk";
async function welcome() {
    console.log(chalk.whiteBright(`            --------------------------------`));
    console.log(chalk.yellowBright(`            WELCOME TO THE ADVENTURE GAME`));
    console.log(`            --------------------------------`);
    console.log(chalk.whiteBright(`Quiz:
     `));
}
//Game variabes
const enemies = ["SKELETON", "ZOMBIE", "WORRIERS", "ASSASIN"];
const maxEnemyHealth = 75;
const enemyAttackDamage = 25;
//Players Variables
let health = 100;
const attackDamage = 50;
let numHealthPotion = 3;
const healthPotionHealAmount = 30;
const healthPotionDropChance = 50; //percent
//Game information
console.log(chalk.whiteBright(`            ----------------------`));
console.log(chalk.yellowBright(`            WELCOME TO THE DUNGEON`));
console.log(`            ----------------------`);
console.log(chalk.whiteBright(`
 GAME:
 `));
//enemy and your Hp information
let enemyhealth = Math.floor(Math.random() * 75);
const enemy = enemies[(Math.floor(Math.random() * enemies.length))];
console.log(chalk.whiteBright(`            ${enemy} has Appeared !                 `));
console.log(`  
  YOUR HP           : ${health} `);
console.log(`  ${enemy} HP       : ${enemyhealth}
 `);
async function ask() {
    let loop = true;
    while (loop) {
        const answer = await inquirer.prompt([
            {
                type: "list",
                name: "choose",
                message: "What would you like to do? ",
                choices: ["ATTACK", "DRINK HEALTH POTION", "RUN!"]
            }
        ]);
        if (health < 1) {
            console.log(` You limp out of the dungeon, weak for battlefield`);
            break;
        }
        else if (answer.choose == "ATTACK") {
            const damageDealt = Math.floor(Math.random() * attackDamage);
            const damageTaken = Math.floor(Math.random() * enemyAttackDamage);
            enemyhealth -= damageDealt;
            health -= damageTaken;
            console.log(`\n> You strike the ${enemy} for ${damageDealt} damage.`);
            console.log(`\n> You recieved ${damageTaken} in retaliation.`);
            console.log(`  
  YOUR HP               : ${health} `);
            console.log(`  ${enemy} HP           : ${enemyhealth} `);
            console.log(`-------------------------------------`);
            console.log(`    # ${enemy} was defeated ! # `);
            console.log(`    # You have ${health} HP left #`);
            console.log(`-------------------------------------`);
            break;
        }
        else if (answer.choose == "DRINK HEALTH POTION") {
            if (numHealthPotion > 0) {
                health += healthPotionHealAmount;
                numHealthPotion--;
                console.log(` You drink a health potion, healing yourself for ${healthPotionHealAmount}\n You now have ${health} HP \n You have ${numHealthPotion} health potions left`);
            }
            else {
                console.log(`   You have no health potions left! Defeat enemies for a chance `);
                repeat();
            }
        }
        else if (answer.choose == "RUN!") {
            console.log(` You run away from the ${enemy} !!`);
            break;
        }
    }
}
async function repeat() {
    let loop = true;
    while (loop) {
        const again = await inquirer.prompt([{
                type: "list",
                name: "perform",
                message: "Do you like to do now ?",
                choices: ["Continue Fighting", "Exit Dungeon"]
            }]);
        if (again.perform === "Continue Fighting") {
            await ask();
        }
        else if (again.perform === "Exit Dungeon") {
            console.log(`THANKYOU FOR PLAYING THIS GAME!`);
            break;
        }
    }
}
await ask();
await repeat();
// dom() * 100);
// const enemyHP =  Math.floor(Math.random() * 100);
// const selector:number = );
// console.log(`      your HP: ${yourHP}`)
// console.log(`      ${enemies[selector]} HP : ${yourHP}`)
// const yourHP = Math.floor(Math.ran
