/**
 * File: Dot-GameObject.js
 * Description: This file is the game object class for the dots game objects that make up the background in the
 * main menu scene and the end scene.
 */

// Imports
import GameObject from "../Engine/GameObject.js"
import Circle from "../Engine/Circle.js";
import CircleDraw from "../Engine/CircleDraw.js";
import StartSceneDotUpdateComponent from "./Dot-UpdateComponent.js";

class StartSceneDotGameObject extends GameObject {

  /**
   * Function: constructor()
   * Description: This is the constructor for Dot-GameObject.js
   * @param x: The x coordinate for the game object
   * @param y: The y coordinate for the game object
   * @param r: The radius for the dot
   * @param color: The color of the dot
   */
  constructor(x, y, r, color) {
    super();
    this.components.push(new Circle(this, x, y, r));
    this.components.push(new CircleDraw(this, color, "transparent"));
    this.components.push(new StartSceneDotUpdateComponent(this));
  }
}

export default StartSceneDotGameObject;