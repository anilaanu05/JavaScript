/*Abstraction means hiding implementation details and 
showing only the essential features to the user.*/

class coffeeMachineAbstraction{
    #boilWater(){
        console.log("boling water 100 degree celsius")
    }
    #addCoffeePowder(){
        console.log("Coffee Powdre added")
    }
    #addMilk(){
        console.log("Milk Added")
    }

    makeMyCoffee(){
        this.#boilWater()
        this.#addCoffeePowder()
        this.#addMilk()
    }
    makeMyCoffeeWithoutMilk(){
        this.#boilWater()
        this.#addCoffeePowder()
    }
}

const coffeeMachineAbstarctionObj = new coffeeMachineAbstraction()
coffeeMachineAbstarctionObj.makeMyCoffee()
coffeeMachineAbstarctionObj.makeMyCoffeeWithoutMilk()
