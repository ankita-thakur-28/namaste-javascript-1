document.getElementById("clickme")
.addEventListener("click",function x(){
    console.log("Button clicked")
})

//EVENT LISTENER
function attachEventlistner(){
let count = 0;
document.getElementById("clickme")
.addEventListener("click",function x(){
    console.log("Button clicked", ++count)
});

}
attachEventlistner();