/**
 * File: LayerLensGameObject.js
 * Description: This file is used as part of the layer lens implementation. This lens highlights objects 
 * in different colors based on what type of object it is (foreground object, UI element, lens-specific element)
 */

//Imports
import GameObject from "../Engine/GameObject.js"
import Game from "../Engine/Game.js";
import Text from "../Engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import LayerLensUpdateComponent from "./LayerLens-UpdateComponent.js";
import SceneLensGameObject from "./SceneLens-GameObject.js";
import TimeLensGameObject from "./TimeLens-GameObject.js";
import InputLensGameObject from "./InputLens-GameObject.js";
import LensesToggle from "./LensesToggle.js";

class LayerLensGameObject extends GameObject
{
  /**
  * Function: constructor()
  * Description: This is the constructor for LayerLensGameObject.js
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
  * Description: This is the start function for the layer lens, which 
  * highlights objects in different colors.
  */
  start()
  {
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 20) + "px sans";
    let totalBars = 12;

    //These variables are used to obtain and change the color of the game's various objects.
    let thisScoreColor = Game.FindByType("ScoreGameObject")[0].getComponent("TextDraw");
    let thisBallColor = Game.FindByType("BallGameObject")[0].getComponent("CircleDraw");
    let thisUserPaddleColor = Game.FindByType("UserPaddleGameObject")[0].getComponent("RectangleDraw");
    let thisAIPaddleColor = Game.FindByType("AIPaddleGameObject")[0].getComponent("RectangleDraw");
    let thisSceneLens;
    let thisTimeLens;
    let thisInputLens;

    for (let i = 0; i < totalBars; i++) {
      let thisBarColor = Game.FindByType("MidFieldBarGameObject")[i].getComponent("RectangleDraw");
      thisBarColor.fillStyle = "green";
      thisBarColor.strokeStyle = "green";
    }
    thisScoreColor.fillStyle = "green";
    thisScoreColor.strokeStyle = "green";

    thisAIPaddleColor.fillStyle = "blue";
    thisAIPaddleColor.strokeStyle = "blue";
    thisUserPaddleColor.fillStyle = "blue";
    thisUserPaddleColor.strokeStyle = "blue";
    thisBallColor.fillStyle = "blue";
    thisBallColor.strokeStyle = "blue";
   
    //Changes the color of the lens UI text for all active lenses (Scene, time, and/or input)
    if (LensesToggle.sceneLensToggle == true) {
      thisSceneLens = Game.FindByType("SceneLensGameObject")[0].getComponent("TextDraw");
      thisSceneLens.fillStyle = "red";
      thisSceneLens.strokeStyle = "red";
    }

    if (LensesToggle.timeLensToggle == true) {
      thisTimeLens = Game.FindByType("TimeLensGameObject")[0].getComponent("TextDraw");
      thisTimeLens.fillStyle = "red";
      thisTimeLens.strokeStyle = "red";
    }

    if (LensesToggle.inputLensToggle == true) {
      thisInputLens = Game.FindByType("InputLensGameObject")[0].getComponent("TextDraw");
      thisInputLens.fillStyle = "red";
      thisInputLens.strokeStyle = "red";
    }

    this.components.push(new Text(this, this.x,this.y + 50,"Legend", font));
    this.components.push(new TextDraw(this, "white", "white"));
    this.components.push(new LayerLensUpdateComponent(this));
  }
}

export default LayerLensGameObject;