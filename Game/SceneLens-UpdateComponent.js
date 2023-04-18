import Component from "../Engine/Component.js"
import Time from "../Engine/Time.js"
import Game from "../Engine/Game.js";


class SceneLensUpdateComponent extends Component {
  constructor(parent)
  {
    super(parent);
  }
  update() //Update text game object evey tick
  {
    let text = this.parent.getComponent("Text");
    text.text = "Scene: " + Game.currentSceneIndex; //Set text to be current time
  
  }
}

export default SceneLensUpdateComponent;