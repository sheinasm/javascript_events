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



