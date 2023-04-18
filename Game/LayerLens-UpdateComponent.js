import Component from "../Engine/Component.js"
import Game from "../Engine/Game.js";

class LayerLensUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
  }
  update()
  {
    let text = this.parent.getComponent("Text");
  
    text.text = 
    //"                                                                                                                  " +
    "Blue: Foreground objects   Green: Standard UI elements   Red: Lenses UI"; 
  }
}

export default LayerLensUpdateComponent;