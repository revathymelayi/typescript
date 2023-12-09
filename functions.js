"use strict";
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 3));
const sub = (num1, num2) => num1 - num2;
console.log(sub(2, 3));
const mul = function (num1, num2) {
    return num1 * num2;
};
console.log(mul(3, 4));
//optional parameter
function sum(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(sum(10, 12));
console.log(sum(5, 6, 8));
//required parameter
const subs = (num1, num2, num3 = 10) => num1 - num2 - num3;
console.log(subs(4, 3));
console.log(subs(4, 5, 7));
//rest parameters
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4, 5];
console.log(add2(1, 2, ...numbers));
