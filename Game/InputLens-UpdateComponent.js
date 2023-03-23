import Component from "../Engine/Component.js"
import Time from "../Engine/Time.js"
import Game from "../Engine/Game.js";
import Input from "../Engine/Input.js";


class InputLensUpdateComponent extends Component {
  constructor(parent)
  {
    super(parent);
  }
  update() //Update text game object evey tick
  {
    let text = this.parent.getComponent("Text");

    // for(let i = 0; i < Input.keys.length; i++)
    // {
    //     console.log("key:" + Input.keys[i].keys() + "value:");
    // }

    //console.log(Input.getKey.name)
    text.text = "                                Input: " + "WIP"; //Set text to be current time
  
  }
}

export default InputLensUpdateComponent;