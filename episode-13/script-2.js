// anonymus function

var b = function(){
    console.log("exam")
}
// a function without a fn name is called anonymus function.


//Named function expression.

var b = function w(){
    console.log("exam");
}
b()


// what is first class function aka first class citizen

var b = function(param1){
    console.log(param1);
}
b(function (){});

// other way of doin the same thing

var b = function(param1){
    console.log(param1);
}
function w(){}
b(w);

// we can return a fumction from a function
var b = function(param1){
    return function(){}
}
console.log(b());