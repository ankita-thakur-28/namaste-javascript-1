function a(){
    var a = 19;
    function y(){
        console.log(a);
    }
    y();
}
a()//clousre

function x(){  
   var a = 5;
   function y(){
    console.log(a);
   }
 return y;
}
var z = x();
console.log(z);// value of z is entire code of function y.