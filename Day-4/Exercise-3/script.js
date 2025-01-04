/* 1- Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days. 

  Enter a month: FEbruary
  February has 28 days. */
let month = prompt("Enter month: ");
month = month.toLowerCase().trim();

if (
  month == "january" ||
  month == "march" ||
  month == "may" ||
  month == "july" ||
  month == "august" ||
  month == "october" ||
  month == "december"
) {
    alert(`${month} has 31 Days.`)
} else if (month == "April" || month == "june" || month == "September" || month == "November ") {
    alert(`${month} has 30 Days.`);
} else if (month == "february") {
    alert(`${month} has 28 Days.`);
} else {
    alert("Input Error, Try Again.");
};

/* 2- Write a program which tells the number of days in a month, now consider leap year. */
let month$ = prompt("Enter month: ");
month = month.toLowerCase().trim();

if (
  month$ == "january" ||
  month$ == "march" ||
  month$ == "may" ||
  month$ == "july" ||
  month$ == "august" ||
  month$ == "october" ||
  month$ == "december"
) {
    alert(`${month$} has 31 Days.`)
} else if (month$ == "April" || month$ == "june" || month$ == "September" || month$ == "November ") {
    alert(`${month$} has 30 Days.`);
} else if (month$ == "february") {
    alert(`${month$} has 29 Days.`);
} else {
    alert("Input Error, Try Again.");
};
