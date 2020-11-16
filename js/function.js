'use strict';


// 1. feladat

const handleClick = (element = document.querySelectorAll('.button')) => {
    for (let i = 0; i < element.length; i += 1) {
        element[i].addEventListener('click', () =>
            console.log(element[i].innerText));
        }
    }
handleClick();

/* function handleClick(i) {
    element[i].addEventListener('click', function () {
        console.log(element[i].innerText);
    })
}

let element = document.querySelectorAll('.button'); */

/* for (let i = 0; i < element.length; i += 1) {
    handleClick(i);
} */





// 2. feladat

const summation = (a = 0, b = 0) => a + b;
console.log(summation(20));

const subtraction = (a = 0, b = 0) => a - b;
console.log(subtraction(45));

// 3. feladat

const myData = { firstName: 'Éva', lastName: 'Thüringer', age: 44 };

const personDatalog = ({ firstName = 'John', lastName = 'Doe', age = 33 } = {}) => console.log(`My name is ` + firstName + ` ` + lastName + `. I'm ` + age + ` years old.`);
personDatalog(myData);