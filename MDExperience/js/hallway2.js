var hallway2State = {
    
    preload: function () {
        
        //background
        game.load.image('hallway2bg','assets/hallways/hallwaybackground2.png');
        
    },
            
    create: function() {
        
        //background image
        game.add.sprite(0,0,'hallway2bg');
        
        //give the player instructions
        this.label = game.add.text(40,game.world.height-35,'Press right arrow to move down hallway', {font: '22px Courier', fill: '#ffffff'});
        
        this.person1 = new Person(260,130,'personh1');
        this.person1.person.frame = 8;
        this.person2 = new Person(370,130,'personh3');
        this.person2.person.frame = 7;
        
        this.nick = new Nick(10,180); 
        
        //define the rightarrow key
        this.rightkey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        
        //define the left key
        this.leftkey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        
        //register spacebar
        this.hKey = game.input.keyboard.addKey(Phaser.Keyboard.H);
        
        //define the a key
        this.upkey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        
        this.canMove = true;
        this.canEnter = false;
        
        this.helpCall = 0;
        this.canPress2 = true;
        
    },
    
    update: function(){
        
        //nick moves right until gets to classroom
        if(this.rightkey.isDown && this.canMove){
            this.nick.moveRight();
            if(this.nick.nick.x >= 430){
                this.canMove = false;
                this.canEnter = true;
            }
        }
        
        //first person
        if(this.nick.nick.x >= 70){
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
                this.person1.moveLeft();
                if (this.person1.person.x < this.nick.nick.x - 110){
                    this.canMove = true;
                    //this.past = true;
                    this.person1.person.x = -40;
                    this.person1.person.animations.stop('leftWalk');
                    sounds.footsteps.stop();
                    this.person1.person.frame = 7;
                    this.label.text = 'Continue down hallway';
                }
            }
            
        }
        
        //second person
        if(this.nick.nick.x >= 180){
            this.canMove = false;
            this.label.text = "Press 'H' to ask them to move"
            if(this.hKey.isDown && this.canPress2){
                console.log('pressed');
                this.canPress2 = false;
                this.helpCall += 1;
                //this.person1.animations.play('walk',5);
            } 
            if(this.helpCall == 2){
                //this.person2.x-=5;
                this.person2.moveLeft();
                if (this.person2.person.x < this.nick.nick.x - 110){
                    this.canMove = true;
                    //this.past = true;
                    this.person2.person.x = 60;
                    this.person2.person.animations.stop('leftWalk');
                    sounds.footsteps.stop();
                    this.person2.person.frame = 7;
                    this.label.text = 'Continue down hallway';
                }
            }
            
        }
        
        //nick hits the door
        if(this.canEnter){
            //this.text1.text = "Press 'A' to enter the classroom";
        }
        
        //start next state
        if(this.upkey.isDown){
            game.state.start('classroom');
        }
        
        //nick moves left
        if(this.leftkey.isDown){
            this.nick.moveLeft();
        }  
        
        if(this.nick.nick.x >= 330 && this.nick.nick.x <= 500){
            this.label.text = "Press the up arrow to enter the classroom";
        }
        
        if(this.nick.nick.x>500){
            this.label.text = "Go back to the classroom door"
        }
        
        //stop continuous press h key
        if(this.hKey.upDuration(100)){
            this.canPress2 = true;
        }

    },

}