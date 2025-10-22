
 const numbers = [5, 9, 7, 6, 3, 1, 8, 2];

// filter even numbers
function isEven(x) {
  return x % 2 === 0;
}

const ans = numbers.filter(isEven);
console.log(ans); 

// filter odd number

let digit = [5, 7, 8, 9, 4, 3, 1];
  function isOdd(x){
    return x % 2;
  }
  const answer = digit.filter(isOdd);
  console.log(answer);

  // greater than 4
  let value = [5, 7, 8, 9, 4, 3, 1];

  function greaterThan(x){
    return x > 4;
  }
const digits = value.filter(greaterThan);
console.log(digits);

// arrow 

const array = [5, 7, 8, 9, 4, 3, 1];
 const lessThan = array.filter((x) => x < 5);
 console.log(lessThan);

 