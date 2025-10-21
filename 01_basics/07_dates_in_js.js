// Dates

let myDate = new Date(); // Current date and time
console.log("Current Date and Time:", myDate); // 2025-10-19T17:43:38.082Z

console.log(myDate.toString()); // Full date string // "Sun Oct 19 2025 20:13:38 GMT+0230 (India Standard Time)"
console.log(myDate.toDateString()); // Date only // "Sun Oct 19 2025"
console.log(myDate.toTimeString());
// Time only // "20:13:38 GMT+0230 (India Standard Time)"
console.log(myDate.toISOString()); // ISO format // "2025-10-19T17:43:38.082Z"
console.log(myDate.toLocaleString()); // Localized date and time // "10/19/2025, 8:43:38 PM"

console.log(typeof myDate); // "object"

let mycreatedDate = new Date(2023,0,23); // 23 Jan 2023 (Month is 0-indexed)
console.log("My Created Date:", mycreatedDate.toDateString()); // "Mon Jan 23 2023"

let mycreatedDate2 = new Date(2023,0,23,5,3,22); // 23 Jan 2023 05:03:22
console.log(mycreatedDate2.toLocaleString()); // "1/23/2023, 5:03:22 AM"

let myTimestampDate = Date.now(); // Current timestamp in milliseconds
console.log("Current Timestamp:", myTimestampDate); // e.g., 1697735018082

console.log(mycreatedDate.getTime()); // Timestamp of mycreatedDate
console.log(Math.floor(Date.now()/1000)); // Current timestamp in seconds

let newDate = new Date();
console.log("Year:", newDate.getFullYear()); // Current year
console.log("Month:", newDate.getMonth()); // Current month (0-11)
console.log("Date:", newDate.getDate()); // Current date (1-31)
console.log("Hours:", newDate.getHours()); // Current hours (0-23)
console.log("Minutes:", newDate.getMinutes()); // Current minutes (0-59)
console.log("Seconds:", newDate.getSeconds());  // Current seconds (0-59)
console.log("Day of Week:", newDate.getDay()); // Current day of the week (0-6, 0=Sunday)

newDate.toLocaleString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
// "Sunday, October 19, 2025"