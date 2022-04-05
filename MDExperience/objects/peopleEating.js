class PeopleEating {
    
    constructor(x,y,image){
        
        //person on the right animations
        this.person2 = game.add.sprite(x,y,image);
        this.person2.enableBody = true;
        game.physics.arcade.enable(this.person2);
        
        this.person2.frame = 0;
        this.person2.animations.add('eat2', [0,1,2,3,4],6, true);
        
        
    }
    
    eat(){
        
        this.person2.animations.play('eat2');
    }
}