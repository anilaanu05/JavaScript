class employee {
    name : string 
    id :number
    constructor(name : string ,id :number){
        this.name = name
        this.id = id
    }

    displayEmployee (){
        console.log(this.name + "," +this.id)
    }
}

const employeeObj = new employee("Anila",30)
employeeObj.displayEmployee()

