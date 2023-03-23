//Description: This is the StartScene.js file, this file contains the code for creation of the StartScene scene. To add a new scene you must 
//have it registered in the html file as a scene and add it into the scenes array.

import Scene from "../Engine/Scene.js"
import StartGameObject from "./StartSceneText-GameObject.js";
import ControllerGameObject from "./ControllerGameObject.js";
import PressStartGameObject from "./PressToStartGameObject.js";
import DotGameObject from "./Dot-GameObject.js";
import StartSceneTitleGameObject from "./StartSceneTitle-GameObject.js";
import LensesToggle from "./LensesToggle.js";
import SceneLensGameObject from "./SceneLens-GameObject.js";
import TimeLensGameObject from "./TimeLens-GameObject.js";
import InputLensGameObject from "./InputLens-GameObject.js";

class StartScene extends Scene
{
  constructor()
  {
    super("Start Scene");
  }

  start()
  {
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
    this.gameObjects.push(new PressStartGameObject(canvas.width / 2 - (canvas.width / 9), canvas.height / 2 + (canvas.width / 20)));

    //Controller
    this.gameObjects.push(new ControllerGameObject());


    //Lenses
    if(LensesToggle.sceneLensToggle == true)
    {
        this.gameObjects.push(new SceneLensGameObject(canvas.width / 10, canvas.height * 9/10));
    }
    if(LensesToggle.timeLensToggle == true)
    {
        this.gameObjects.push(new TimeLensGameObject(canvas.width / 4, canvas.height * 9/10));
    }
    if(LensesToggle.inputLensToggle == true)
    {
        this.gameObjects.push(new InputLensGameObject(canvas.width / 2, canvas.height * 9/10));
    }
  }
}

export default StartScene;