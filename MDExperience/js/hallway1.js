var hallway1State = {
            
    preload: function () {
        
        //background
        game.load.image('hallway1bg','assets/hallways/hallwaybackground.png');
        
    },
    
    create: function() {
        
        //background image
        game.add.sprite(0,0,'hallway1bg');
        
        //give the player instructions
        this.label = game.add.text(40,game.world.height-35,'Press right arrow to move down hallway', {font: '22px Courier', fill: '#ffffff'});
        
        this.person1 = new Person(420,130,'personh1');
        this.person1.person.frame = 8;
        this.person2 = new Person(550,130,'personh2');
        this.person2.person.frame = 8;
        this.person3 = new Person(680,130,'personh3');
        this.person3.person.frame = 7;
        
        this.nick = new Nick(50,180); 
        
        //define the rightarrow key
        this.rightkey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        
        //define the left key
        this.leftkey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        
        //register spacebar
        this.hKey = game.input.keyboard.addKey(Phaser.Keyboard.H);
        
        this.canMove = true;
        
        this.canPress2 = true;
        
        this.helpCall = 0;
        this.past = 0;
        
        sounds.music.stop();
        sounds.hallwaymusic = game.add.audio('hallwaymusic');
        sounds.hallwaymusic.loop = true;
        sounds.hallwaymusic.play();
    },
    
    update: function() {
        console.log(this.canMove);
        //nick moves right
        if(this.rightkey.isDown && this.canMove){
            this.nick.moveRight();
            if(this.nick.nick.x >= 710){
                game.state.start('hallway2');
            }
        }
        
        //nick moves left
        if(this.leftkey.isDown && this.canMove){
            this.nick.moveLeft();
        }
        
        //first person
        if(this.nick.nick.x == 210){
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
                    this.person1.person.x = 100;
                    this.person1.person.animations.stop('leftWalk');
                    sounds.footsteps.stop();
                    this.person1.person.frame = 7;
                    this.label.text = 'Continue down hallway';
                    this.past = 1;
                    
                }
            }
            
        }
        
        //second person
        if(this.nick.nick.x == 350){
            this.canMove = false;
            this.label.text = "Press 'H' to ask them to move"
            if(this.hKey.isDown && this.canPress2){
                this.helpCall += 1;
                this.canPress2 = false;
                console.log(this.helpCall);
            }
            if(this.helpCall == 2){
                //this.person2.x -= 5;
                this.person2.moveLeft();
                //this.person2.animations.play('walk',5);
                if (this.person2.person.x < this.nick.nick.x - 110){
                    this.canMove = true;
                    this.person2.person.x = 240;
                    this.person2.person.animations.stop('leftWalk');
                    sounds.footsteps.stop();
                    this.person2.person.frame = 7;
                    this.label.text = 'Continue down hallway';
                    //console.log('move on');
                    
                }
            } 
        } 
        
        
        //third person
        if(this.nick.nick.x == 510){
            console.log('third');
            this.canMove = false;
            this.label.text = "Press 'H' to ask them to move"
            //this.text1.text = 'press and hold SPACEBAR to ask them to move';
            if(this.hKey.isDown && this.canPress2){
                this.helpCall += 1;
                this.canPress2 = false;
            } if (this.helpCall == 3){
                //this.person3.x -= 5;
                this.person3.moveLeft();
                //this.person3.animations.play('walk',5);
                if (this.person3.person.x < this.nick.nick.x - 110){
                    this.canMove = true;
                    this.person3.person.x = 400;
                    this.person3.person.animations.stop('leftWalk');
                    sounds.footsteps.stop();
                    this.person3.person.frame = 7;
                    this.label.text = 'Continue down hallway';
                }
            } 
        } 
        
        //stop continuous press h key
        if(this.hKey.upDuration(100)){
            this.canPress2 = true;
        }

    },

}