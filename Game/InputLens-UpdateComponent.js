import Component from "../Engine/Component.js"
import Time from "../Engine/Time.js"
import Game from "../Engine/Game.js";
import Input from "../Engine/Input.js";


class InputLensUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
  }
  update() //Update text game object evey tick
  {
    let text = this.parent.getComponent("Text");

    text.text = "                                                                                     Input: " + 
    Input.keyHistory[0] + Input.keyHistory[1] + Input.keyHistory[2] + Input.keyHistory[3] + Input.keyHistory[4];
    //Set text to be current time

  }
}

export default InputLensUpdateComponent;