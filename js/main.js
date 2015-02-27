var theHeading = document.getElementById("theHeading");


theHeading.addEventListener( "click", function() {
	var newPara = document.createElement("p");
	newPara.innerHTML = "This is click number x";

	var theContainer = document.getElementsByTagName("body")[0];
	theContainer.appendChild( newPara );
});

/*var theHeading = document.getElementById( 'theHeading' );

theHeading.addEventListener('click', 

	function() {
	var newPara = document.createElement('p');
	newPara.innerHTML = "This is click number" + theHeading;

	var theHeading = document.getElementById('theHeading');
  if (theHeading.firstChild.nodeValue == 'three') {
    theHeading.firstChild.nodeValue = 'two';
  } else {
    theHeading.firstChild.nodeValue = 'three';
  }

	var theContainer = document.getElementById('container');
	theContainer.appendChild(newPara);
});

/*function clickety() {
	if (h1.firstChild.nodeValue == "three") {
		h1.firstChild.nodeValue = "two";}
		else {
			h1.firstChild.nodeValue = "three";
}

/*theHeading.addEventListener('click', function() {
	console.log('This is the number' + x);
}*/


