function Student(first,last,age){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
}
var student = new Student('ram','kumar',45)
student.nationality = 'indian' //if want to add some data more
console.log(student)