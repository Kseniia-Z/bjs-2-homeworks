function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student('Masha', 'female', 17);
let student2 = new Student('Pasha', 'male', 18);
let student3 = new Student('Gena', 'male', 19);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
    if (this.marks === false || this.marks === undefined) {
        return 0;
    }
    return this.marks.reduce((acc, item, index, arr) => acc + item / arr.length, 0);
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
