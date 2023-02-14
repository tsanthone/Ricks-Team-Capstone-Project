import Component from "../engine/Component.js"
import Time from "../engine/Time.js"


class StartUpdateComponent extends Component {
  constructor(parent)
  {
    super(parent);
    this.time = 0;
  }
  update() //Update text game object evey tick
  {
    this.time += Time.secondsBetweenFrame;
    let text = this.parent.getComponent("Text");
  
    text.text = "Time: " + this.time; //Set text to be current time
  
  }
}

export default StartUpdateComponent;