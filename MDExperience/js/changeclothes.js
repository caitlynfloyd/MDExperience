var changeClothesState = {
        
    preload: function(){
      
        //change clothes
        game.load.image('nickChangeClothes','assets/nick/nickwheelchange.png');
        
    },
    
    create: function() {
        
        //background image
        game.add.sprite(0,0,'bedroomBackground');
        
        //give the player instructions
        this.label = game.add.text(40,game.world.height-35,'Now you need to get dressed, press the right arrow', {font: '22px Courier', fill: '#ffffff'});
        
        //change clothes sprite
        this.nick = game.add.sprite(50,130,'nickChangeClothes');
        
        this.person1 = new Person(800,70,'person1');
        //this.person = game.add.sprite(800,200,'person');
        
        //define right arrow key
        this.rightArrow = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        
        //text order number
        this.order = 0;
        
        this.hkey = game.input.keyboard.addKey(Phaser.Keyboard.H);
        
        this.canPress = true;
        
        this.canPress2 = true;
        this.helpCall = 0;
    },
    
    update: function(){
        
        //first right arrow click - need to put glasses on text
        if (this.rightArrow.isDown && this.order == 0 && this.canPress){
            
            //prevent continuous press
            this.canPress = false;
            //change text
            this.label.text = "You need help.  Call for help.";
            //change text order number
            this.order = 1;
            
        }  
        
        //press h key 5 times 
        if (this.hkey.isDown && this.canPress2){
            this.helpCall += 1;
            this.canPress2 = false;
            
            if(this.helpCall == 2){
                this.label.text = "It may take a couple calls to get their attention."
            }
        }
        
        //once the h key is pressed 5 times, move the person to nick, once the person gets to nick, change state
        if(this.helpCall >= 5){
                if (this.person1.person.x >=320){
                    this.person1.moveLeft();
                } else {
                    sounds.footsteps.stop();
                    game.state.start('leaveBedroom');
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