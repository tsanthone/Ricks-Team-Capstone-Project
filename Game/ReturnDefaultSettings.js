/**
 * File: ReturnDefaultSettings.js
 * Description: This file is used to return the settings 
 * on the game objects (such as the ball) back to the defaults.
 */

//Imports
import GameObject from "../Engine/GameObject.js"
import Game from "../Engine/Game.js";
import LensesToggle from "./LensesToggle.js";

class ReturnDefaultSettings extends GameObject
{
  /**
  * Function: constructor()
  * Description: This is the constructor for ReturnDefaultSettings.js
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
  * Description: This is the start function for return default settings, which 
  * returns the colors of the game objects back to the default colors.
  */
  start()
  { 
    let totalBars = 12;
    //These variables are used to obtain and change the color of the game's various objects.
    let thisScoreColor = Game.FindByType("ScoreGameObject")[0].getComponent("TextDraw");
    let thisBallColor = Game.FindByType("BallGameObject")[0].getComponent("CircleDraw");
    let thisUserPaddleColor = Game.FindByType("UserPaddleGameObject")[0].getComponent("RectangleDraw");
    let thisAIPaddleColor = Game.FindByType("AIPaddleGameObject")[0].getComponent("RectangleDraw");
    let thisSceneLens;
    let thisTimeLens;
    let thisInputLens;

    //Changes the colors of the objects modified back to their defaults.
    for (let i = 0; i < totalBars; i++) {
      let thisBarColor = Game.FindByType("MidFieldBarGameObject")[i].getComponent("RectangleDraw");
      thisBarColor.fillStyle = "white";
      thisBarColor.strokeStyle = "transparent";
    }
    thisScoreColor.fillStyle = "white";
    thisScoreColor.strokeStyle = "white";

    thisBallColor.fillStyle = "white";
    thisBallColor.strokeStyle = "black";
  
    thisUserPaddleColor.fillStyle = "white";
    thisUserPaddleColor.strokeStyle = "black";

    thisAIPaddleColor.fillStyle = "white";
    thisAIPaddleColor.strokeStyle = "black";

    //Returns the color of any active lens UI text (scene, time, or input) to the normal colors.
    if (LensesToggle.sceneLensToggle == true) {
      thisSceneLens = Game.FindByType("SceneLensGameObject")[0].getComponent("TextDraw");
      thisSceneLens.fillStyle = "white";
      thisSceneLens.strokeStyle = "white";
    }

    if (LensesToggle.timeLensToggle == true) {
      thisTimeLens = Game.FindByType("TimeLensGameObject")[0].getComponent("TextDraw");
      thisTimeLens.fillStyle = "white";
      thisTimeLens.strokeStyle = "white";
    }

    if (LensesToggle.inputLensToggle == true) {
      thisInputLens = Game.FindByType("InputLensGameObject")[0].getComponent("TextDraw");
      thisInputLens.fillStyle = "white";
      thisInputLens.strokeStyle = "white";
    }
  }
}

export default ReturnDefaultSettings;