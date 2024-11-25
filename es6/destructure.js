let a = 1;
let b = 20;

// let temp = b;
// b = a
// a = temp;
[a,b] = [b,a];
console.log("Value of a:",a);
console.log("Value of b:",b);

const lst = [1,2,3,4];
let [x, , y] = lst;
console.log("Value of x:",x);
console.log("Value of y:",y);