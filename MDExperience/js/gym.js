var gymState = {
    
    preload: function(){
        
        //background
        game.load.image('gymbg','assets/gym/schoolgym.png');
        
    },
            
    create: function() {
        
        //background
        game.add.sprite(0,0,'gymbg');
        
        //give the player instructions
        this.label = game.add.text(40,game.world.height-35,'You cannot participate, so you must wait', {font: '22px Courier', fill: '#ffffff'});
        
        this.nick = new Nick(200,180);
        
        //define the rightarrow key
        this.rightkey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        
        //define the left key
        this.leftkey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        
        //register spacebar
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        //define up key
        this.upkey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        
        this.person1 = new Person(420,130,'personh1');
        this.person2 = new Person(500,130,'personh2');
        this.person3 = new Person(670,130,'personh3');
        this.leaving = false;
        
        /*
        this.person1 = game.add.sprite(420, 200, 'person');
        this.person2 = game.add.sprite(500, 200, 'person');
        this.person3 = game.add.sprite(680, 200, 'person');
        */
        
        
        this.canMove = true;
        
        //movingdirections
        this.person1direction = -1;
        this.person2direction = 1;
        this.person3direction = -1;
        this.walks = 0;
        
        sounds.hallwaymusic.stop();
        sounds.gymmusic = game.add.audio('gymsounds');
        sounds.gymmusic.play();
        
    },
    
    update: function(){
        
        //nick moves right
        if(this.rightkey.isDown && this.canMove){
            if(this.nick.nick.x >= 220){
                this.nick.nick.x = 220;
            } else{
                this.nick.moveRight();
            }
            /*if(this.nick.nick.x >= 710){
                game.state.start('gym');
            }*/
        }
        
        //nick moves left
        if(this.leftkey.isDown && this.canMove){
            if(this.nick.nick.x<=-10){
                this.nick.nick.x = -10;
            } else {
                this.nick.moveLeft();
            }
        }
        
        if (!this.leaving) {
            
            //person1 movement
            if (this.person1direction > 0){
                this.person1.moveRight();
            }else if(this.person1direction < 0){
                this.person1.moveLeft();
            }
            if (this.person1.person.x < 400 || this.person1.person.x >600){
                this.person1direction *= -1;  

            }

            //count number of passes by person 1
            if(this.person1.person.x <= 401){
                this.walks += 1;
                console.log(this.walks);
            }

            //person2 movement
            if (this.person2direction > 0){
                this.person2.moveRight();
            }else if(this.person2direction < 0){
                this.person2.moveLeft();
            }
            if (this.person2.person.x < 500 || this.person2.person.x >640){
                this.person2direction *= -1;  
            }

            //person3 movement
            if (this.person3direction > 0){
                this.person3.moveRight();
            }else if(this.person3direction < 0){
                this.person3.moveLeft();
            }
            if (this.person3.person.x < 450 || this.person3.person.x >685){
                this.person3direction *= -1;  
            }
        
        }
            
        //when person1 makes 6 passes, change state
        if (this.walks == 6){
            this.leaving = true;
            //game.state.start('hallway4');
            this.person1.moveRight();
            this.person2.moveRight();
            this.person3.moveRight();
            this.label.text = "Class is over.  Leave out the same door."
            if(this.nick.nick.x>200 && this.nick.nick.x<250 ){
                this.label.text = "Press up arrow to leave.";
                if (this.upkey.isDown){
                    game.state.start("hallway4");
                }
            }
        }
        
    },

}