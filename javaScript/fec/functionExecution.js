debugger;
console.log("Global Execution Context Starts");
var globalVariable = "Iam a global variable";

console.log(globalVariable);
console.log(globalFunction);
globalFunction();

console.log("Global Execution Context Ends");

var globalFunction = function (){
    console.log("Inside global function");
};

