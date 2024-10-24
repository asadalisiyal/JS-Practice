console.log("ABC");

let course = {
    students: 50, 
    name: "class 5", 
    teacher: "mubeen", 
}; 

console.log(course.name);  


// JS object Methods 


let Persion = {
    name: "Asad Ali", 
    lastName: "Ali", 
    names: function() {
        return this.name + " - " + this.name;
    }
}; 

console.log(Persion.names);