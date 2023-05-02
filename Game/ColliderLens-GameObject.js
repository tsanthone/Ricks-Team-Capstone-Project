/**
 * File: ColliderLensGameObject.js
 * Description: This file is used as part of the collider lens implementation. This lens 
 * turns all display transparent and creates a green outline around the colliders 
 * on the ball and paddle objects.
 */

//Imports
import GameObject from "../Engine/GameObject.js"
import Game from "../Engine/Game.js";

class ColliderLensGameObject extends GameObject
{
  /**
  * Function: constructor()
  * Description: This is the constructor for ColliderLensGameObject.js
  * @param x: The x coordinate for the game object
  * @param y: The y coordinate for the game object
  */
  constructor(x,y)
  {
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  /**
  * Function: start()
  * Description: This is the start function for the collider lens, which 
  * changes the display colors of the different objects, making some of
  * them transparent.
  */
  start()
  { 
    let totalBars = 12;

    //These variables are used to obtain and change the color of the game's various objects.
    let thisScore = Game.FindByType("ScoreGameObject")[0].getComponent("TextDraw");
    let thisBall = Game.FindByType("BallGameObject")[0].getComponent("CircleDraw");
    let thisUserPaddle = Game.FindByType("UserPaddleGameObject")[0].getComponent("RectangleDraw");
    let thisAIPaddle = Game.FindByType("AIPaddleGameObject")[0].getComponent("RectangleDraw");

    //The mid bar and score become transparent, while the ball and paddles get green outlines .
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