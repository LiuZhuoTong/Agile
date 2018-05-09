// const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));
console.log("hello world");
//------------------------------------------//
function isLeapYear(n){
    if(n%400==0){
        return true;
    }
    if(n%100==0){
        return false;
    }
    if(n%4==0){
        return true
    }
    return false;
}
console.log("闰年判断:");
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(2008));
console.log(isLeapYear(2009));

//----------------------------------------------//
//生成飞波那起数列,前n项
console.log("shulieshuchu:");
const fibonacci=require("./lib/fibonacci");
var len=20;
for(var i=1;i<len;i++){
    console.log(fibonacci(i));
}
//---------------------------------------------//
