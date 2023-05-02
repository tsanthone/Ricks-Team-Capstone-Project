/**
 * File: InputLens-UpdateComponent.js
 * Description: This file is the update component file for the input lens. This lens is responsible for displaying
 * the last 5 most recent inputs given by the user.
 */

// Imports
import Component from "../Engine/Component.js"
import Input from "../Engine/Input.js";


class InputLensUpdateComponent extends Component {

  /**
   * Function: constructor()
   * Description: This is the constructor function for InputLens-UpdateComponent.js
   * @param parent: parent
   */
  constructor(parent) {
    super(parent);
  }

  /**
   * Function: update()
   * Description: This is the update function for the input lens which is called every tick to keep the most recent
   * inputs being displayed up to date.
   */
  update() //update text game object evey tick
  {
    let text = this.parent.getComponent("Text");

    text.text = "                                                                                     Input: " + 
    Input.keyHistory[0] + Input.keyHistory[1] + Input.keyHistory[2] + Input.keyHistory[3] + Input.keyHistory[4];

  }
}

export default InputLensUpdateComponent;