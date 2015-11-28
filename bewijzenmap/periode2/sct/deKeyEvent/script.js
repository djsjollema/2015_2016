window.addEventListener("load",function(){ 
		var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var canvasWidth = canvas.width;
	var canvasHeight = canvas.height;
    var xpos = 100;
    var ypos = 100;
    var boxWidth = 100;
    var boxHeight = 100;
    var stap = 5;
	
    context.clearRect(0,0,800,450);
    context.fillRect(xpos,ypos,100,100);
    
    document.addEventListener("keydown",function(e){
        console.log(e.keyCode);
        
        if(e.keyCode == 39){
            context.clearRect(0,0,800,450);
            xpos += stap;
            if(xpos>canvasWidth){
                xpos = -boxWidth;
            }
            context.fillRect(xpos,ypos,boxWidth,boxHeight);
        };
        
        if(e.keyCode == 37){
            context.clearRect(0,0,800,450);
            xpos -= stap;
            if(xpos<-boxWidth){
                xpos = canvasWidth;
            }
            context.fillRect(xpos,ypos,boxWidth,boxHeight);
        }; 
        
        if(e.keyCode == 38){
            context.clearRect(0,0,800,450);
            ypos -= stap;
            if(ypos<-boxHeight){
                ypos = canvasHeight;
            }
            context.fillRect(xpos,ypos,boxWidth,boxHeight);
        }; 
        
        if(e.keyCode == 40){
            context.clearRect(0,0,800,450);
            ypos += stap;
            if(ypos>canvasHeight){
                ypos = -boxHeight;
            }
            context.fillRect(xpos,ypos,boxWidth,boxHeight);
        };         
    })
	
})
