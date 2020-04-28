var form, gameState, player, game, playerCount;
var database, position;
var allPlayers;

function setup(){
    createCanvas(500,500);
    gameState=0;
    playerCount=0;
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
    if (playerCount==4){
        game.update(1);
    }

    if(gameState==1){
        clear();
        game.play();
    }
    drawSprites();
}
