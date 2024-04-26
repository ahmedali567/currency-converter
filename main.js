// IMPORTING INQUIRER
import inquirer from "inquirer";
const currency = {
    USD: 1,
    INR: 74.57,
    EUR: 0.91,
    DHIRAM: 3.67,
    PKR: 278.25
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "enter the currency you want to exchange",
        type: "list",
        choices: ['USD', 'INR', 'EUR', 'DHIRAM', 'PKR']
    },
    {
        name: "to",
        message: "enter the currency in which you want to exchange",
        type: "list",
        choices: ['USD', 'INR', 'EUR', 'DHIRAM', 'PKR']
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number"
    }
]);
let amounttoconvert = currency[user_answer.from];
let amountinwhichconverted = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / amounttoconvert;
let amountconverted = baseAmount * amountinwhichconverted;
console.log(amountconverted);
