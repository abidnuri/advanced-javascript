// undefined criteria
// No1: undefined = variable not declare properly
let pakhi;
console.log(pakhi);

// No2: undefined = Here is no return in function.
function add(num1, num2) {
    console.log(num1 + num2);
}
const result = add(12, 13);
console.log(result);

// No3: undefined = Here is return write but no return actually in function.
function add2(num3, num4) {
    console.log(num3 + num4);
    return
}
const result2 = add2(12, 13);
console.log(result2);

// No4: undefined = Here is num5 parameter is present but num6 not present.
function add3(num5, num6) {
    console.log(num5, num6);
}
const result3 = add3(12);
console.log(result3);

//No5: undefined = 
const premika = { name: 'smart', phone:01757};
console.log(premika.bf);

// No6: undefined = set undefined in a variable. It's reserved word in javaScript 
let fun = undefined;
console.log(fun);

// No7: undefined = finding not present element in Array.
let ages = [12, 14, 16];
console.log(ages[10]);

// null = not existing value.Empty. no pass, no set. Explicitly set for checking.
// developer checking for empty or not
null

// No1: NaN = Not a Number => not set the second parameter number
function add(num1, num2) {
    return num1 + num2;
}
const result5 = add(12);
console.log(result5);