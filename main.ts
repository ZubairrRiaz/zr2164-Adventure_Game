#! /usr/bin/env node

import inquirer from 'inquirer'

import chalk from 'chalk'

const enemies:string[] = ['Thanos','Ultron','Megatron','Terminator','Joker'];

let enemyHealth: number = 100;

let myHealth: number = 100;

let randomNumber = Math.round(Math.random() * 4)

const enemyName = enemies[randomNumber];

let startGame = await inquirer.prompt({
    name: 'name2',
    type: 'list',
    message: chalk.bold.bgBlack.bgMagenta(`\n\t\t\t\tWELCOME TO THE ZUBAIR'S ADVENTURE GAME !!!\n`),
    choices: ['\n\t\t\t\t\t\tStart Game','\n\t\t\t\t\t\tExit Game']

})
if(startGame.name2 === '\n\t\t\t\t\t\tStart Game'){ //Start Game If Else

let answer = await inquirer.prompt([{
    name: 'name1',
    type: 'input',
    message: `\n\t\t\t\t\tEnter your Player name!`
}])

if(answer.name1 === ''){ //Checking The Player is Not Empty start
    console.log('\t\t\t\t\tEnter Something for Your PLayer Name!');  

}//Checking The Player is Not Empty end

else{
console.log(chalk.bold.yellowBright('\n\t\t\t----------------------Enemy is Appearing !------------------------------'));

setTimeout(() => {
    console.log(chalk.bold.yellowBright(`\n\t\t\t======================( ${answer.name1} VS ${enemyName} )===========================`));
}, 3000);

setTimeout(() => console.log(chalk.bgRed.italic(`\n*${enemyName}
\nHaHaHa, I am a strongest Man in the World. Nobody can defeat Me.`)),6000);

setTimeout(() => console.log(chalk.bgBlue.italic(`\n(You)${answer.name1}
\n"I Can" You Are Coward, You Only Kill Innocent and Weak People. If You Are Strong then Defeat Me.`)),9000);

setTimeout(() => console.log(chalk.bgRed.italic(`\n*${enemyName}
\nHaHaHa, I Will Easily Defeat You. You Are Nothing InFront Of Me!`)),12000);

setTimeout(() => console.log(chalk.bgBlue.italic(`\n(You)${answer.name1}
\nLet's See Who Beats Whom.`)),15000);

setTimeout(() => {console.log(chalk.bold.italic(`\n\t\t\t=========================Battle Starting........==========================
                            \n\t\t\t\t\t\t\tBe Ready!`))},18000);

 setTimeout(async () => {

    console.log(chalk.redBright.bold(`\n\t\t\t\t\t${answer.name1} Health(${myHealth}%)   ${enemyName} Health(${enemyHealth}%)`));

    let pills: number = 2;
    let condition: boolean = true;
    let gameMoves:string[] = ['\n\t\t\t\t\t\t\tAttack','\n\t\t\t\t\t\t\tUse Pill','\n\t\t\t\t\t\t\tRun From Enemy'];

    console.log(chalk.blue.bold(`\n\t\t\t\t\tYour Pills: ${pills} (increase 20% Health)`));

while(condition){
    let startGame = await inquirer.prompt({
        name: 's1',
        type: 'list',
        choices: gameMoves,
        message: `\nUse Your Move`,
    });
    let damage1 = Math.round(Math.random()* 20 + 10)
    let damage2 = Math.round(Math.random()* 20 + 10)

    if(enemyHealth <= 0){
        enemyHealth = 0;
      }else if(myHealth <= 0){
        myHealth <= 0;
       }
    if(startGame.s1 == '\n\t\t\t\t\t\t\tAttack'){ // Attack Statement start

        enemyHealth -= damage1;

        if(enemyHealth <= 0){
            enemyHealth = 0;
        }

        console.log(chalk.red.bold(`\n\t\t\t\t\tYou Gave ${damage1}% Damage to ${enemyName}`));

        console.log(chalk.red.bold(`\n\t\t\t\t\t${enemyName} Health(${enemyHealth}%)`));
        
        myHealth -= damage2;

        if(myHealth <= 0){
            myHealth = 0;
        }
        console.log(chalk.gray.bold(`\n\n\n\t\t\t\t\tYou Received ${damage2}% Damage From ${enemyName}`));

        console.log(chalk.gray.bold(`\n\t\t\t\t\t${answer.name1} Health(${myHealth}%)       Remaining Pills: ${pills}`));

    } // Attack Statement end
    else if(startGame.s1 == '\n\t\t\t\t\t\t\tUse Pill'){ // Use pill statement start
        
        if(myHealth <= 80){
          myHealth += 20;
          pills--;
          console.log(chalk.yellow.bold(`\n\t\t\t\t\t You Used 1 Pill,`));
          
          console.log(chalk.gray.bold(`\t\t\t\t\t${answer.name1} Health(${myHealth}%)       Remaining Pills: ${pills}`));

          if(pills === 0){
            gameMoves.splice(1,1);

        }
        }else if(myHealth >= 80){
            console.log(chalk.yellow.bold(`\n\t\t\t\tYour Health is ${myHealth}, Pill Only Use if Health Less Then 80%.`));
           
        }

    }// Use pill statement end
    else if(startGame.s1 == '\n\t\t\t\t\t\t\tRun From Enemy'){
        console.log(`\nYou Run From Enemy! You Loose The Battle!\n`);
        condition = false;
        
    }else{
        console.log('Wrong Move');
        
    };
    if(myHealth <= 0){
        myHealth = 0;
        
        console.log(chalk.yellow(`\n\t\t\t\t\tYou Were Defeated, ${enemyName} Win The Battle!`));
        condition = false;
        setTimeout(() => {console.log(chalk.bold.italic.bgCyanBright(`\n\t\t\t\t\tThanks For Playing! I Hope You Like it.`))
        },3000)
        
    }else if(enemyHealth <= 0){
        enemyHealth = 0;
        
        console.log(chalk.yellow(`\n\t\t\t\tCongratulations! ${answer.name1} You Defeat ${enemyName}, You Win The Battle!`));
        condition = false;
        setTimeout(() => {console.log(chalk.bold.italic.bgYellow(`\n\t\t\t\t\tThanks For Playing! I Hope You Like it.`));
        },3000)
    }
    

}//condition end
    
},21000)

}

}else {
    console.log('You Exit the Game!');   

};
