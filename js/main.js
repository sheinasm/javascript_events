var theHeading = document.getElementById("theHeading");


theHeading.addEventListener( "click", function() {
	var newPara = document.createElement("p");
	newPara.innerHTML = "This is click number x";

	var theContainer = document.getElementsByTagName("body")[0];
	theContainer.appendChild( newPara );
});


function myFunction() {
    var q = document.getElementById("submit1").value;
    document.getElementById("first").innerHTML = q;

    var r = document.getElementById("submit2").value;
    document.getElementById("second").innerHTML = r;

    var s = document.getElementById("submit3").value;
    document.getElementById("third").innerHTML = s;

    var t = document.getElementById("submit4").value;
    document.getElementById("fourth").innerHTML = t;
}

document.getElementById("anyTime").addEventListener("click", function(){
    alert("You don't say!");
});

//mouseover and click listener: displays message when mouse over and another when clicked 
var x = document.getElementById("gotTime");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    document.getElementById("demo").innerHTML += "Wanna wanna!<br>";
}

function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Hmm Mmm!<br>";
}

function myThirdFunction() {
    document.getElementById("demo").innerHTML += "Don't you wanna?<br>";
}

//displays "resize numbers" when you resize the browser
window.addEventListener("resize", function(){
    document.getElementById("size").innerHTML = Math.random();
});



