/* 1- Declare an empty array; */
const arr = [];
console.log(`Empty Array: ${arr}`);

/* 2- Declare an array with more than 5 number of elements */
const numsArr = [1, 2, 3, 4, 5];

/* 3- Find the length of your array */
console.log(`Array Length: ${numsArr.length}`);

/* 4- Get the first item, the middle item and the last item of the array */
console.log(`FirstItem: ${numsArr[0]}`)

const middleItemArr = Math.floor(numsArr.length / 2);
console.log(`Middle Item: ${numsArr[middleItemArr]}`)

const lastItemArr = numsArr.length - 1;
console.log(`LastItem: ${numsArr[lastItemArr]}`);

/* 5- Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.The array size should be greater than 5 */
const mixedDataTypes = [
    "Akashah",
    20,
    true,
    undefined,
    NaN,
    {Skills: ["Html", "Css"]}
];
console.log(`Length of Array: ${mixedDataTypes.length}`);

/* 6- Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon */
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

/* 7- Print the array using console.log() */
console.log(itCompanies);

/* 8- Print the number of companies in the array */
console.log(`Number of Companies: ${itCompanies.length}`);

/* 9- Print the first company, middle and last company */
console.log(`First Company: ${itCompanies[0]}`)

let middleCompany = Math.floor(itCompanies.length / 2);
console.log(`Middle Company: ${itCompanies[middleCompany]}`);

let lastCompany = itCompanies.length - 1;
console.log(`Last Company: ${itCompanies[lastCompany]}`);

/* 10- Print out each company */
let toStr = itCompanies.toString();

/* 11- Change each company name to uppercase one by one and print them out */
console.log(`Upper Case: ${toStr.toUpperCase()}`);

/* 12- Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies. */
let sentence = itCompanies.join(', ').concat(" are big IT companies.");
console.log(sentence);

/* 13- Check if a certain company exists in the itCompanies array.If it exist return the company else return a company is not found */
let companyName = "Google";
if (itCompanies.indexOf(companyName) === -1) {
    console.log(`${companyName}, is not Found in Company Array.`);
} else {
    console.log(`${companyName}, is Found in Company Array.`);
}

/* 14- Filter out companies which have more than one 'o' without the filter method */
const filterCompanies = [];
if ((itCompanies[0].match(/o/gi) || []).length <= 1) filterCompanies.push(itCompanies[0]);
if ((itCompanies[1].match(/o/gi) || []).length <= 1) filterCompanies.push(itCompanies[1]);
if ((itCompanies[2].match(/o/gi) || []).length <= 1) filterCompanies.push(itCompanies[2]);
if ((itCompanies[3].match(/o/gi) || []).length <= 1) filterCompanies.push(itCompanies[3]);
if ((itCompanies[4].match(/o/gi) || []).length <= 1) filterCompanies.push(itCompanies[4]);
if ((itCompanies[5].match(/o/gi) || []).length <= 1) filterCompanies.push(itCompanies[5]);
if ((itCompanies[6].match(/o/gi) || []).length <= 1) filterCompanies.push(itCompanies[6]);
console.log(`Filtered Out: ${filterCompanies}`);

/* 15- Sort the array using sort() method */
console.log(`Sorted Companies: ${itCompanies.sort()}`);

/* 16- Reverse the array using reverse() method */
console.log(`Reversed Companies: ${itCompanies.reverse()}`);

/* 17- Slice out the first 3 companies from the array */
console.log(`Sliced First 3: ${itCompanies.slice(0, 3)}`);

/* 18- Slice out the last 3 companies from the array */
console.log(`Sliced Last 3: `);
console.log(itCompanies)

/* 19- Slice out the middle IT company or companies from the array */
console.log(`Middle Company Slice: ${itCompanies.slice(middleCompany, middleCompany + 1)}`);

/* 20- Remove the first IT company from the array */
const removeFirstCompany = itCompanies.shift();
console.log(`Remove First Company: ${itCompanies} \n${removeFirstCompany} has been Removed.`);

/* 21- Remove the middle IT company or companies from the array */
const removeMiddleCompany = itCompanies.splice(middleCompany, 1);
console.log(`Remove Middle Company: ${itCompanies} \n${removeMiddleCompany} has been Removed.`);

/* 22- Remove the last IT company from the array */
const removeLastCompany = itCompanies.pop();
console.log(`Remove Last Company: ${itCompanies} \n${removeLastCompany} has been Removed.`);

/* 23- Remove all IT companies */
const removeAllCompanies = itCompanies.splice(0, itCompanies.length);
console.log(`Remove All Companies: ${itCompanies} \n${removeAllCompanies} has been Removed.`)