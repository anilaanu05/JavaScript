// asyncawait using for synchronising

function displayResult(result){
    console.log(result)
}
async function add (a,b){
    let c=a+b
    await adisplayResult(c)
    console.log("Execution Stopped")
}

add (20,30) // execution starts from here 
//await before calling the function

