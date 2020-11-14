'use strict';


// 1. feladat
console.log(document.querySelectorAll(".button"));

/* function handleClick() {
    const buttons = document.getElementsByClassName("button");
for (i = 0; i < buttons.length; i += 1);

}
 */

 // 2. feladat

const summation = (a = 0, b = 0) => a + b;
console.log(summation(20));

const subtraction = (a = 0, b = 0) => a - b;
console.log(subtraction(45));

// 3. feladat

const personDatalog = (firstName = 'John', lastName = 'Doe', age = '33') => console.log(`My name is ` + firstName +` ` + lastName + `. I'm ` + age + ` years old.`);
personDatalog();