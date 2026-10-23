import testData from "./jsonobj.json" with {"type" : "json" }

const testObj = JSON.stringify(testData)
const obj = JSON.parse(testObj)
console.log(obj.id)


const person = {
    firstName : "John",
    lastName : "David",
    age : 21,
    isEmployed : true
}
console.log(person) 
console.log(person.firstName) //printing only first name - dot notation
console.log(person['age']) //using bracket notation
person.city="kochi"//adding new property
console.log(person.city)
person.lastName ="joe"//updating property
console.log(person.lastName)

//looping - for in loop
for (const key in person){
    console.log(key+ ":" +person[key])
}

//student 
const student = {
    studentName : "James",
    studentId : 1234,
    studentAge : 20,
    studentCourse : "Automation",
    subjects : ["PlayWright","JavaScript","TypeScript"],
    getDetails: function(){
        return `${this.studentName} is learning ${this.studentCourse}` //template literals
    }
}
for (const studentDetails in student){
    if (typeof student[studentDetails]=='function'){
        console.log(student[studentDetails]())
    }else{
      console.log(studentDetails+ " : " +student[studentDetails])
    }
    
}


