var endState = {
    
    preload: function(){
        
        //end 1
        game.load.image('end1','assets/endingSlides/end1.png');
        
        //end 2
        game.load.image('end2','assets/endingSlides/end2.png');
        
        //end 3
        game.load.image('end3','assets/endingSlides/end3.png');
        
    },
    
    create: function(){
        
        sounds.hallwaymusic.stop();
        
        this.end1 = game.add.sprite(0,0,'end1');
        
        this.end2 =game.add.sprite(1000,0,'end2');
        
        this.end3 = game.add.sprite(1000,0,'end3');
        
        //define the space key
        this.spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        this.spacekeyCount = 0;
        this.canPress = true;
        sounds.music.play();
    },
    
    update: function(){
        
        if(this.spacekey.isDown && this.spacekeyCount == 0 && this.canPress){
            this.end2.x = 0;
            this.spacekeyCount += 1;
            this.canPress = false;
        }
        
        if(this.spacekey.isDown && this.spacekeyCount == 1 && this.canPress){
            this.end3.x = 0;
            this.spacekeyCount += 1;
            this.canPress = false;
        }
        
        if(this.spacekey.isDown && this.spacekeyCount == 2 && this.canPress){
            this.end2.x = 0;
            this.spacekeyCount += 1;
            this.canPress = false;
            sounds.music.stop();
            game.state.start('menu')
        }
        
        
        //stop continuous press h key
        if(this.spacekey.upDuration(100)){
            this.canPress = true;
        }
    }
    
    
}