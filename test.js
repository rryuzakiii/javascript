let message;

message ='stay!';//variable shouldn't start with digits even _ and $ can be a variable
//and variable shouldn't have hypens and variable like message and MESSAGE are two different variables
message ='world';//value of variable will be changed
//the reserved words can't be used as variable
//repeated let usage leads to an syntax error
let hello;
hello = message;//message will be copied in hello

//alert (hello);//shows variable message

//to declre a constant variable ,use const instead of let
const myBirthday = '18.04.2203';
//myBirthday = 4.3.2232;//error ,can't reassign the constant!
let a = 10
console.log(a)
console.log( 9 * a )
let b = 7 * a
console.log(b)

const MAX = '57';
let actual = MAX - 13;
console.log(actual)

let percentage = actual /MAX