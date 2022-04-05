var menuState = {
    
    create: function() {

        //place background
        game.add.sprite (0,0,'menu');
        
        //define the space key
        var spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        //when the player presses the spacebar, call start function
        spacekey.onDown.addOnce(this.start, this);
        
        sounds.music = game.add.audio('bgmusic2');
        sounds.footsteps = game.add.audio('footsteps');
        //console.log(sounds.music);
        
        sounds.music.play();

        
    },
    
    //start function calls the intro state
    start: function(){
        
        if (game.sound.context.state === 'suspended') {
            game.sound.context.resume();
        }
        
        game.state.start('intro');
        //game.state.start('eat');
        //game.state.start('hallway1');
        
    }
    
}