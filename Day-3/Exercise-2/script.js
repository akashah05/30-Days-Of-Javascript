/* 1- Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
Enter base: 20
Enter height: 10
The area of the triangle is 100 */
let base = prompt("Enter the base: ");
let height = prompt("Enter the height: ");
let areaOfTriangle = 0.5 * base * height;
alert(`The Area of Triangle is: ${areaOfTriangle}`);

/* 1- Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12 */
let sideA = parseInt(prompt("Enter the side A: "));
let sideB = parseInt(prompt("Enter the side B")); 
let sideC = parseInt(prompt("Enter the side C"));
let perimeterOfTri = sideA + sideB + sideC;
alert(`The Perimeter of Triangle is: ${perimeterOfTri}`);

/* 1- Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)) */
let length = parseFloat(prompt("Enter the length: "));
let width = parseFloat(prompt("Enter the width: "));
let area = length * width;
let perimeter = 2 * (length + width); 
alert(`The Area of Rectangle is ${area} and the Perimeter is ${perimeter}`);

/* 2- Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14. */
// let radius = parseInt(prompt("Enter the Radius: "));
let pi = 3.14;
let radius = parseFloat(prompt("Enter the radius: "));
let areaOfCircle = pi * radius * radius;
let circumfOfCircle = 2 * pi * radius;
alert(`Area of Circle: ${areaOfCircle} \nCircumference of Circle: ${circumfOfCircle}`);

/* 3- Calculate the slope, x-intercept and y-intercept of y = 2x -2 */
let slope = 2; 
let yIntercept = -2;
let xIntercept = -yIntercept / slope; 
console.log(`Slope (m): ${slope}`);
console.log(`Y-Intercept (b): ${yIntercept}`);
console.log(`X-Intercept: (${xIntercept}, 0)`);

/* 4- Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10) */
let x1 = 2, y1 = 2, x2 = 6, y2 = 10;
let slopeBetweenPoints = (y2 - y1) / (x2 - x1);
console.log(`Slope between points (2, 2) and (6, 10): ${slopeBetweenPoints}`);

/* 5- Compare the slope of above two questions. */
const slopeOfLine = 2; // From Question 3
const comparisonResult = slopeOfLine === slopeBetweenPoints ? "The slopes are equal." : "The slopes are not equal.";
console.log(comparisonResult);

/* 6- Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0. */
let xValues = [-4, -3, -2, 0]; 
xValues.forEach(x => {
    let y = x ** 2 + 6 * x + 9;
    console.log(`For x = ${x}, y = ${y}`);
});

let xWhereYIsZero = -3;
console.log(`y = 0 when x = ${xWhereYIsZero}`);

/* 7- Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120 */
let hours = parseInt(prompt("Enter Hours: "));
let ratePerHour = parseInt(prompt("Enter Rate Per Hour"));
let weeklyEarning = hours * ratePerHour;
alert(`Your Weekly Earning is: ${weeklyEarning}`);

/* 8- If the length of your name is greater than 7 say, your name is long else say your name is short. */
let fullName = prompt("Enter your Name: ");
fullName.length > 7
    ? console.log(`Your name is Long`)
    : console.log(`Your name is Short`);

/* 9- Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh */
let firstName = prompt("Enter your First Name: ");
let lastName = prompt("Enter your Last Name: ");
firstName.length > lastName.length
    ? alert(`Your first name, ${firstName} is longer than your family name, ${lastName}.`)
    : alert(`Your family name, ${lastName} is longer than your first name, ${firstName}`);


/* 9- Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you. */
let myAge = 60;
let yourAge = 30;
myAge > yourAge
    ? alert(`I am ${myAge - yourAge} years older than you.`)
    : alert(`You are ${yourAge - myAge} years older than me.`);

/* 1- Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years. */
let birthYear = 2005;
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
if (age >= 18) {
    console.log(`You are ${age}. You are old enough to drive.`);
} else {
    console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);
}

/* 2- Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years 

Enter number of years you live: 100
You lived 3153600000 seconds. */
let yearsLived = parseInt(prompt("Enter number of years you live: "));
let daysLived = yearsLived * 365;
let hoursLived = daysLived * 24;
let minutesLived = hoursLived * 60;
let secondsLived = minutesLived * 60;
alert(`You lived ${secondsLived} seconds.`)

/* 3- Create a human readable time format using the Date time object
YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm */ 
console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`); 
console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`); 
console.log(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`); 
