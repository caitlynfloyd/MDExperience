var brushTeethState = {

    preload: function () {

        //background
        game.load.image('bathroombg', 'assets/4bathroom/bathroom.png');

        game.load.spritesheet('nickwheel', 'assets/nick/bigNickSprite.png', 300, 312, 3);

        //nick brushing teeth sprite
        game.load.spritesheet('brushTeeth', 'assets/nick/brushingTeethSpritesheet.png', 300, 312, 2);

    },

    create: function () {

        //background image
        game.add.sprite(0, 0, 'bathroombg');
        
        //give the player instructions
        this.label = game.add.text(40,game.world.height-35,'Press the right arrow to go to sink', {font: '22px Courier', fill: '#ffffff'});
        
        this.person1 = new Person(800,70,'person1');

        //this.nick = new Nick(30,180);
        //nick sprite
        this.nick = game.add.sprite(0, 130, 'nickwheel');
        this.nick.frame = 0;
        this.nick.animations.add('rightWheel', [1, 2], 7, false);

        //brushingteethanimation
        this.nick2 = game.add.sprite(790, 130, 'brushTeeth');
        this.nick2.frame = 0;

        
        //this.person = game.add.sprite(800, 200, 'person');

        //define the rightarrow key
        this.rightkey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        //define the left key
        this.leftkey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        //register up arrow key
        this.upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        //register down arrow key
        this.downKey = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);

        //stop when reach sink
        this.canMove = true;

        //define h key
        this.hkey = game.input.keyboard.addKey(Phaser.Keyboard.H);

        //brush count
        this.count = 0;
        //once done if finished brushing
        this.afterbrush = false;
        //upkey
        this.canBrush = true;
        //downkey
        this.canBrush2 = true;
        
        //number of times they ask for help
        this.helpCall = 0;
        
        this.canPress2 = true;
        
        //temporary
        this.ekey = game.input.keyboard.addKey(Phaser.Keyboard.E);
    },

    update: function () {

        //player moves to sink
        if (this.rightkey.isDown && this.canMove && this.afterbrush == false) {
            this.nick.x += 1;
            this.nick.animations.play('rightWheel');
        }

        //player stops at sink
        if (this.nick.x == 350 && this.afterbrush == false) {
            this.canMove = false;
            this.label.text = "Call for help to get your toothbrush."
        }

        //press h key 5 times to move to next state
        if (this.hkey.isDown && this.canPress2){
            this.helpCall += 1;
            this.canPress2 = false;
            
            if(this.helpCall == 2){
                //this.label.text = "It may take a couple calls to get their attention."
            }
            
            if(this.helpCall == 5){
                //game.state.start('bed');
            }
        }
        
        //player calls for help and help comes
        if (this.canMove == false && this.helpCall >=5) {
            if (this.person1.person.x >= 650) {
                //this.person.x -= 5;
                this.person1.moveLeft();
            }
        }

        //switch sprite to player can brush teeth
        if (this.person1.person.x <= 650 && this.afterbrush == false) {
            this.nick.x = 800;
            this.nick2.x = 350;
            this.label.text = "Use the up/down arrows to brush your teeth"
        }

        //upkey to brush up
        if (this.nick2.x == 350 && this.upKey.isDown && this.canBrush2 && this.afterbrush == false) {
            this.nick2.frame = 1;
            this.count += 1;
            this.canBrush2 = false;
        }

        //down key to brush down
        if (this.nick2.x == 350 && this.downKey.isDown && this.canBrush && this.afterbrush == false) {
            this.nick2.frame = 0;
            this.count += 1;
            this.canBrush = false;

        }
        
        //cycle through 5 animations to change sprite and be able to leave statee
        if (this.count >= 5 && this.afterbrush == false) {
            console.log(this.count);
            //this.nick2.x = 800
            this.nick2.destroy();
            console.log('switch');
            this.nick.x = 350;
            this.canMove = true;
            this.afterbrush = true;
            this.count = 0;
            this.label.text = 'Press right arrow key to leave bathroom'
        }

        //leave screen to the right and switch states 
        if (this.rightkey.isDown && this.canMove && this.afterbrush) {
            this.nick.x += 1;
            this.nick.animations.play('rightWheel');
            if (this.nick.x == 630) {
                game.state.start('eat');
            }
        }

        //stop from continuous press
        if (this.downKey.upDuration(100)) {
            //console.log("yes");
            this.canBrush2 = true;
        }
        if (this.upKey.upDuration(100)) {
            //console.log("yes");
            this.canBrush = true;
        }
        
        //stop continuous press h key
        if(this.hkey.upDuration(100)){
            this.canPress2 = true;
        }
        
        if(this.ekey.isDown){
            game.state.start('eat');
        }


    },

}
