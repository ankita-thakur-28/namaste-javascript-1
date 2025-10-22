const arr = [ 5, 6, 7, 8, 9 ]

function double(x){
    return x * 2;
}
const output = arr.map(double);
console.log(output);

// 
let number = [ 1, 2, 3, 4, 5, 6,]
 
let doubled = number.map(function (num ){
    return num * 2;
})
console.log(doubled);

// 
let tripleArr = [3, 4, 5, 6, 7, 8, 9,]

function triple(y){
    return y * 3;
}
let finalOutput = tripleArr.map(triple);
console.log(finalOutput);

//

const num = [9, 8, 7, 6, 5, 4, 3, 2, 1]

const tripled = num.map(function (x){
    return x * 3;
});
console.log(tripled);