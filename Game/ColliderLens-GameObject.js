import GameObject from "../Engine/GameObject.js"
import Game from "../Engine/Game.js";

class ColliderLensGameObject extends GameObject
{
  constructor(x,y)
  {
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  start()
  { 
    let totalBars = 12;
    let thisScore = Game.FindByType("ScoreGameObject")[0].getComponent("TextDraw");
    let thisBall = Game.FindByType("BallGameObject")[0].getComponent("CircleDraw");
    let thisUserPaddle = Game.FindByType("UserPaddleGameObject")[0].getComponent("RectangleDraw");
    let thisAIPaddle = Game.FindByType("AIPaddleGameObject")[0].getComponent("RectangleDraw");

    for (let i = 0; i < totalBars; i++) {
      let thisBar = Game.FindByType("MidFieldBarGameObject")[i].getComponent("RectangleDraw");
      thisBar.fillStyle = "transparent";
      thisBar.strokeStyle = "transparent";
    }
    
    thisScore.fillStyle = "transparent";
    thisScore.strokeStyle = "transparent";
    
    thisBall.fillStyle = "transparent";
    thisBall.strokeStyle = "limegreen";
  
    thisUserPaddle.fillStyle = "transparent";
    thisUserPaddle.strokeStyle = "limegreen";
  
    thisAIPaddle.fillStyle = "transparent";
    thisAIPaddle.strokeStyle = "limegreen";
  }
}
export default ColliderLensGameObject;