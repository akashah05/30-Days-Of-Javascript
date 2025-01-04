/* 1- Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive. */
let age = parseInt(prompt("Enter your age: "));
if (age >= 18) {
    alert(`You are old enough to drive.`);
} else if (age < 18 && age >= 0) {
    alert(`You need to wait for ${18 - age} years to drive.`);
} else {
    alert("Error Input,Try Again!");
}

/* 1- Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input. 
Enter your age: 30
You are 5 years older than me. */
let myAge = 20;
let yourAge = parseInt(prompt("Enter your Age: "));
if (myAge > yourAge && yourAge >= 0) {
    alert(`I am ${myAge - yourAge} years older than You.`);
} else if (myAge < yourAge && yourAge >= 0) {
    alert(`You are ${yourAge - myAge} years older than me.`);
} else {
    alert("Input Error, Try Again!");
}

/* 1- If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

using if else
ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3 */
let a = 4;
let b = 3;
    a > b 
        ? alert(`${a} is greater than ${b}`)
        : alert(`${b} is greater than ${a}`);
        
if (a > b) {
    alert(`${a} is greater than ${b}`);
} else {
    alert(`${b} is greater than ${a}`);
}
  
/* 2- Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number. */
let number = parseInt(prompt("Enter a Number: "));
    number % 2 == 0
        ? alert(`${number} is a Even Number.`)
        : alert(`${number} is a Odd Number.`);