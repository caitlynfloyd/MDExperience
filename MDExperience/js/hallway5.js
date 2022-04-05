var hallway5State = {
    
    preload: function () {
        
        //background
        game.load.image('hallway1bg','assets/hallways/hallwaybackground.png');
        
    },
    
    create: function() {
        
        //background image
        game.add.sprite(0,0,'hallway1bg');
        
        this.nick = new Nick(590,180); 
        this.nick.nick.frame = 2;
        
        //give the player instructions
        this.label = game.add.text(40,game.world.height-35,'Press left arrow to leave school', {font: '22px Courier', fill: '#ffffff'});

        //define the rightarrow key
        this.rightkey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        
        //define the left key
        this.leftkey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        
        this.canMove = true;
    
    },
    
    update: function(){
    
        
        //nick moves left
        if(this.leftkey.isDown && this.canMove){
            this.nick.moveLeft();
            if(this.nick.nick.x == -80){
                game.state.start('end');
            }
        }
    
    }
}