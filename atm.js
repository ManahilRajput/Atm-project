#! usr/bin/env node
import inquirer from "inquirer";
let balance = 1000000;
const pin = 72491;
const atm_input = await inquirer.prompt([
    {
        name: "input1",
        type: "number",
        message: "Enter Your Pin Number : ",
    },
]);
if (atm_input.input1 == pin) {
    console.log("Correct Pin Code");
    const atm = await inquirer.prompt([
        {
            type: "list",
            name: "select",
            choices: ["Withdraw", "Check Balance"],
            message: "What Do You Want To Do? ",
        },
    ]);
    if (atm.select == "Withdraw") {
        const wm = await inquirer.prompt([
            {
                type: "number",
                name: "withdraw",
                message: "now enter amount you want to withdraw :",
            },
        ]);
        const withdraw = wm.withdraw;
        if (wm.withdraw <= balance) {
            console.log("Your Remaining Balance Is : ", balance - withdraw);
        }
        else if (wm.withdraw > balance) {
            console.log("you can not withdraw amount above than 100000! ");
        }
    }
    if (atm.select == "Check Balance") {
        console.log(`Your Current Balance Is ${balance}`);
    }
}
else {
    console.log("Incorrect Pin Code");
    console.log("kindly enter the correct pin code");
}
