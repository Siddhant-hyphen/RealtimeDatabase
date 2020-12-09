var ball;
var database,position
var score;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database()
    var ballref=database.ref("ball/position")
    ballref.on("value",readPosition)
    var scoreref=database.ref("ball/count")
    scoreref.on("value",readScore)





}

function draw(){
    background("white");

   
    if(position!==undefined){
        textSize(35)
        text(score,200,50)
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
        changeScore(1)
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
        changeScore(1)
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
        changeScore(1)
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
        changeScore(1)
    }
    drawSprites();
}
}

function readScore(data){
    score = data.val()
}

function changeScore(a){
    database.ref("ball/").update({
        count:score+a
    })
}

function readPosition(data){
    position=data.val()
    ball.x=position.x
    ball.y=position.y
}

function changePosition(x,y){
  database.ref("ball/position").update({
      x:position.x+x,
      y:position.y+y
  })
}
