// var numbers = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];
// var arr = [...new Set(numbers)];
// console.log(arr);
// console.log(Math.max(...numbers));
// Prompt the user for input
// Prompt the user for input (comma-separated numbers)
let userInput = prompt();

let intArray = userInput.split(',').map(num => parseInt(num.trim(), 10));

console.log("Integer Array:", intArray);
