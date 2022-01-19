
let name = 'liton'; // String Literal
let age = 25; // Number Literal
let isApproved = false; 
let firstName = undefined;
let selectedColor = null;

//Object 

let person = {
    name1: 'Khan',
    age1: 25
};
console.log(person);

//Change Object Value
person.name1 = 'Nazmul Khan'
person.age1 = 30
console.log(person);
console.log(person.name1);

//Bracket Notation for the change object value
person['name1'] = 'Nazmul';
console.log(person);


//Bracket Notation for the change object value
//let selection = 'name1';
//person[selection] = 'Nazmul';
//console.log(person);


console.log(age);

//Array of JS

let selectedColors = ['red', 'black'];
selectedColors[2]= 'green';
console.log(selectedColors);
console.log(selectedColors[0]);
console.log("Leanth of selectedColors = " + selectedColors.length);