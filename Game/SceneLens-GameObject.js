/**
 * File: SceneLens-GameObject.js
 * Description: This file is the game object class for the scene lens. This lens displays the current index
 * of the current scene
 */

// Imports
import GameObject from "../Engine/GameObject.js"
import Text from "../Engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import SceneLensUpdateComponent from "./SceneLens-UpdateComponent.js"

class SceneLensGameObject extends GameObject {

  /**
  * Function: constructor()
  * Description: This is the constructor for SceneLens-GameObject.js.
  * @param x: x cordinate for game object
  * @param y: y cordinate for game object
  */
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 20) + "px sans"
    this.components.push(new Text(this, this.x, this.y, "Time", font))
    this.components.push(new TextDraw(this, "white", "white"))
    this.components.push(new SceneLensUpdateComponent(this))
  }
}

export default SceneLensGameObject;