// //double array without map
// const numbers = [3, 5, 7];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// // now in map
// const numbers = [3, 5, 7];

// function square(element) {
//     return element * element;
// }

// map passing e tinta parameter pass kora jay => element, index and array
// numbers.map(function square(element, index, array) {
//     console.log(element, index, array)
// });

// const result = numbers.map(function square(element) {
//     return element * element;
// });
// console.log(result);

// // const square2 = element => element * element;
// // const square = x => x * x;


// // filter er kaj hocche array er moddhe jeta fullfill korbe seta dibe. seta select kore nibe
// const numbers = [3, 5, 7];
// const result = numbers.filter(x => x > 5);
// console.log(result);

//it's find. eta array bad diye direct element dey.
const numbers = [3, 5, 7];
const result = numbers.find(x => x > 5);
console.log(result);