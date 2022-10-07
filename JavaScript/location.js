
document.getElementById("firstLocation").addEventListener("click", function(){
    call(0);
});
document.getElementById("secondLocation").addEventListener("click", function(){
    call(1);
});
document.getElementById("therdLocation").addEventListener("click", function(){
    call(2);
});
document.getElementById("foreLocation").addEventListener("click", function(){
    call(3);
});
document.getElementById("fiveLocation").addEventListener("click", function(){
    call(4);
});
document.getElementById("sixLocation").addEventListener("click", function(){
    call(5);
});
document.getElementById("sevenLocation").addEventListener("click", function(){
    call(6);
});

call(7);
function call(x){
    let allLocasion = document.getElementsByClassName("show");
    for(y of allLocasion){
        y.style.display = "none";
  };  
    allLocasion[x].style.display = "block";  
};