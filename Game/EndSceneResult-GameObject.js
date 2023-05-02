/**
 * File: EndSceneResult-GameObject.js
 * Description: This file is the game object class for the end scene result game objects that displays text to
 * indicate if the player lost or won the game of pong.
 */

// Imports
import GameObject from "../Engine/GameObject.js"
import Text from "../Engine/Text.js"
import TextDraw from "../Engine/TextDraw.js"

class EndSceneResultGameObject extends GameObject {

  /**
   * Function: constructor()
   * Description: This is the constructor for the end scene result game object.
   * @param x: The x coordinate for the game object.
   * @param y: The y coordinate for the game object.
   * @param text: The text to be displayed.
   */
  constructor(x, y, text) {
    super();
    this.x = x;
    this.y = y;
    this.text = text;
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 3) + "px sans"
    this.components.push(new Text(this, this.x, this.y, this.text, font))
    this.components.push(new TextDraw(this, "white", "white"))
  }
}

export default EndSceneResultGameObject;