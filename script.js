let userSubmit = document.getElementById("userSubmit");
let resetGrid = document.getElementById("resetGrid");
let userInput = document.getElementById("userInput");
let grid = document.getElementById("grid");


userSubmit.onclick = function(){ 
	while(grid.firstChild) {
		grid.removeChild(grid.firstChild)
	};  /*this while function removes any child elements of #grid, 
	so that the grid blocks won't stack up*/
	for(i = 0; i < (userInput.value * userInput.value) ; i++) {
		const gridBlock = document.createElement("div");
		grid.appendChild(gridBlock);
		grid.style.grid-template-columns = "repeat(auto-fill, minmax(300px,1fr)";
	}

}