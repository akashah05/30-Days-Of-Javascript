/* 1-Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file */


/* 2-First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13 */
let text = 
"I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let words = text.replace(/[.,]/g, '').split(' ');

console.log("Words:", words);
console.log(`Words Length: ${words.length}`);

/* 3- In the following shopping cart add, remove, edit items */

shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'] 

/* 4- add 'Meat' in the beginning of your shopping cart if it has not been already added */
if (shoppingCart.includes("Meat") === false) {
     shoppingCart.unshift("Meat");
};
console.log("Meat Added:",shoppingCart);

/* 5-add Sugar at the end of you shopping cart if it has not been already added */
if (shoppingCart.includes("Sugar") === false) {
     shoppingCart.push("Sugar");
};
console.log("Sugar Added:",shoppingCart);

/* 6-remove 'Honey' if you are allergic to honey */
let allergic = true;
if (allergic === true) {
     shoppingCart.splice(shoppingCart.indexOf("Honey"), 1);
};
console.log("Yes, Allergic:", shoppingCart);

/* 7-modify Tea to 'Green Tea' */
let teaIndex = shoppingCart.indexOf("Tea");
shoppingCart[teaIndex] = "Green Tea";
console.log("Green Added to Tea:", shoppingCart);

/* 8-In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list. */
if (countries.includes("Ethiopia") === true) {
     console.log("ETHIOPIA");
} else {
     countries.push("Ethiopia");
     console.log("Ethiopia Added:",countries );
};

/* 9-In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array. */
if (webTechs.includes("Sass") === true) {
     console.log("Sass is a CSS preprocessor");
} else {
     webTechs.push("Sass");
     console.log("Sass Added:",webTechs);
};

/* 10-Concatenate the following two variables and store it in a fullStack variable. */

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd);
console.log("Full Stack:", fullStack);

/* console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] */