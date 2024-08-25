let message;

message = "stay!"; //variable shouldn't start with digits even _ and $ can be a variable
//and variable shouldn't have hyphens and variable like message and MESSAGE are two different variables
message = "world"; //value of variable will be changed
//the reserved words can't be used as variable
//repeated let usage leads to an syntax error
let hello;
hello = message; //message will be copied in hello

//alert (hello);//shows variable message

//to declre a constant variable ,use const instead of let
const myBirthday = "18.04.2203";
//myBirthday = 4.3.2232;//error ,can't reassign the constant!
let a = 10;
console.log(a);
console.log(9 * a);
let b = 7 * a;
console.log(b);

const MAX = "57";
let actual = MAX - 13;
console.log(actual);

let percentage = actual / MAX;

const string = "The revolution will not be televised";
const badstring = string;
console.log(badstring);

const name = "aman";
const age = "12";
const greeting = `Hello , ${name} your age is ${age}`; //concatenation using '$' sign
console.log(greeting);

const emotion = "jealousy";
const subject = "A";
console.log(subject + " " + emotion); //concatenation using '+' symbol

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
} %.`;
console.log(output); //don't work for + symbol $ will work

const line = `there was a certain man in certain time ago 
he was big and strong and his eyes was glowy `; // can also work using '\n'
console.log(line);

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
