function displayResult(result){
    console.log(result)
}

function subResult(subvalue){
    console.log(subvalue)
}

function sum(a,b,callback){
   let c = a+b
   callback(c)
}

function sub(p,q,callback){
    let r = p-q
    callback(r)
}

sum(20,10,displayResult) //starting the code from here
sub(50,10,subResult)