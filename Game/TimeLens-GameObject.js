/**
 * File: TimeLens-GameObject.js
 * Description: This file is the game object file for the time lens. This lens displays the current time passed for
 * the game and the delta time in between each frame.
 */

// Imports
import GameObject from "../Engine/GameObject.js"
import Text from "../Engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import TimeLensUpdateComponent from "./TimeLens-UpdateComponent.js"

class TimeLensGameObject extends GameObject {

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
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 20) + "px sans"
    this.components.push(new Text(this, this.x, this.y, "Time", font))
    this.components.push(new TextDraw(this, "white", "white"))
    this.components.push(new TimeLensUpdateComponent(this))
  }
}

export default TimeLensGameObject;