#! /usr/bin/env node
//this line is called shabang ,it else the operating system run with node.js

//import the in 'inquirer', which is a interface for Node.js
import inquirer from "inquirer";

//declare a constant ' answer' and assign it to the result of inquirer.prompt function
const answer:{
    sentence: string
} =await inquirer.prompt([
    {
        name: "sentence",
        input: "input",
        message: "Enter your sentence to count the word:",
    }
]);
const word = answer.sentence.trim().split(" ")

//print the array of words to the console
console.log(word);
//print the word count of the sentence to the console
console.log(`your sentence word count is: ${word.length}`);






















