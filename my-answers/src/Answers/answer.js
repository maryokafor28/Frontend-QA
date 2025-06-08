// let integers = [2, 3, 4, 5, 6];
// let target = 9;
// let sum = integers.reduce((a, i) => {
//   return a + i;
// });
// console.log(sum);

// let sum1 = 0;
// for (let i in integers) {
//   sum += integers[i];
// }
// console.log(sum1);

let integers = [2, 3, 4, 5, 6];
let target = 9;

for (let a = 0; a < integers.length; a++) {
  for (let b = a + 1; b < integers.length; b++) {
    if (integers[a] + integers[b] === target) {
      console.log([a, b]);
    }
  }
}

// RETURNING THE LENGTH OF THE STRONGEST STRINGS//

// DOM ELEMENTS PRESERVINBG THEIR ORIGINAL ORDER AND RETURNING UNIQUE ONES//

const elements = ["div", "p", "span", "div", "p", "span"];
const getUniqueOnes = (array) =>
  array.filter(
    (currentValue, index, arr) => arr.indexOf(currentValue) === index
  );

const results = getUniqueOnes(elements);
console.log(results);
