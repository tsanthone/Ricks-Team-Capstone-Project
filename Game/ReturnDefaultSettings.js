//This class is used to return the settings on the game objects (such as the ball) back to the defaults.
import GameObject from "../Engine/GameObject.js"
import Game from "../Engine/Game.js";
import LensesToggle from "./LensesToggle.js";

class ReturnDefaultSettings extends GameObject
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
    let thisScoreColor = Game.FindByType("ScoreGameObject")[0].getComponent("TextDraw");
    let thisBallColor = Game.FindByType("BallGameObject")[0].getComponent("CircleDraw");
    let thisUserPaddleColor = Game.FindByType("UserPaddleGameObject")[0].getComponent("RectangleDraw");
    let thisAIPaddleColor = Game.FindByType("AIPaddleGameObject")[0].getComponent("RectangleDraw");
    let thisSceneLens;
    let thisTimeLens;
    let thisInputLens;

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