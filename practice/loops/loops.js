let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");

//code for canvas1

for(let y=0; y<=200; y+=100){
    for(let x=25; x<=725; x+=100){
       ctx.fillRect(x,y, 50, 25);
 }
}

canvas = document.getElementById("canvas2");
ctx = canvas.getContext("2d");

//code for canvas2 

for(let x=0; x>700; y>x){
for(let y=125; y<=700; y+=100){
		ctx.fillRect(x,y=x+25,50,25);
	}
}
canvas = document.getElementById("canvas3");
ctx = canvas.getContext("2d");

//fill in code for canvas3 here

canvas = document.getElementById("canvas4");
ctx = canvas.getContext("2d");

//fill in code for canvas4 here

for(let y=0; y<=800; y+=70){
	for(let x=0; x<=800; x+=70){
		ctx.fillRect(x,y=x+0,70,70);
	}
}
for(let y=70; y<=800; y+=70){
	for(let x=0; x<=800; x+=70){
		ctx.fillRect(x,y=x+140,70,70);
	}
}
for(let y=70; y<=800; y+=70){
	for(let x=0; x<=800; x+=70){
		ctx.fillRect(x,y=x+140,70,70);
	}
}
