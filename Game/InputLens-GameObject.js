/**
 * File: InputLens-GameObject.js
 * Description: This file is the game object file for the input lens. This lens is responsible for displaying
 * the last 5 most recent inputs given by the user.
 */

// Imports
import GameObject from "../Engine/GameObject.js"
import Text from "../Engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import InputLensUpdateComponent from "./InputLens-UpdateComponent.js"

class InputLensGameObject extends GameObject {
  /**
   * Function: constructor()
   * Description: This is the constructor function for InputLens-GameObject.js
   * @param x: The x coordinate for the game object.
   * @param y: The y coordinate for the game object.
   */
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 20) + "px sans"
    this.components.push(new Text(this, this.x, this.y, "Time", font))
    this.components.push(new TextDraw(this, "white", "white"))
    this.components.push(new InputLensUpdateComponent(this))
  }
}

export default InputLensGameObject;