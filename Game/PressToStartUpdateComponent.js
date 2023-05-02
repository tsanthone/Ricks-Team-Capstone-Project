/**
 * File: PressToStartUpdateComponent.js
 * Description: This file is the update component file for the press to start game object. This game object is used
 * to indicate to the player what key to press to start the game.
 */

// Imports
import Component from "../Engine/Component.js"
import Time from "../Engine/Time.js"


class PressToStartUpdateComponent extends Component {

  /**
   * Function: constructor()
   * Description: This is the constructor function for PressToStartGameObject.js.
   * @param parent: parent
   */
  constructor(parent) {
    super(parent);
    this.time = 0;
    let blink = this.parent.getComponent("TextDraw");
    blink.alpha = 0;
  }

  /**
   * Function: update()
   * Description: This is the update function for the PressToStartGameObject.js that updates the game object every 
   * tick in the game.
   */
  update() {
    this.time += Time.secondsBetweenFrame;
    let blink = this.parent.getComponent("TextDraw");

    //blinking functionality
    if(Math.round(this.time) % 2 == 0 && Math.round(this.time) != 0)
    {
      blink.alpha -= 0.01
      if(blink.alpha < 0)
      {
        blink.alpha = 0;
      }
    }
    else
    {
      blink.alpha += 0.01
      if(blink.alpha > 1)
      {
        blink.alpha = 1;
      }
    } 
  }
}

export default PressToStartUpdateComponent;