// Error handling means managing errors in your code so the 
// program can respond properly instead of stopping unexpectedly.

try {
    let a = 20
    let b = 10
    if(b==0){
        throw new Error("Cannot be divided by 0") //custom keyword
    }
    let result = a/b
    console.log(result)
}
catch(errorHandlers){
  console.log(errorHandlers.message)
}

finally{ //impoortnt thing without skip mostly use for clearng the browser, close all tabs without checking any errors
   console.log("Execution stopped")
}


