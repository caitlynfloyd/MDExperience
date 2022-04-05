var leaveBedroomState = {
    
    preload: function(){
        game.load.spritesheet('nickwheel','assets/nick/bigNickSprite.png',300,312,3);
    },
    
    create: function(){
      
        //background image
        game.add.sprite(0,0,'bedroomBackground');
        
        //give the player instructions
        this.label = game.add.text(40,game.world.height-35,'Press the right arrow to leave the room', {font: '22px Courier', fill: '#ffffff'});
        
        //bigger nick sprite
        this.nick = game.add.sprite(50,130,'nickwheel');
        this.nick.frame = 0;
        
        this.nick.animations.add('rightWheel',[1,2],7,false);
        
        this.rightkey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    },
    
    update: function(){
      
        //nick moves right
        if(this.rightkey.isDown){
            this.nick.x += 1;
            this.nick.animations.play('rightWheel');
        }
        
        //when nick gets to the right side of the screen, change state
        if(this.nick.x == 630){
            game.state.start('brushTeeth');
        }
    },
}