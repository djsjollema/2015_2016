window.addEventListener("load",function(){ 
    
    var counter = Math.floor(Math.random()*10);
	var musicFiles = ["The Andrew Sisters - Rum And Coca Cola.mp3",
                        "Chordettes - Mister Sandman.mp3",
                        "Diana Dors - Come by Sunday.mp3",
                        "Doris Day - By The Light Of The Silvery Moon.mp3",
                        "Gracie Fields - Smile When You Say Goodbye.mp3",
                        "Judy Garland - Over The Rainbow.mp3",
                        "Marlene Dietrich - Lili Marlene.mp3",
                        "Patti Page - How Much IsThat Doggie In The Window.mp3"
];
    
    var imageNames = ["andrews-sisters-friends-cd-cover.jpg", 
                        "chordettes.jpg",
                        "Diana-Dors.jpg",
                        "dorisday.jpg",
                        "gracieFields.jpg",
                        "judyGarland.jpg",
                        "marleneDietrich.jpg",
                        "pattyPage.jpg"]
    var albums = [];
    
    var player = document.getElementById('player');
    var albumThumbs = document.getElementById('albumThumbs');
    var albumDisplay = document.getElementById('albumDisplay');
    
    for(var i = 0; i<imageNames.length; i++){
        var thumb = new Image();
        thumb.src = "images/small/" + imageNames[i];
        thumb.id = i;
        albumThumbs.appendChild(thumb);
        thumb.addEventListener('click', function(e){
            albumDisplay.src = "images/big/" + imageNames[e.target.id];
            player.src = "music/"+  musicFiles[e.target.id];
            player.play();
        });
    }
    
    player.src = "music/" + musicFiles[1];
    
    player.addEventListener('ended', function(){
        console.log('einde');
        albumDisplay.src = "images/musicFromTheFifties.png";
    });
})
