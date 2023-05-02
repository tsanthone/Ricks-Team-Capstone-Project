/**
 * File: Controls-GameObject.js
 * Description: This file is the game object class for the controls menu. This controls menu creates text to 
 * display the controls for the program.
 */

// Imports
import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import Game from "../Engine/Game.js";

class ControlsGameObject extends GameObject {

  /**
  * Function: constructor()
  * Description: This is the constructor for ControllerUpdateComponent.js.
  * @param x: x cordinate for game object
  * @param y: y cordinate for game object
  * @param inputText: text to draw for the game object
  */
  constructor(x, y, inputText) {
    super();
    this.x = x;
    this.y = y;
    this.inputText = inputText;
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 20) + "px sans"

    if (this.inputText == "Controls") //if text is "Controls" then set custom size
    {
      font = (canvas.height / 10) + "px sans"
    }
    else if (this.inputText == "Press F to go back") //if text is 'Press F to go back" then set custom size
    {
      font = (canvas.height / 30) + "px sans"
    }
    if (Game.currentSceneIndex == 1) //if on play scene set custom size
    {
      font = (canvas.height / 50) + "px sans"
    }

    this.components.push(new Text(this, this.x, this.y, this.inputText, font))
    this.components.push(new TextDraw(this, "white", "white"))
  }
}

export default ControlsGameObject;