function Person (name, lastname, gmail, cnic) {
    this.name = name; 
    this.lastname = lastname; 
    this.gmail = gmail; 
    this.cnic = cnic; 
}

let Asad = new Person("Asad", "Ali", "abc", "123"); 

// console.log(Asad);


let motherName = new Person ("XYZ", "ABC", "WER", "123"); 
console.log(motherName); 

Person.nationality = "Eng"; 

motherName.nationality = "Urduuuu"; 
console.log(motherName); 
