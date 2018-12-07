let userSubmit = document.getElementById("userSubmit");
let resetGrid = document.getElementById("resetGrid");
let userInput = document.getElementById("userInput");
let grid = document.getElementById("grid");
let gridBlock = document.getElementById("grid").child;


userSubmit.onclick = function(){ 
	while(grid.firstChild) {
		grid.removeChild(grid.firstChild)
	};  /*this while function removes any child elements of #grid, 
	so that the grid blocks won't stack up*/
	for(i = 0; i < (userInput.value * userInput.value) ; i++) {
		const gridBlock = document.createElement("div");
		grid.appendChild(gridBlock);
    }
		gridBlockSize = 600 / userInput.value; /*determine the grid in pixels, to have the grid  blocks generated at that particular size and to
		 have  them fit the grid*/
		
		grid.style.gridTemplate = "repeat(" + userInput.value + ", " + gridBlockSize + "px) / " + "repeat(" + userInput.value + ", " + gridBlockSize + "px) ";
		/*on the line above we modify the css using javascript variable by concatenating them into the css style string, we use userInput value
		to set the columns/rows number and gridBlockSize to set the size of each div, to fit the grid*/


}

/*
	var nodes = document.getElementById('grid').childNodes;
for(var i=0; i<nodes.length; i++) {
    if (nodes[i].nodeName.toLowerCase() == 'div') {
         nodes[i].style.background = "red";
     }
}
 //// will use this later on, to select the divs generated and have their color changed

*/