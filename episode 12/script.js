// clousre e.g

function outer(){
    var a = 10;
    function inner(){
console.log(a);
 }
 return inner;
}
outer()()

function outer(){
    var a = 10;
    function inner(){
console.log(a);
 }
 return inner;
}
 const fn = outer();
 fn()


 // changing var to let will it makr any change.
 function outer(){
    let a = 10;
    function inner(){
        console.log(a);
    }
    return inner;
 }
 outer()()

 // will inner function have the accces to outer function argument.

 function outer(str){
    let a = 50;
    function inner(){
        console.log(a, str);
    }
     return inner;
 }
 outer ("hello everyone")();