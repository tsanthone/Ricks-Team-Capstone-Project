import Component from "../Engine/Component.js"
import Time from "../Engine/Time.js"


class TimeLensUpdateComponent extends Component {
  constructor(parent)
  {
    super(parent);
    this.time = 0;
  }
  update() //Update text game object evey tick
  {
    this.time += Time.secondsBetweenFrame;
    let text = this.parent.getComponent("Text");
  
    text.text = "DeltaTime: " + Time.millisecondsBetweenFrames/1000 + "              Time: " + Time.timePassed.toFixed(2) +" s"; //Set text to be current time
  
  }
}

export default TimeLensUpdateComponent;