#! /usr/bin/env node
import inquirer from "inquirer";

const currency : any = {
    USD : 1,
    INR : 74.57,
    EUR : 0.91,
    DHIRAM : 3.67,
    PKR : 278.25
};

let user_answer = await inquirer.prompt(
    [
    {
name: "from",
message: "enter the currency you want to exchange",
type: "list",
choices:['USD','INR','EUR','DHIRAM','PKR']

},
{
name : "to",
message : "enter the currency in which you want to exchange",
type : "list",
choices : ['USD','INR','EUR','DHIRAM','PKR']
},
{
name : "amount",
message : "enter your amount",
type : "number"

    
}
    ]
);
let userfromcurrency = user_answer.from
let usertocurrency = user_answer.to
let amounttoconvert = currency[userfromcurrency]
let amountinwhichconverted = currency[usertocurrency]
let amount = user_answer.amount
let baseAmount = amount / amounttoconvert
let amountconverted = baseAmount * amountinwhichconverted
console.log(amountconverted)
