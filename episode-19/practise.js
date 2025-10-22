const doubledAges = 
{
  ALOK: 24,
  ANKITA: 30,
  ANJALI: 28
};

[
    ["ALOK", 24],
    ["ANKITA", 30],
    ["ANJALI", 28]
]

//[] -> Array/List/ 


console.log("name     ; age");
console.log("----------------");

Object.entries(doubledAges)
  .map(([name, age]) => console.log(`${name} :-: ${age}`));


// 

  const names = ["alok", "ankita", "anjali"];

function addSirName(firstName) {
  return firstName + " Singh";
}

const fullNames = names.map(firstName => firstName + " Singh");
console.log(fullNames);


