window.addEventListener("load",function(){ 
	var imageNames = ["IMAG0444.jpg",
				"IMAG0445.jpg",
				"IMAG0446.jpg",
				"IMAG0447.jpg",
				"IMAG0448.jpg",
				"IMAG0449.jpg",
				"IMAG0450.jpg",
				"IMAG0451.jpg",
				"IMAG0452.jpg",
				"IMAG0453.jpg",
				"IMAG0455.jpg",
				"IMAG0456.jpg",
				"IMAG0457.jpg",
				"IMAG0458.jpg",
				"IMAG0459.jpg",
				"IMAG0460.jpg",
				"IMAG0461.jpg",
				"IMAG0462.jpg",
				"IMAG0463.jpg",
				"IMAG0464.jpg",
				"IMAG0465.jpg",
				"IMAG0466.jpg",
				"IMAG0467.jpg",
				"IMAG0468.jpg",
				"IMAG0469.jpg",
				"IMAG0470.jpg",
				"IMAG0471.jpg",
				"IMAG0472.jpg",
				"IMAG0473.jpg",
				"IMAG0474.jpg",
				"IMAG0475.jpg",
				"IMAG0476.jpg",
				"IMAG0477.jpg",
				"IMAG0478.jpg",
				"IMAG0479.jpg",
				"IMAG0480.jpg",
				"IMAG0481.jpg",
				"IMAG0482.jpg",
				"IMAG0483.jpg"];
    var tumbs = document.getElementById('tumbs');
    var display = document.getElementById('display');
    
    selectImage(Math.floor(Math.random()*imageNames.length));
    
    for(var i= 0; i<imageNames.length; i++){
        var tumb = new Image();
        tumb.src = "images/small/" + imageNames[i];
        tumb.id = i;
        tumbs.appendChild(tumb);
        tumb.addEventListener("click",function(e){
            selectImage(e.target.id);
        });
    }
    
    function selectImage(id){
        display.src = "images/big/" + imageNames[id];
    }
    
})
