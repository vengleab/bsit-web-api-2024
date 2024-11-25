/**
 * ************
 * ************
 * ************
 * ************
 * ************
 * ************
 */

let n = 10
let text = ""
for (let i = 0; i < n; i++) {
  // for (let j = i+1; j < n; j++) {
  //   text += "*  "
  // }
  text += "*  ".repeat(n-i)
  text += "\n"
}

console.log(text);
