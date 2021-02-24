console.log("I'm ready!");

// Iteration 1: names and input

let hacker1 = 'Ben';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Jerry';
console.log(`The navigator's name is ${hacker2}`);

// Interation 2: Conditionals

if (hacker1.length > hacker2.length) 
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)


if (hacker2.length > hacker1.length) 
console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)


if (hacker1.length === hacker2.length) 
console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)

// Iteration 3: loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals 

let spacedUpperHacker1 = ""
for (let i = 0; i < hacker1.length; i++) {
  spacedUpperHacker1 += hacker1[i] + " ";
}

console.log (spacedUpperHacker1.toLocaleUpperCase())

//3.2 Print all the characters of the navigator's name, in reverse order.

let reversedHacker2 = ""
for (let i = hacker2.length -1; i >= 0; i--) {
  reversedHacker2 += hacker2[i];
}

console.log (`${reversedHacker2}`)

/* 3.3 Depending on the lexicographic order of the strings, print: 
- The driver's name goes first. 
- Yo, the navigator goes first definitely. 
- What?! You both have the same name? */

if (hacker1 > hacker2)
console.log (`The driver's name goes first.`)

if (hacker2 > hacker1)
console.log (`Yo, the navigator goes first definitely.`)

if (hacker1 === hacker2)
console.log (`What?! You both have the same name?`)

// Bonus 1

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam dapibus velit vel convallis. Vivamus a est ac nisi tincidunt tempor ac nec lectus. Maecenas imperdiet justo in ante fermentum, consectetur tristique metus blandit. Proin aliquam scelerisque eros, porttitor cursus est gravida ut. Cras vestibulum vitae nibh sit amet dapibus. Nullam feugiat in leo a faucibus. Proin ut auctor urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sed ipsum non enim imperdiet suscipit. Donec sapien arcu, pellentesque a mauris non, sodales fringilla justo. Vestibulum vel metus leo."


let loremCounter = 0
 
 for (let i = 0; i <= lorem.length; i++) {
   if (lorem[i] === " ") {
     loremCounter += 1
   }  
 }

 loremCounter += 1

 console.log (`The number of words is ${loremCounter}`) 


// BONUS 1 Make your program count the number of times the Latin word et appears.


// This code doesn't work but I can't think of anything better. I don't know how to interate over multiple characters not just one

let etCounter = 0

for (let i = 0; i <= lorem.length; i++) {
   if (lorem.charAt[i] === " et") {
     etCounter += 1
   }  
 }


 console.log (`The number of et is ${etCounter}`) 

// BONUS 2 Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.


// this code isn't working but it's my best try

const phraseToCheck = "Radar"

const newPhrase = phraseToCheck.toLocaleLowerCase // trying to "normalize" the string but I don't know how to remove spaces and special characters

 for(let i = 0; i < (newPhrase.length/2); i++) {
  if(newPhrase[i] !== newPhrase[newPhrase.length-i-1]){
    console.log(`false`);
  }
  else {console.log(`true`);}
 }
 
