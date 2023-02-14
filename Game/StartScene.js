//Description: This is the StartScene.js file, this file contains the code for creation of the StartScene scene. To add a new scene you must 
//have it registered in the html file as a scene and add it into the scenes array.

import Scene from "../engine/Scene.js"
import StartGameObject from "./StartSceneText-GameObject.js";

class StartScene extends Scene
{
  constructor()
  {
    super("Main Pong Scene");
  }

  start()
  {
    const canvas = document.querySelector('canvas');
    this.gameObjects.push(new StartGameObject(canvas.width / 2 - 250, canvas.height / 2));

  }
}

export default StartScene;