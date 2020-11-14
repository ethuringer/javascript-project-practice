'use strict';


// 1. feladat

const buttons = document.querySelectorAll(".button").length;

for (let i = 0; i < buttons; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", function() {
        console.log(document.querySelectorAll(".button")[i].innerText);
    });
}



// 2. feladat

const summation = (a = 0, b = 0) => a + b;
console.log(summation(20));

const subtraction = (a = 0, b = 0) => a - b;
console.log(subtraction(45));

// 3. feladat

const myData = { firstName: 'Éva', lastName: 'Thüringer', age: 44 };

const personDatalog = ({ firstName = 'John', lastName = 'Doe', age = 33 } = {}) => console.log(`My name is ` + firstName + ` ` + lastName + `. I'm ` + age + ` years old.`);
personDatalog(myData);