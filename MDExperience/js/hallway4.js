var hallway4State = {
    
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
        
        this.nick = new Nick(550,180); 
        this.nick.nick.frame = 2;
        
        //give the player instructions
        this.label = game.add.text(40,game.world.height-35,'Press left arrow to move down hallway', {font: '22px Courier', fill: '#ffffff'});

        //define the rightarrow key
        this.rightkey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        
        //define the left key
        this.leftkey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        
                
        //register spacebar
        this.hKey = game.input.keyboard.addKey(Phaser.Keyboard.H);
        
        this.canMove = true;
        
        this.canPress2 = true;
        
        this.helpCall = 0;
        
        sounds.gymmusic.stop();
        sounds.hallwaymusic.play();
         
    },
    
    update: function(){
      
        
        //nick moves left
        if(this.leftkey.isDown && this.canMove){
            this.nick.moveLeft();
            if(this.nick.nick.x == -20){
                game.state.start('hallway5');
            }
        }
        
        //first person
        if(this.nick.nick.x == 350){
            this.canMove = false;
            this.label.text = "Press 'H' to ask them to move"
            if(this.hKey.isDown && this.canPress2){
                console.log('pressed');
                this.canPress2 = false;
                this.helpCall += 1;
                //this.person1.animations.play('walk',5);
            } 
            if(this.helpCall == 1){
                //this.person1.x-=5;
                this.person2.moveRight();
                
                if (this.person2.person.x > this.nick.nick.x + 190){
                    this.canMove = true;
                    //this.past = true;
                    this.person2.person.x = 540;
                    this.person2.person.animations.stop('rightWalk');
                    sounds.footsteps.stop();
                    this.person2.person.frame = 7;
                    this.label.text = 'Continue down hallway';
                    this.past = 1;
                    
                }
            }
            
        }
        
        //second person
        if(this.nick.nick.x == 180){
            this.canMove = false;
            this.label.text = "Press 'H' to ask them to move"
            if(this.hKey.isDown && this.canPress2){
                console.log('pressed');
                this.canPress2 = false;
                this.helpCall += 1;
                //this.person1.animations.play('walk',5);
            } 
            if(this.helpCall == 2){
                //this.person1.x-=5;
                this.person1.moveRight();
                
                if (this.person1.person.x > this.nick.nick.x + 190){
                    this.canMove = true;
                    //this.past = true;
                    this.person1.person.x = 370;
                    this.person1.person.animations.stop('rightWalk');
                    sounds.footsteps.stop();
                    this.person1.person.frame = 7;
                    this.label.text = 'Continue down hallway';
                    this.past = 1;
                    
                }
            }
            
        }
        
        
        //stop continuous press h key
        if(this.hKey.upDuration(100)){
            this.canPress2 = true;
        }
        
    },

}