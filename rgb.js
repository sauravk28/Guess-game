console.log("connected");
var reset=document.querySelector(".new-colors");
var boxes=document.querySelectorAll(".color");
var div=document.querySelector(".color-variations")
number=6
var colors=multipleColor(number);
var h2=document.querySelector(".second-line");
var navbar=document.querySelector(".nav-bar-main");
var easyBtn=document.querySelector(".easy");
var hardBtn=document.querySelector(".hard");
var result=document.querySelector(".status");
// pickedColor is the color to be displayed..
 var pickedColor=randomSelect();
h2.textContent=pickedColor;


for(var i=0;i<boxes.length;i++){

	boxes[i].style.backgroundColor=colors[i];	

	boxes[i].addEventListener("click",function(){

		// Catching the color of the clicked box..
		var boxClicked=this.style.backgroundColor;

		// If user picked the correct color..

		if(boxClicked===pickedColor)
			{	
				result.textContent="Correct";
				// Color all the boxes same color to that of the correct color
				colorAll(boxClicked);
				// To change the text to try again
				reset.textContent="Try Again"
				// Coloring the nav bar of same color to that of answer
				navbar.style.backgroundColor=boxClicked;	

				
			}

		// Wrong color

		else
			{	
				/*Here below we will always use this keyword as it will refer to the 
				present element, and further writing boxes[i] will create various
				problems....*/
				result.textContent="Try Again";
				this.style.backgroundColor="#000";
			}
		

		
	
});
}

// adding event listner for reseting the game

reset.addEventListener("click", function(){
	// Generating all new colors
	colors=multipleColor(number);
	// Picking a random color for game to start
	pickedColor=randomSelect();
	//  Displaying the random color
	h2.textContent=pickedColor;
	// Assigniing the new colors to the boxes
	for(var i=0;i<boxes.length;i++){
		boxes[i].style.backgroundColor=colors[i];
	}

	navbar.style.backgroundColor="#6d6b6a";	
	reset.textContent="NEW COLORS";
	result.textContent="";


}); 	

// adding event listner for easy the game

easyBtn.addEventListener("click", function(){

	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");

		
	number=3;
	// generating random colors
	colors=multipleColor(number);
	// Picking a random color for game to start
	pickedColor=randomSelect();
	//  Displaying the random color
	h2.textContent=pickedColor;
	// Assigniing the new colors to the boxes
	for(var i=0;i<boxes.length;i++){

		/*Since we know colors has 3 colors now, so until the index 
		exists below in the if statement it will assign them the colors
		and as soon as the indexes wont be available the else statement
		will give them the display to be none and they wont be shown
		any more...*/
		if(colors[i]){
			boxes[i].style.backgroundColor=colors[i];	
		}
		else{
			boxes[i].style.display="none";

			/* Here display of the lower row is set to none as upper row
				is set to the colors...*/

		}	
	}
	
	

	});


// Adding event listner for hard game..


hardBtn.addEventListener("click", function(){

	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");

		
	number=6;
	// generating random colors
	colors=multipleColor(number);
	// Picking a random color for game to start
	pickedColor=randomSelect();
	//  Displaying the random color
	h2.textContent=pickedColor;
	// Assigniing the new colors to the boxes
	for(var i=0;i<boxes.length;i++){

		boxes[i].style.backgroundColor=colors[i];
		boxes[i].style.display="block";

		
	}
	
	

	});


//Function for randomly selecting the color that will be displayed..

function randomSelect(){
	var index=Math.floor(Math.random() * colors.length);
	return colors[index];
}

// Function for making colors same if correct option is opted..

function colorAll(rang){
	for(var i=0;i<boxes.length;i++){
		boxes[i].style.backgroundColor=rang;
	}
}

// Function for generating one random color

function oneColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	/*As we need to return this string: rgb(r,g,b)..
	Therefore we need to write the below  written statement..
	as "" inside "" ignore the variables inside like below.*/
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

/* Funciton for returning a array containg random num colors ,
	that would be provided above to  colors */

function multipleColor(num){
	var arr=[];
	for(var i=0;i<num;i++)
		{
			arr.push(oneColor());
		}
	// returning the array	
	return arr;
}  

	
