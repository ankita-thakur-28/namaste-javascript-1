// setTimeOut api and call back queue workings.

console.log("start");

setTimeout(function cb(){
    console.log("exam");
},5000);

console.log("end");

//event loop and callback queue.

console.log("start");
document.getElementById("btn")
.addEventListener("click", function cd(){
    console.log("callback");
});
console.log("end");