var hallway3State = {
    
    preload: function () {
        
        //background
        game.load.image('hallway2bg','assets/hallways/hallwaybackground2.png');
        
    },
            
    create: function() {
        
        //background image
        game.add.sprite(0,0,'hallway2bg');
        
        this.person1 = new Person(100,130,'personh1');
        this.person1.person.frame = 8;
        this.person2 = new Person(270,130,'personh3');
        this.person2.person.frame = 7;
        
        //give the player instructions
        this.label = game.add.text(40,game.world.height-35,'Continue to the right to go to gym class', {font: '22px Courier', fill: '#ffffff'});
        
        this.nick = new Nick(430,180); 
        
        //define the rightarrow key
        this.rightkey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        
        //define the left key
        this.leftkey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        
        
    },
    
    update: function(){
      
        //nick moves right
        if(this.rightkey.isDown){
            this.nick.moveRight();
            if(this.nick.nick.x >= 710){
                game.state.start('gym');
            }
        }
        
        //nick moves left
        if(this.leftkey.isDown){
            this.nick.moveLeft();
        }
        
    },
    
}