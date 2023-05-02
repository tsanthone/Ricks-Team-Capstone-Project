/**
 * File: SceneLens-UpdateComponent.js
 * Description: This file is the update component class for the scene lens. This lens displays the current index
 * of the current scene
 */

// Imports
import Component from "../Engine/Component.js"
import Game from "../Engine/Game.js";


class SceneLensUpdateComponent extends Component {

  /**
  * Function: constructor()
  * Description: This is the constructor for SceneLens-GameObject.js.
  * @param parent: parent
  */
  constructor(parent) {
    super(parent);
  }

  /**
  * Function: update()
  * Description: This is the update function for the scene lens which grabs the currentSceneIndex and displays it.
  */
  update() {
    let text = this.parent.getComponent("Text");
    text.text = "Scene: " + Game.currentSceneIndex; //set text to be current time

  }
}

export default SceneLensUpdateComponent;