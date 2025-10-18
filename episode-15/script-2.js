//microtask queue.

console.log("start");
setTimeout (function cbt(){
    console.log("timer");
}, 6000); // callback queue

fetch("https://jsonplaceholder.typicode.com/posts/1"). then (function cbf(){
    console.log("CB NETFLIX");// microtask
});

console.log("END");
//start
//end
// CB NETFLIX
// timer