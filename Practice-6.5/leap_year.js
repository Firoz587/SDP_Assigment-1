function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} is a Leap Year.`;
    } else {
        return `${year} is NOT a Leap Year.`;
    }
}

const year = 2004;
const result = isLeapYear(year);
console.log(result);