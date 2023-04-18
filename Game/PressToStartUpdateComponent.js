import Component from "../Engine/Component.js"
import Game from "../Engine/Game.js";
import Time from "../Engine/Time.js"


class PressToStartUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.time = 0;
    let blink = this.parent.getComponent("TextDraw");
    blink.alpha = 0;
  }
  update() {
    this.time += Time.secondsBetweenFrame;
    let blink = this.parent.getComponent("TextDraw");

    //Press ENTER To Start Blinking
    if(Math.round(this.time) % 2 == 0 && Math.round(this.time) != 0)
    {
      blink.alpha -= 0.01

      if(blink.alpha < 0)
      {
        blink.alpha = 0;
      }
    }
    else
    {
      blink.alpha += 0.01
      if(blink.alpha > 1)
      {
        blink.alpha = 1;
      }
    }

    
  }
}

export default PressToStartUpdateComponent;