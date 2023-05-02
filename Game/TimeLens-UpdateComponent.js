/**
 * File: TimeLens-UpdateComponent.js
 * Description: This file is the update component file for the time lens. This lens displays the current time passed for
 * the game and the delta time in between each frame.
 */

// Imports
import Component from "../Engine/Component.js"
import Time from "../Engine/Time.js"


class TimeLensUpdateComponent extends Component {

  /**
* Function: constructor()
* Description: This is the constructor for TimeLens-UpdateComponent.js
* @param parent: parent
*/
  constructor(parent) {
    super(parent);
    this.time = 0;
  }

  /**
  * Function: update()
  * Description: This is the update function for the time lens which displays the current time passed in the game
  * and the delta time betwen frames.
  */
  update() {
    this.time += Time.secondsBetweenFrame;
    let text = this.parent.getComponent("Text");

    //set text to be current time
    text.text = "                        ΔTime: " + Time.secondsBetweenFrame + "          Time: "
      + Time.timePassed.toFixed(2) + " s";
  }
}

export default TimeLensUpdateComponent;