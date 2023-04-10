
// File: StartScene.js
// Description: This file creates all the initial game objects for the main menu scene of the pong game 

// Imports
import Scene from "../Engine/Scene.js"
import ControllerGameObject from "./ControllerGameObject.js";
import PressStartGameObject from "./PressToStartGameObject.js";
import DotGameObject from "./Dot-GameObject.js";
import StartSceneTitleGameObject from "./StartSceneTitle-GameObject.js";
import LensesToggle from "./LensesToggle.js";
import SceneLensGameObject from "./SceneLens-GameObject.js";
import TimeLensGameObject from "./TimeLens-GameObject.js";
import InputLensGameObject from "./InputLens-GameObject.js";
import PressForControlsGameObject from "./PressForControls-GameObject.js";

class StartScene extends Scene 
{
  
  // Function: constructor()
  // Description: This is the constructor for StartScene.js
  constructor() 
  {
    super("Start Scene");
  }


  // Function: start()
  // Description: This function handles all actions that will start at the very beggining of the main menu scene
  // such as game object creation
  start() {
    //Canvas size
    const canvas = document.querySelector('canvas');

    //Background  
    for (var i = 0; i < 80; i++) {
      const color = `hsl(${Math.random() * 360}, 70%, 100%, 30%)`;
      this.gameObjects.push(new DotGameObject(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 10, color));
    }
    for (var i = 0; i < 20; i++) {
      const color = `hsl(${Math.random() * 360}, 70%, 100%, 50%)`;
      this.gameObjects.push(new DotGameObject(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 200, color));
    }

    //Title
    this.gameObjects.push(new StartSceneTitleGameObject(canvas.width / 2 - (canvas.width / 3), canvas.height / 2 - (canvas.width / 20)));

    //Press SPACE To Start
    this.gameObjects.push(new PressStartGameObject(canvas.width / 2 - (canvas.width / 9), canvas.height / 2 + (canvas.width / 11)));

    //Press CTRL For Controls
    //this.gameObjects.push(new PressForControlsGameObject(canvas.width / 2 - (canvas.width / 8.3), canvas.height / 2 + (canvas.width / 20)));

    //Controller
    this.gameObjects.push(new ControllerGameObject());


    //Lenses
    if (LensesToggle.sceneLensToggle == true) {
      this.gameObjects.push(new SceneLensGameObject(canvas.width / 25, canvas.height * 9 / 10));
    }
    if (LensesToggle.timeLensToggle == true) {
      this.gameObjects.push(new TimeLensGameObject(canvas.width / 25, canvas.height * 9 / 10));
    }
    if (LensesToggle.inputLensToggle == true) {
      this.gameObjects.push(new InputLensGameObject(canvas.width / 25, canvas.height * 9 / 10));
    }
  }
}

export default StartScene;