var classroomState = {
    
    preload: function(){
        
        //background
        game.load.image('classroombg','assets/classroom/classroom.png');
        
        //speech bubble
        game.load.image('speech','assets/classroom/speech.png');
        
        //bell
        game.load.audio('bell','assets/classroom/bell.mp3');
    },
            
    create: function() {
        
        //background
        game.add.sprite(0,0,'classroombg');
        
        //give the player instructions
        this.label = game.add.text(40,game.world.height-35,'You need to get notes from your aide', {font: '22px Courier', fill: '#ffffff'});
        
        this.nick = new Nick(600,130); 
        this.nick.nick.frame = 0;
        
        //this.person1 = game.add.sprite(260, 200, 'person');
        this.person1 = new Person(260,85,'teacher');
        this.person1.person.frame = 8;
        
        //define the rightarrow key
        this.rightkey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        
        //define the left key
        this.leftkey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        
        //register spacebar
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        this.canLeave = false;
        this.canMove = true;
        
        this.speech = game.add.sprite(1000,20,'speech');
        
        this.bell = game.add.audio('bell');
        
    },
    
    update: function(){
      
        //nick moves right
        if(this.rightkey.isDown && this.canMove){
            this.nick.moveRight();
            if(this.canLeave && this.nick.nick.x == 680){
                game.state.start('hallway3');
                
            }
        }
        
        //nick moves left
        if(this.leftkey.isDown && this.canMove){
            this.nick.moveLeft();
            if(this.nick.nick.x <=320){
                this.canMove = false;
                this.label.text = "press the spacebar"
                this.speech.x = 370;
            }
        }
        
        if(this.canMove == false ){
            if(this.spaceKey.isDown){
                this.canMove = true;
                this.nick.nick.frame = 4;
                this.canLeave = true;
                this.label.text = "Leave the classroom";
                this.bell.play();
            }
            
        }
        
    },

}