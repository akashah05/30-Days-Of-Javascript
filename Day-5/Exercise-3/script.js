const countriesArr = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];


/* 1- The following is an array of 10 students ages: */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

/* 2- Sort the array and find the min and max age */
const sortedArr = ages.sort();
console.log(`Sorted Array: ${sortedArr}`);

const minAge = sortedArr[0];

let lastIndex = sortedArr.length - 1;
const maxAge = sortedArr[lastIndex];

console.log(`Min Age: ${minAge}`);
console.log(`Max Age: ${maxAge}`);

/* 3- Find the median age(one middle item or two middle items divided by two) */
const middleIndex = Math.floor(sortedArr.length / 2);
const medianAge = sortedArr.length % 2 === 0
  ? (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2
  : sortedArr[middleIndex];
console.log(`Median Age: ${medianAge}`);

/* 4-Find the average age(all items divided by number of items) */
const averageAge = Math.round((sortedArr[0] + sortedArr[1] + sortedArr[2] + sortedArr[3] + sortedArr[4] + sortedArr[5] + sortedArr[6] + sortedArr[7] + sortedArr[8] + sortedArr[9]) / sortedArr.length);
console.log(`Average Age: ${averageAge}`);

/* 5-Find the range of the ages(max minus min) */
const rangeOfAges = maxAge - minAge;
console.log(`Range of the Ages: ${rangeOfAges}`);

/* 6- Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array */
const diffMinAvg = Math.abs(minAge - averageAge);
const diffMaxAvg = Math.abs(maxAge - averageAge);
console.log(`|Min - Avg|: ${diffMinAvg}, |Max - Avg|: ${diffMaxAvg}`);

const firstTenCountries = countriesArr.slice(0, 10);
console.log(`First 10 Countries: ${firstTenCountries.join(", ")}`);


/* 7- Find the middle country(ies) in the countries array */
const middleCountry = Math.floor(countriesArr.length / 2);
console.log(`Middle Country: ${countriesArr[middleCountry]}`);

/* 8- Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half. */
const dividedArr = [[], []];
const halfCountries = countriesArr.slice(0, middleCountry);
console.log(halfCountries)
const lastPart = countriesArr.slice(middleCountry);
console.log(lastPart);

dividedArr[0].unshift(halfCountries);
dividedArr[1].unshift(lastPart);
console.log(`Divided Array: First: ${dividedArr[0]} \nSecond: ${dividedArr[1]}`);

