// sum or max

 const arr = [5, 7, 8, 9, 4, 3, 1];

 function findSum(arr){
   let sum = 0;
   for (let i = 0; i < arr.length; i ++){
sum = sum + arr[i];
   }
   return sum;
 }
 console.log(findSum(arr));//37


 //
const arr = [5, 7, 8, 9, 4, 3, 1];

 const output = arr.reduce(function(acc, curr){
    acc = acc + curr;
    return acc;
 },0);
 console.log(output); //37


const arr = [5, 7, 8, 9, 4, 3, 1];
 const output = arr.reduce(function(max, curr){
    if(curr > max){
        max = curr;
    }
    return max;
 },0);
 console.log(output);

 //product

 const nums = [3, 4, 5];
 const product = nums.reduce((acc, curr) => acc * curr , 1);
 console.log(product);

