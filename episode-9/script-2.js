//what is shadowing

var a = 100;

{ 
    var a = 10;
let b = 100;
const c = 1000;
console.log(a);
console.log(b);
console.log(c);
}
console.log(a);

