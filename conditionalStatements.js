//if and if else
/*if(condition){
}*/

/*let age=20
if(age>=18){
    console.log("you are eligible for vote")
}
else{
    console.log("you are not eligible for votting")
}*/

//else if (multiple stmts)
/*if(condition1){
}
else if(condition2){
}
else if(condition3){
}
:
:
:
:
else{
}*/
/*let mark=75
if(mark>=90){
    console.log("A")
}else if(mark>=80)
{
    console.log("B")
}else if(mark>=70)
{
    console.log("C")
}
else{
    console.log("failed")
}*/

//switch(multiple stmts but using case)
/* switch(exprn){
 case val1:{
}
case value2:{
}
case valuen:{
}
default:{
}
}
*/
//break - jumping stmnt

/*let day=8
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2 :
        console.log("Tuesday")
        break
    case 3 :
        console.log("wedenesday")
        break
    case 4 :
        console.log("Thursday")
        break
    case 5 :
        console.log("Friday")
        break
    case 6 :
        console.log("Saturday")
        break
    case 7 :
        console.log("Sunday")
        break
    default : 
        console.log("Invalid day")    
}*/

//assigmnt : letter 'a' (check wether this vowel)

//using switch
let letter="a"

switch(letter ){
    case  "a": 
         console.log("its a vowel")
         break;
    case "e" :
        console.log("its a vowel")
        break;
    case "i" :
        console.log("its a vowel")
        break;
    case "o" : 
        console.log("its a vowel")
        break;
    case "u" :
        console.log("its a vowel")
         break;
    default :
        console.log("its not a vowel")
    
}

//using elseif

let alpha = "c"
if(alpha === "a"){
    console.log("its a vowel")
}
else if(alpha === "e"){
    console.log("its a vowel")
}
else if(alpha === "i"){
    console.log("its a vowel")
    }
else if(alpha === "o"){
    console.log("its a vowel")
    }  
else if(alpha === "u"){
    console.log("its a vowel")
    }  
else {
    console.log(alpha+" its not a vowel")
}