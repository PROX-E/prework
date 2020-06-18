document.getElementById("growBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";

});

document.getElementById("resetBtn").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";

    document.getElementById("box").style.backgroundColor = "orange";
});

document.getElementById("bluBtn").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});

document.getElementById("fadeBtn").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "translucent";
    

});