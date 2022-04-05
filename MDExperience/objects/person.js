class Person {
    
    constructor(x,y,name){
        //add sprite
        this.person = game.add.sprite(x,y,name);
        //start frame
        this.person.frame = 0;
        
        //enable physics
        this.person.enableBody = true;
        game.physics.arcade.enable(this.person);
        
        //setup animations
        this.person.animations.add('leftWalk', [6,5,4,3,2,1,0], 7, false);
        this.person.animations.add('rightWalk',[9,10,11,12,13,14,15],7,false);
        
        this.moved = false;

    }
    
    moveRight(){
        //move sprite
        this.person.x += 3;
        //play animation
        this.person.animations.play('rightWalk');
        if (!this.moved) {
            sounds.footsteps.play();
            this.moved = true;
        }

    }
    
    moveLeft(){
        //move sprite
        this.person.x -= 3;
        //play animation
        this.person.animations.play('leftWalk');
        if (!this.moved) {
            sounds.footsteps.play();
            this.moved = true;
        }
    }
    
    moveDown(){
        this.person.y += 3;
    }
}