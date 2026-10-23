// 3 students
class Students
{
studentDetails(){
    console.log("Students Details")
    console.log("student details of" +this.name)
    console.log("Student average mark is" + this.avgMark)

}

constructor(studName,mark1,mark2,mark3){
    this.name = studName
    this.mark1 = mark1
    this.mark2 = mark2
    this.mark3 = mark3
    this.avgMark=(mark1+mark2+mark3)/3
  }
}
const student1 = new Students("John",40,50,70)
student1.studentDetails()
const student2 = new Students("James",60,65,45)
student2.studentDetails()
const student3 = new Students("Rose",80,90,98)
student3.studentDetails()

//inheritance = 'is a' relationship between two classes