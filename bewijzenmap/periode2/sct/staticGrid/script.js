window.addEventListener("load",function () { 
	var bootje = document.getElementById('bootje');
    position = 100;
    rotation = 0;
    
    var speed = 1;
    
    function float () {
        bootje.style.left = position + "px";
        position += speed;
        rotation += 2;
        //bootje.style.transform="matrix("+ rotation + ",1,1, "+ rotation + ",0,0)";
        if(position > 1000 || position<100){
            speed = -speed;
        }
    }
    
    
    //setInterval(float,1);
                                         
})
