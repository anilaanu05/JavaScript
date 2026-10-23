//pymrid doom and callback hell
//difficult to read , maintain and debug

/*function displayResult(a,cb){
   console.log("Display function invoked")
   cb(a)
}

function callback1(cb2){
 console.log("Call back1 invoked")
 cb2()
}

function end(){
  console.log("End function invoked")
}

displayResult("hello",(result)=>{
    console.log(result)
    callback1(()=>
    {end()})})*/

//Promise - javascript object (pending,fulfill, reject)

const displayResult = () => {
    return new Promise((resolve, reject) => {
        console.log("Display function Executed")
        resolve()
    })
}

const callback1 = () => {
    return new Promise((resolve, reject) => {
        console.log("Callback1 Function Executed")
        let pass = false
        if (pass) {
            resolve("Completed")
        } else {
            reject("Failed")
        }
    })
}

const end = () => {
    return new Promise((resolve, reject) => {
        console.log("End Function Executed")
        resolve()
    })
}

displayResult().then(() => 
    callback1().then(() => 
        end().then(() => {
            console.log("Execution Completed")
        })
    )
).catch((error) => {
    console.error("The Error message is: " + error)
})
//then - resolve , catch - rejected

