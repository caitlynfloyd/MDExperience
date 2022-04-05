var eatState = {
    
    preload: function (){
      
        //breakfast spritesheet
        game.load.spritesheet('bfast','assets/eating/breakfastSprite.png',100,66,11);
        
        //people spritesheet
        game.load.spritesheet('personright','assets/eating/person2sprite.png', 167, 152, 5);
        game.load.spritesheet('personleft','assets/eating/person3sprite.png',167,152,5);
        
    },
    
    create: function(){
        
        // add background
        game.add.sprite(0, 0, 'breakfastTable');
        
        //give the player instructions
        this.label = game.add.text(40,game.world.height-35,'Press the spacebar to eat', {font: '22px Courier', fill: '#ffffff'});
        
        //player
        this.nickEats = new NickEats();
        
        //food
        this.bfast2 = new Food(522,85);
        this.bfast3 = new Food(185,85);
        this.bfast1 = new Food(355, 255);
        
        //people
        this.person2 = new PeopleEating(555,40,'personright');
        this.person3 = new PeopleEating(75,40,'personleft');
        
        //register spacebar key
        this.spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
                
        this.count = 1;
        this.canMove = true;
        this.hits = 0;  
        
        //automatic people
        this.person2.eat();
        this.person3.eat();
        
    },
    
    update: function(){
        
        //automatic food
        this.bfast2.autoEat();
        this.bfast3.autoEat();
        
        if(this.bfast2.bfast.frame>=10){
            this.person2.person2.animations.stop();
            this.person3.person2.animations.stop();
        }
        
        //player 
        if (this.spaceKey.isDown && this.canMove){
            this.nickEats.eat();   
            this.canMove = false;
            this.bfast1.eat();
        }
        
        //stop from continuous press
        if (this.spaceKey.upDuration(10000000)){
            //console.log("yes");
            this.canMove = true;
        }
        
    },

    
}