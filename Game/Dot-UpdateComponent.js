/**
 * File: Dot-UpdateComponent.js
 * Description: This file is the update component class for the dots game objects that make up the background in the
 * main menu scene and the end scene.
 */

// Imports
import Component from "../Engine/Component.js"
import Time from "../Engine/Time.js"

class DotUpdateComponent extends Component {

  /**
   * Function: constructor()
   * Description: This is the constructor for Dot-GameObject.js
   * @param parent: parent
   */
  constructor(parent) {
    super(parent);
    this.velX = 0;
    this.velY = 10;
  }

  /**
   * Function: update()
   * Description: This is the update function for the dot game object that updates the dots position, allowing it
   * fall down nicely making the background of the scene look nice.
   */
  update() {
    const canvas = document.querySelector('canvas');
    let dot = this.parent.getComponent("Circle");
    dot.y += (this.velY * dot.r / 10) * Time.secondsBetweenFrame;
    if (dot.y - dot.r >= canvas.height) {
      dot.y = 0 - (dot.r * 2) - (Math.random() * 10);
      dot.x = Math.random() * canvas.width;
    }
  }
}

export default DotUpdateComponent;
