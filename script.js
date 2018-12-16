let userSubmit = document.getElementById("userSubmit");
let resetGrid = document.getElementById("resetGrid");
let userInput = document.getElementById("userInput");
let grid = document.getElementById("grid");
let gridBlock = document.getElementsByClassName("gridBlock");



for(i = 0; i <= 16*16; i++) {
	const createGrid = document.createElement("div");
	createGrid.className = "gridBlock";
	grid.appendChild(createGrid);
};

let generateRandomColor = function(){

	$(".gridBlock").mouseenter(function(){
		$(this).css("background-color", "rgb(" + " " + Math.floor(Math.random() *256) + " " + Math.floor(Math.random() *256) + " " + Math.floor(Math.random() *256) + ")")
	
	})
};

let generateMonochrome = function(){

		
	$(".gridBlock").mouseenter(function(){

		$(this).css("background-color", "rgb(0, 0, 0)");
		let shade = +this.style.opacity;
     	if (shade < 1) {
        		shade += 0.1;
    	}
        this.style.opacity = shade;		

	})

	
};

$("#randomColor").click(function(){
	generateRandomColor();
});
$("#monochrome").click(function(){
	generateMonochrome();
})



userSubmit.onclick = function(){ 
	if(userInput.value > 64 || isNaN(userInput.value) || userInput.value == 0) {
		alert("Please try again, and input a number between 1 and 64.");
	} else { 
		while(grid.firstChild) {
			grid.removeChild(grid.firstChild)
		};  /*this while function removes any child elements of #grid, 
		so that the grid blocks won't stack up*/
		for(i = 0; i < (userInput.value * userInput.value) ; i++) {
			const createGrid = document.createElement("div");
			createGrid.className = "gridBlock";
			grid.appendChild(createGrid);

	    }
			gridBlockSize = 600 / userInput.value; /*determine the grid in pixels, to have the grid  blocks generated at that particular size and to
			 have  them fit the grid*/
			
			grid.style.gridTemplate = "repeat(" + userInput.value + ", " + gridBlockSize + "px) / " + "repeat(" + userInput.value + ", " + gridBlockSize + "px) ";
			/*on the line above we modify the css using javascript variable by concatenating them into the css style string, we use userInput value
			to set the columns/rows number and gridBlockSize to set the size of each div, to fit the grid*/

	} 


};

if($("#randomColor").hasClass("active")) {
		generateRandomColor();
	} else {
		generateMonochrome();
	}


$("#resetGrid").click(function(){
	$(".gridBlock").css("background-color", "rgb(256 256 256)")
	

})


