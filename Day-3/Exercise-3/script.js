/* 1- Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05 */
let currentDate = new Date();

let year = currentDate.getFullYear();
let month = String(currentDate.getMonth() + 1).padStart(2, '0');
let day = String(currentDate.getDate()).padStart(2, '0');
let hour = String(currentDate.getHours()).padStart(2, '0');
let minute = String(currentDate.getMinutes()).padStart(2, '0');

let formattedDateTime = `${year}-${month}-${day} ${hour}:${minute}`;
console.log(formattedDateTime);