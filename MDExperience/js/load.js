var loadState = {
    
    preload: function(){
        
        //add loading label to screen
        var loadingLabel = game.add.text(80,150,'loading...',{font: '30px Courier',fill:'#ffffff'});
        
        //nick spritesheet
        game.load.spritesheet('nicksheet','assets/nick/nickSpritesheet.png',220,229,6);
        
        //menu state
        game.load.image('menu','assets/1menu/mdeMenu.png');
        
        //intro state
        game.load.image('introBackground','assets/2intro/blurredBackground.png');
        
        //bedroom state
        game.load.image('bedroomBackground','assets/3bedroom/bedroomBackground.png');
        
        //eat state
        game.load.image('breakfastTable', 'assets/eating/breakfastTable.png');
        game.load.spritesheet('nick', 'assets/eating/nicksprite.png', 133, 111, 5);
        game.load.spritesheet('personright','assets/eating/person2sprite.png', 167, 152, 5);
        game.load.spritesheet('personleft','assets/eating/person3sprite.png',167,152,5);
        game.load.spritesheet('food1','assets/eating/food1.png',53,53,24);
        game.load.spritesheet('food2','assets/eating/food2.png',60,53,24);
        game.load.spritesheet('bfast','assets/eating/breakfastSprite.png',100,66,11);
        
        //fakeperson
        game.load.image('person','assets/fakeperson.png');
        
        //people
        game.load.spritesheet('person1', 'assets/people/newPersonWalkingboth.png', 150, 350, 16);
        //person1 
        game.load.spritesheet('personh1', 'assets/people/person1Walkingboth.png', 120, 280, 16);
        //person2
        game.load.spritesheet('personh2', 'assets/people/person2Walkingboth.png', 120, 280, 16);
        //person3
        game.load.spritesheet('personh3', 'assets/people/person3Walkingboth.png', 120, 280, 16);
        
        //teacher
        //person3
        game.load.spritesheet('teacher', 'assets/people/teachersprite.png', 120, 280, 16);
        
        //music
        game.load.audio('bgmusic1','assets/audio/Western.mp3');
        game.load.audio('bgmusic2','assets/audio/GrownApart.mp3');
        game.load.audio('hallwaymusic','assets/audio/hallway.mp3');
        game.load.audio('gymsounds','assets/audio/gym.mp3');
        game.load.audio('footsteps','assets/audio/footsteps2.mp3');
        
        
        
    },
    
    create: function (){
        
        //call the menu state
        game.state.start('menu');
        
    }
    
}