/* 1- Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types. */
let firstName = "Aka";
let lastName = "Shah";
let country = "Pakistan";
let city = "Gilgit";
let age = 20;
let isMarried = false;
let year = 2025;
console.log(
    typeof firstName,
    typeof lastName,
    typeof country,
    typeof city,
    typeof age,
    typeof isMarried,
    typeof year
);

/* 2- Check if type of '10' is equal to 10 */
console.log(typeof '10' === typeof 10); //Not Equal
let stringConvert = parseInt('10');
console.log(typeof stringConvert === typeof 10);

/* 3- Check if parseInt('9.8') is equal to 10 */
console.log(parseInt('9.8') === 10); //Not Equal
let floatConvert = Math.ceil(parseFloat('9.8'));
console.log(floatConvert === 10);

/* 4- Boolean value is either true or false. */
console.log(2 > 1);
console.log(2 < 2); // Yes 

/* 5- Write three JavaScript statement which provide truthy value. */
console.log(2 * 2 > 2 - 5);
console.log(2 - 1 == 1);
console.log(2 * 2 === 4);

/* 6- Write three JavaScript statement which provide falsy value. */
console.log(5 - 1 === 4.5);
console.log(2 > 2);
console.log(2 != 1 + 1);

/* 7- Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log() */

console.log("First:", 4 > 3); // True
console.log("Second:", 4 >= 3); // True
console.log("Third:", 4 < 3); // False
console.log("Fourth:", 4 <= 3); // False
console.log("Fifth:", 4 == 3); // False
console.log("Sixth:", 4 != 4); // False
console.log("Seventh:", 4 !== 4); // False
console.log("Eighth:", 4 != '4'); // False
console.log("Ninth:", 4 == '4'); // True
console.log("Tenth:", 4 === '4'); // False

/* 19- Find the length of python and jargon and make a falsy comparison statement. */
let wordOne = "jargon";
let wordTwo = "python";
console.log(wordOne.length !== wordTwo.length);

/* 20- Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log() */
console.log("First:", 4 > 3 && 10 < 12); // True
console.log("Second:", 4 > 3 && 10 > 12); // False
console.log("Third:", 4 > 3 || 10 < 12); // True
console.log("Fourth:", 4 > 3 || 10 > 12); // True
console.log("Fifth:", !(4 > 3)); // False
console.log("Sixth:", !(4 < 3)); // True
console.log("Seventh:", !(false)); // True
console.log("Eight:", !(4 > 3 && 10 < 12)); // False
console.log("Ninth:", !(4 > 3 && 10 > 12)); // True
console.log("Tenth:", !(4 === '4')); // True

/* 31- There is no 'on' in both dragon and python */
if ("python".includes("on") && "dragon".includes("on")) {
    console.log("Both Have the word 'on'.");
} else if ("python".includes("on") || "dragon".includes("on")) {
    console.log("Only one word have 'on' included.");
} else {
    console.log("Yes There is no 'on' On both Words.")
};

/* 32- Use the Date object to do the following activities */
let date = new Date();

/* 33- What is the year today? */
console.log(date.getFullYear());

/* 34- What is the month today as a number? */
console.log(date.getMonth() + 1);

/* 35- What is the date today? */
console.log(date.getDate())

/* 36- What is the day today as a number? */
console.log(date.getDay());

/* 37- What is the hours now? */
console.log(date.getHours() - 12);

/* 38- What is the minutes now? */
console.log(date.getMinutes());

/* 39- Find out the numbers of seconds elapsed from January 1, 1970 to now. */
console.log(Math.floor(Date.now() / 1000));

let customDate = new Date('January 1, 1970');  
let currentDate = new Date(); 
let elapsedMilliseconds = currentDate - customDate; 
let elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
console.log(elapsedSeconds);