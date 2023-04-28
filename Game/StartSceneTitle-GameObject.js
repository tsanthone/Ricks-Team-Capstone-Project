/**
 * File: StartSceneTitle-GameObject.js
 * Description: This is the game object file for the start scene title game object which is the title for the game
 */

// Imports
import GameObject from "../Engine/GameObject.js"
import Text from "../Engine/Text.js"
import TextDraw from "../Engine/TextDraw.js"

class StartSceneTitleGameObject extends GameObject {
  /**
  * Function: constructor()
  * Description: This is the constructor for StartSceneTitle-GameObject.js
  * @param x: The x coordinate for the game object
  * @param y: The y coordinate for the game object
  */
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 2) + "px sans"
    this.components.push(new Text(this, this.x, this.y, "PONG", font))
    this.components.push(new TextDraw(this, "white", "white"))
  }
}

export default StartSceneTitleGameObject;