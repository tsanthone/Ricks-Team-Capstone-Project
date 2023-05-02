/**
 * File: LayerLensUpdateComponent.js
 * Description: This file is used as part of the layer lens implementation.
 */

//Imports
import Component from "../Engine/Component.js"
import Game from "../Engine/Game.js";

class LayerLensUpdateComponent extends Component {
  /**
  * Function: constructor()
  * Description: This is the constructor for LayerLensUpdateComponent.js
  * @param parent: parent
  */
  constructor(parent) 
  {
    super(parent);
  }
  /**
  * Function: update()
  * Description: This is the update function for the layer lens which 
  * displays a legend at the bottom of the screen explaing what the colors mean.
  */
  update() {
    let text = this.parent.getComponent("Text");
    text.text = "Blue: Foreground Objects   Green: Standard UI Elements   Red: Lenses UI"; 
  }
}

export default LayerLensUpdateComponent;