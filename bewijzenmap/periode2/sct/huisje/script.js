window.addEventListener("load",function(){ 
	var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    
    //voormuur
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 6;
    context.fillStyle = "#aaa";
    context.moveTo(200,300);
    context.lineTo(600,400);
    context.lineTo(600,600);
    context.lineTo(200,500);
    context.closePath();
    context.stroke();
    context.fill();
    
    //dak
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 6;
    context.fillStyle = "#f00";
    context.moveTo(300,100);
    context.lineTo(700,200);
    context.lineTo(600,400);
    context.lineTo(200,300);
    context.closePath();
    context.stroke();
    context.fill(); 
    
    //zijmuur
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 6;
    context.fillStyle = "#fff";
    context.moveTo(700,200);
    context.lineTo(800,300);
    context.lineTo(600,400);
    context.closePath();
    context.stroke();
    context.fill();
    
    //zijmuur
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 6;
    context.fillStyle = "#fff";
    context.moveTo(600,400);
    context.lineTo(800,300);
    context.lineTo(800,500);
    context.lineTo(600,600);
    context.closePath();
    context.stroke();
    context.fill(); 
        
    
    
    
})
