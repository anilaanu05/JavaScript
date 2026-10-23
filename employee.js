"use strict";
class employee {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    displayEmployee() {
        console.log(this.name + "," + this.id);
    }
}
const employeeObj = new employee("Anila", 30);
employeeObj.displayEmployee();
