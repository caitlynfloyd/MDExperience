var bedState = {
    
    preload: function(){
      
        //wheelchair
        game.load.image('wheelchair','assets/nick/wheelchair.png');
        
        //nick
        game.load.image('nickbed','assets/nick/nickbed.png');
    },
    
    create: function() {
        
        //background image
        game.add.sprite(0,0,'bedroomBackground');
        
        //give the player instructions
        this.label = game.add.text(40,game.world.height-35,'Time to get up! Press the right arrow to continue', {font: '22px Courier', fill: '#ffffff'});
        
        //define right arrow key
        this.rightArrow = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        
        this.wheelchair = game.add.sprite(55,170,'wheelchair');
        
        this.nick = game.add.sprite(360,60,'nickbed');
        
        this.person1 = new Person(800,30,'person1');
        
        //this.person = game.add.sprite(800,180,'person');
        
        //define h key
        this.hkey = game.input.keyboard.addKey(Phaser.Keyboard.H);
        
        this.canMove = false;
        
        //text order number
        this.order = 0;
        
        this.canPress = true;
        
        //h key
        this.canPress2 = true;
        
        //number of times they ask for help
        this.helpCall = 0;
        
        this.together = false;
        
    },
    
    update: function(){
        
        //first right arrow click - need to put glasses on text
        if (this.rightArrow.isDown && this.order == 0 && this.canPress){
            
            //prevent continuous press
            this.canPress = false;
            //change text
            this.label.text = "You need help.  Press 'H' to call for help.";
            //change text order number
            this.order = 1;
            
        }  
        
        //press h key 5 times to move to next state
        if (this.hkey.isDown && this.canPress2){
            this.helpCall += 1;
            this.canPress2 = false;
            
            if(this.helpCall == 2){
                this.label.text = "It may take a couple calls to get their attention."
            }
            console.log(this.helpCall);
        }
        
        if(this.helpCall == 5){
            console.log('help');
            this.person1.moveLeft();
            if(this.person1.person.x <= 500){
                this.helpCall = 6;
                this.together = true;
                this.canMove = true;
            }
        }
        
        if(this.together && this.canMove){
            this.person1.moveDown();
            this.nick.y+=5;
            if(this.person1.person.y == 120){
                this.canMove = false; 
                if(this.nick.x >= 150){
                    this.nick.x -= 5;
                    this.person1.moveLeft();
                }

                    game.state.start('changeClothes');
                
            }
            
        }
        
        //stop continuous press h key
        if(this.hkey.upDuration(100)){
            this.canPress2 = true;
        }
        
        //stop from continuous press right arrow
        if (this.rightArrow.upDuration(100)){
            //console.log("yes");
            this.canPress = true;
        }
        
    },

    
}