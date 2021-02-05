const student = [
    { id: 122, name: "Abid" },
    { id: 120, name: "Joy" },
    { id: 101, name: "Nashif" }
]
// const output = [];
// for (let i = 0; i < student.length; i++) {
//     const studentName = student[i];
//     output.push(studentName);
// }
// console.log(output);
const names = student.map(std => std.name);
const studentIds = student.map(ids => ids.id);
const bigger = student.filter(s => s.id > 101);
const biggerFind = student.find(x => x.id > 101);
console.log(names);
console.log(studentIds);
console.log(bigger);
console.log(biggerFind);