/**
 * File: PressToStartGameObject.js
 * Description: This file is the game object file for the press enter to start game object which is text used
 * to inducate to the player what key to press to start the game.
 */

// Imports
import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import PressToStartUpdateComponent from "./PressToStartUpdateComponent.js"

class PressStartGameObject extends GameObject {

  /**
   * Function: constructor()
   * Description: This is the constuctor functionfor PressToStartGameObject
   * @param x: The x coordinate for the game object
   * @param y: The y coordinate for the game object
   */
  constructor(x, y) {
    super();
    this.x = x;
    this.y = y;
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 20) + "px sans"
    this.components.push(new Text(this, this.x, this.y, "Press ENTER to Start!", font))
    this.components.push(new TextDraw(this, "white", "white"))
    this.components.push(new PressToStartUpdateComponent(this))
  }
}

export default PressStartGameObject;