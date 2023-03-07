//Description: This is the StartScene.js file, this file contains the code for creation of the StartScene scene. To add a new scene you must 
//have it registered in the html file as a scene and add it into the scenes array.

import Scene from "../Engine/Scene.js"
import StartGameObject from "./StartSceneText-GameObject.js";
import ControllerGameObject from "./ControllerGameObject.js";
import PressStartGameObject from "./PressToStartGameObject.js";
import StartSceneDotGameObject from "./StartSceneDot-GameObject.js";
import StartSceneTitleGameObject from "./StartSceneTitle-GameObject.js";

class StartScene extends Scene
{
  constructor()
  {
    super("Start Scene");
  }

  start()
  {
    const canvas = document.querySelector('canvas');

    //Time
    //this.gameObjects.push(new StartGameObject(canvas.width / 2 - 250, canvas.height / 2));


    //Background  
    for (var i = 0; i < 80; i++) {
      const color = `hsl(${Math.random() * 360}, 70%, 100%, 30%)`;
      this.gameObjects.push(new StartSceneDotGameObject(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 10, color));
    }
    for (var i = 0; i < 20; i++) {
      const color = `hsl(${Math.random() * 360}, 70%, 100%, 50%)`;
      this.gameObjects.push(new StartSceneDotGameObject(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 200, color));
    }

    //Title
    this.gameObjects.push(new StartSceneTitleGameObject(canvas.width / 2 - 700, canvas.height / 2 - 100));

    //Press SPACE To Start
    this.gameObjects.push(new PressStartGameObject(canvas.width / 2 - 250, canvas.height / 2 + 200));

    //Controller
    this.gameObjects.push(new ControllerGameObject());
  }
}

export default StartScene;