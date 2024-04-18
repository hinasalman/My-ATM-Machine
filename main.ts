#! /usr/bin/env node

import inquirer from "inquirer";

//initialized user blace and pin code
let myBalance = 5000
let myPin = 1234;

//print welcome message
console.log("Welcome to code with HinaSalman= ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        type: "number",
        name: "pin",
        message: "Enter your pin code",  
     },
])
{
    if (pinAnswer.pin === myPin) {
    }
 {
        console.log("pin is correct, login is successfully");

       console.log("current account balance is ${myblance}");

        let oprotionAns = await inquirer.prompt([
            {
        name: "opration",
        type: "list",
        message: "select an opration: ",
        choices: ["withdrawl Amount","check balance"]
            
            }
        ])

        if(oprotionAns.opration=== "withdrawl Amount"){
            let amount = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw",
                },
            ])

            if(amount.amount >myBalance){
                console.log("insufficient balance")
            }
            else{
                myBalance = myBalance - amount.amount
                console.log("withdrawl amount is ${amount.amount}")
                console.log("your remaining balance is ${myBalance}")
            }

        }
        else if(oprotionAns.opration === "check balance"){
            console.log("your account balance is ${myBalance}")
        }
     }
 {
           console.log("pin is incorrect, try again")
     }
          
}
