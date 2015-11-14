window.addEventListener("load",function () { 
	var bootje = document.getElementById('bootje');
    position = 100;
    
    var speed = 1;
    
    function float () {
        bootje.style.left = position + "px";
        position += speed;
        if(position > 1000 || position<100){
            speed = -speed;
        }
    }
    
    
    setInterval(float,1);
                                         
})
