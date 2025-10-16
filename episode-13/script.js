//function statement aka function declaration

function a(){
    console.log("exam")
}
a()

// function expression

var b = function(){
    console.log("exam")
}
b()

// difference between Function and Expression


 a()//exam coming
 b()// type error

 function a(){
    console.log("exam coming")
}
var b = function(){
    console.log("exam end")
}