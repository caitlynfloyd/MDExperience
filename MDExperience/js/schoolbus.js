var schoolBusState={
    
    preload: function(){
        
        //background
        game.load.image('road','assets/bus/schoolbusbg.png');
        
        //schoolbus
        game.load.spritesheet('schoolbus', 'assets/bus/schoolbussprite.png', 500, 232, 2);
        
        //audio
        game.load.audio('bussound','assets/audio/bussound.mp3');
    },
        
    create: function() {
        
        game.add.sprite(0,0,'road');
        
        //give the player instructions
        this.label = game.add.text(40,game.world.height-35,'Time for school!', {font: '22px Courier', fill: '#ffffff'});
        
        this.schoolbus = game.add.sprite(0,150,'schoolbus');
        this.schoolbus.animations.add('drive', [1,0], 7, false);
        
        sounds.music.stop();
        sounds.bus = game.add.audio('bussound');
        sounds.bus.play();
        
        
    },
    
    update: function (){
      
        this.schoolbus.x += 5;
        this.schoolbus.animations.play('drive');
        
        if(this.schoolbus.x == 730){
            game.state.start('hallway1');
        }
        
    },
    
}