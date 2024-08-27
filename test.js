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

let text = "Apple , Banana, Kiwi";
let part = text.slice(7, 13); //slice extracts a part of a string and returns the extracted part in a new string.

let str = "Apple, Banana, Kiwi";
let parts = str.substring(7, 13); //substring is similar to slice but start and end values less than 0 are treated as 0 in substring().

let text1 = "Hello World!";
let text2 = text1.toUpperCase(); //returns uppercase (toLowerCase will return lowercase letters)

let text01 = "Hello";
let text02 = "World";
let text03 = text01.concat(" ", text02); //will join two string and return

let text001 = "               HEllo World             ";
let text002 = text001.trim(); //remove white space from both side

//trimStart() only remove white space from the start of string
//the strings that are returned here are all new strings they are not modified string because all string cannot be changed ,only be modified.

const e = "a";
const r = "b";
if (e < r) {
  // true
  console.log(`${e} is less than ${r}`);
} else if (e > r) {
  console.log(`${e} is greater than ${r}`);
} else {
  console.log(`${e} and ${r} are equal.`); //all comparison operators,including "==="and "==" compare strings case -sensitivity.to fix this
}
function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase(); //convert both them uppercase or lowercase just like this
} //when there is more language then use "toLocalLowerCase("tr")"
