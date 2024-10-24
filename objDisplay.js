
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
  
// document.getElementById("demo").innerHTML = person;

// const myArray = Object.values(person);

// Display the Array
// document.getElementById("demo").innerHTML = myArray;

// console.log("Array is = ", myArray); 

let myString = JSON.stringify(person);

console.log(myString); 
