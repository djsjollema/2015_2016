window.addEventListener("load",function(){ 
		var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var canvasWidth = canvas.width;
	var canvasHeight = canvas.height;
    
    var ballWidth = 30;
    var ballHeight = 30;
    var posX = 400;
    var posY = 225;
	var speedX = 2;
    var speedY = 3;
    var stap = 5;
    
	draw();
	
	function draw(){
		window.requestAnimationFrame(draw);
		context.clearRect(0,0,canvasWidth,canvasHeight);
        context.fillStyle = "white";
        context.fillRect(posX, posY, ballWidth, ballHeight);
        posX += speedX;
        posY += speedY;
        
        if(posX < 0  || posX > 800- ballWidth){
            speedX = - speedX;
        };
        
        if(posY < 0  || posY > 450- ballHeight){
            speedY = - speedY;
        };        
        
	}
	
})
