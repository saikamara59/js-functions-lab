console.log("my name is Sai")


/*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult(age) {
    if (age >= 18) {
        return 'Adult'
    } else {
        return 'Minor'
    }
}



console.log('Exercise 2 Result:', isAdult(21));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(char) {
    return 'aeiouAEIOU'.includes(char);
     
}



console.log('Exercise 3 Result:', isCharAVowel("f"));

console.log(isCharAVowel('a'));  // true
console.log(isCharAVowel('E'));  // true
console.log(isCharAVowel('y'));  // false
console.log(isCharAVowel('f'));  // false

/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(SaiKamara,gmail) {
    return `${SaiKamara}@${gmail}`;
}


console.log('Exercise 4 Result:', generateEmail("SaiKamara", "gmail.com"));


/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below: */

function greetUser (Sai ,timeOfDay) {
    if (timeOfDay === "morning"){
        return(`Good morning,${Sai}!`)
     } else if (timeOfDay === "afternoon"){
        return (`Good afternoon,${Sai}!`)
     } else if (timeOfDay === "evening"){
        return (`Good evening,${Sai}!`)
     }
}


console.log('Exercise 5 Result:', greetUser("Sai", "morning"));


/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree (a,b,c) {
    if (a >= b && a>= c) {
        return a;
    } else if (b >= a && b>= c) {
        return b;
      }  else if (c >= a && c>= b) {
        return c;
        }
    }  




console.log('Exercise 6 Result:', maxOfThree(5, 15, 6));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
function calculateTip (billAmount,tipPercentage) {
    return (billAmount * tipPercentage) / 100
    }


console.log('Exercise 7 Result:', calculateTip(60, 30));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below: 
*/
function convertTemperature (temperature,scale) {
if (scale === 'C') {
    return (temperature * 9/5) + 32;
}
else if (scale === 'F') {
    return (temperature - 32) * 5/9;
}
}

console.log('Exercise 8 Result:', convertTemperature(32, "C"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

function basicCalculator (num1,num2,operation) {
    if (operation === 'add') {
        let sum = num1 + num2
        return sum 
    } else if (operation === 'subtract') {
        return num1 - num2
     } else if (operation === 'multiply') {
        return num1 * num2
     }
     else if (operation === 'divide')
    return num1 / num2
}




console.log('Exercise 9 Result:', basicCalculator(10, 5, "multiply"));


