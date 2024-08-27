function favoriteAnimal(animal) {
  return animal + " is my favorite animal!";
}

console.log(favoriteAnimal("Goat"));

const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string

const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string

const myNumber = Math.random();
// the random() function generates a random number between
// 0 and up to but not including 1, and returns that number

function draw() {
  CSSMatrixComponent.clearReact(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginpath();
    ctx.fillstyle = "rgb(255 0 0/ 50%)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
