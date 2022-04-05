//The first two integers are the dimensiona of the game screen as x and y values 
var game = new Phaser .Game(800,500,Phaser.AUTO,'gameDiv');
//var mde = new MDE(game);

var sounds = {
    sfx: {}
};

//Adding game states
game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('eat', eatState);
game.state.add('win', winState);
game.state.add('intro', introState);
game.state.add('bed', bedState);
game.state.add('changeClothes', changeClothesState);
game.state.add('leaveBedroom', leaveBedroomState);
game.state.add('brushTeeth', brushTeethState);
game.state.add('schoolbus', schoolBusState);
game.state.add('hallway1', hallway1State);
game.state.add('hallway2', hallway2State);
game.state.add('hallway3', hallway3State);
game.state.add('hallway4', hallway4State);
game.state.add('hallway5', hallway5State);
game.state.add('classroom', classroomState);
game.state.add('gym', gymState);
game.state.add('end',endState);

//Start game by calling boot state
game.state.start('boot');