// Falsy:
// No1: 0 
// No2: ""
// No3: undefined
// No4: null
// No5: NaN
// No6: false
// No7: write undefined

// Truthy:
// No1: 1
// No2: " "
// No3: []
// No4: {}
// No5: '0'

let num = 12;
if (num || num == 0) {
    console.log('Condition is true.');
}
else {
    console.log('Condition is false.');
}