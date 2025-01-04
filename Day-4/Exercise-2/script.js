/* 1-Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */
let marks = parseInt(prompt("Enter your Marks: "));
let grade;

if (marks >= 80 && marks <= 100) {
    grade = 'A';
} else if (marks >= 70 && marks <= 89) {
    grade = 'B';
} else if (marks >= 60 && marks <= 69) {
    grade = 'C';
} else if (marks >= 50 && marks <= 59) {
    grade = 'D';
} else if (marks >= 0 && marks <= 49) {
    grade = 'F';
} else {
    alert("Wrong Input.");
};
if (grade) alert(`Grade: ${grade}`);

/* 2-Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer */
let month = prompt("Enter the month name: ");
month = month.trim().toLowerCase();
if (month == "september" ||
    month == "october" ||
    month == "november") {
    alert("The Season is Autumn.");
} else if (month == "december" ||
    month == "january" ||
    month == "february") {
    alert("The Season is Winter");
} else if (month == "march" ||
    month == "april" ||
    month == "may") {
    alert("The Season is Spring");
} else if (month == "june" ||
    month == "july" ||
    month == "august") {
    alert("The season is Summer");
} else {
    alert("Wrong Input, Try Again.");
}


/* 3- Check if a day is weekend day or a working day. Your script will take day as an input.
  What is the day  today? Saturday
  Saturday is a weekend.

  What is the day today? saturDaY
  Saturday is a weekend. 

    What is the day today? Friday
  Friday is a working day.

  What is the day today? FrIDAy
  Friday is a working day. */
let day = prompt("Enter the Day Today: ").trim().toLowerCase();
if (["saturday", "sunday"].includes(day)) {
    alert(`${day.charAt(0).toUpperCase() + day.slice(1)} is a Weekend.`);
} else if (["monday", "tuesday", "wednesday", "thursday", "friday"].includes(day)) {
    alert(`${day.charAt(0).toUpperCase() + day.slice(1)} is a Working Day.`);
} else {
    alert("Input Error, Try Again.");
}
