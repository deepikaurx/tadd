
//--------------------Slide Show 1 Start------------------------------------------------//

var current = 1;

var timer;



function rescale(){
	
	
	document.getElementById("image").height = document.documentElement.clientHeight * 0.8;
	
}



function changeImage(picture){
	
	
	if (picture == "yellow"){
		current = 1;		
	} else if (picture == "orange"){
		current = 2;		
	} else if (picture == "red"){
		current = 3;		
	} else if (picture == "blue"){
		current = 4;		
	} else if (picture == "green"){
		current = 5;		
	} else if (picture == "purple"){
		current = 6;	
	} else if (picture == "pink"){
		current = 7;	
	} else if (picture == "black"){
		current = 8;	
	}
	
	// the image src is then changed to the current value
	document.getElementById("image").src = "images/" + current + ".jpg";
	
}


function previewImage(num){
	
	
	document.getElementById("image").src = "images/" + num + ".jpg";

}

function revertImage(){


	document.getElementById("image").src = "images/" + current + ".jpg";

}

 ///////////////  These functions are dedicated to play and stop slide show  ////////////////////

//---------------------------------------------------------------////////////////////////////////
 
function start(){
	
	// when the start is pressed, a setInterval is set up, calling the newPic function every 3 seconds
	timer = setInterval("newPic()",3000)
}

function stop(){
	
	// when the stop is pressed, the timer is stopped
	clearInterval(timer)

}

function newPic(){
	
	// if the current image is not the last one (ie 5), then move it to the next one
	if (current<8)	current = current + 1;
	// if the current image is the last one (ie 5), then set it to the first one
	else current = 1;
	
	// the image src is then changed to the NEW current value
	document.getElementById("image").src = "images/" + current + ".jpg";
}



function next(){
	
	// if the current image is not the last one (ie 5), then move it to the next one
	if (current<8)	current = current + 1;
	// if the current image is the last one (ie 5), then set it to the first one
	else current = +1;
	
	// the image src is then changed to the NEW current value
	document.getElementById("image").src = "images/" + current + ".jpg";
}



function previous(){
	
	// if the current image is not the last one (ie 5), then move it to the next one
	if ((current == 8) && (current>1))	current = current - 1;
	// if the current image is the last one (ie 5), then set it to the first one
	else if (current == 1) current = 8;
	else current = current - 1;
	
	// the image src is then changed to the NEW current value
	document.getElementById("image").src = "images/" + current + ".jpg";
}




//-------------------------Slide Show 1 End-------------------------------------------//







