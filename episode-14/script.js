// call back 

function a(b){

}
a(function b(){

})

// 
setTimeout(function (){
    console.log("timer");
},4000);
function a(b){
    console.log("x");
    b();
}
 
a(function b(){
    console.log("y");
});