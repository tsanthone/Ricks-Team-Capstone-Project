/**
 * File: PressForControls-GameObject.js
 * Description: This file is the game object file for the press f for controls game object. This text helps
 * indicate the the key needed to be pressed to open up the controls menu on the main menu scene.
 */

// Imports
import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"

class PressForControlsGameObject extends GameObject {

  /**
  * Function: constructor()
  * Description: This is the constructor for TimeLens-GameObject.js
  * @param x: The x coordinate for the game object
  * @param y: The y coordinate for the game object
  */

  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  start() {
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 30) + "px sans"

    this.components.push(new Text(this, this.x, this.y,
      "Press F for controls"
      , font))
    this.components.push(new TextDraw(this, "white", "white"))
  }
}

export default PressForControlsGameObject;