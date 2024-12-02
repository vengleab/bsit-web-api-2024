const generate = require('./generator');



const evenNumbers = generate.range(0, 10, 2);
console.log("1st number", evenNumbers.next().value);
console.log("2nd number",evenNumbers.next().value);
// console.log("3rd number",evenNumbers.next().value);
// console.log("4th number",evenNumbers.next().value);
// console.log("5th number",evenNumbers.next().value);
// console.log("6th number",evenNumbers.next().value);


const oddNumbers = generate.range(0, 10, 1);

console.log("1st number", oddNumbers.next().value);
console.log("2nd number",oddNumbers.next().value);