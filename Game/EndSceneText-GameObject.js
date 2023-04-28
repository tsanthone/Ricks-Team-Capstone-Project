/**
 * File: EndSceneText-GameObject.js
 * Description: This file is the game object class for the end scene text which tells the player what keys to press
 * in order to go to the main menu, or the play scene if they want to replay the game again.
 */

// Imports
import GameObject from "../Engine/GameObject.js"
import Text from "../Engine/Text.js"
import TextDraw from "../Engine/TextDraw.js"

class EndSceneTextGameObject extends GameObject
{

  /**
   * Function: constructor()
   * Description: This is the constructor for the EndSceneText-GameObject.js
   * @param x: The x coordinate of the game object
   * @param y: The y coordinate of the game object
   */
  constructor(x,y)
  {
    super();
    this.x = x;
    this.y = y;
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 25) + "px sans"
    this.components.push(new Text(this, this.x,this.y,"Press ENTER to Play Again          Press Escape to Main Menu", font))
    this.components.push(new TextDraw(this, "white", "white"))
  }
}

export default EndSceneTextGameObject;