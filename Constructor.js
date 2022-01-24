// object
var student = {
  name: "nazmul khan",
  age: 27,
  cgpa: 3.92,
  lang: ["Bangla", "English", "Hindi"],
};
console.log(student.name);

//Constructor
function Student(name, age, cgpa, lang) {
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.lang = lang;

  this.display = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.lang);
  };
}

var student1 = new Student("Liton", 25, 3.56, ["bangla", "English"]);
var student2 = new Student("Khan", 28, 2.56, ["bangla", "English"]);
var student3 = new Student("Shakil", 24, 3.26, ["bangla", "English", "Hindi"]);

student1.display();
