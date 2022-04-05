var introState = {
    
    create: function() {
        
        //background image
        game.add.sprite(0,0,'introBackground');
        
        //give the player instructions
        this.label = game.add.text(40,game.world.height-35,'Good Morning! Press the right arrow to continue', {font: '22px Courier', fill: '#ffffff'});
        
        //define the spacebar
        this.spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        //define right arrow key
        this.rightArrow = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        
        //define h key
        this.hkey = game.input.keyboard.addKey(Phaser.Keyboard.H);
        
        //text order number
        this.order = 0;
        
        //right key
        this.canPress = true;
        
        //h key
        this.canPress2 = false;
        
        //number of times they ask for help
        this.helpCall = 0;
        
    },
    
    update: function() {
        
        //first right arrow click - need to put glasses on text
        if (this.rightArrow.isDown && this.order == 0 && this.canPress){
            
            //prevent continuous press
            this.canPress = false;
            //change text
            this.label.text = "First you need to put your glasses on ->";
            //change text order number
            this.order = 1;
            
        }  
        
        //second right arrow click - call for help text
        if(this.rightArrow.isDown && this.order == 1 && this.canPress){
            
            //change text
            this.label.text = "You do not have that range of motion, press H for help";
            //change text order number
            this.order = 1;
            //prevent continuous press
            this.canPress = false;
            this.canPress2 = true;
        }  
        
        //press h key 5 times to move to next state
        if (this.hkey.isDown && this.canPress2){
            this.helpCall += 1;
            this.canPress2 = false;
            
            if(this.helpCall == 2){
                this.label.text = "It may take a couple calls to get their attention."
            }
            
            if(this.helpCall == 5){
                game.state.start('bed');
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