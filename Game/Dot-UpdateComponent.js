import Component from "../Engine/Component.js"
import Time from "../Engine/Time.js"
import Game from "../Engine/Game.js"
import DotGameObject from "./Dot-GameObject.js";




class DotUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.velX = 0;
    this.velY = 10;
  }
  update() 
  {
    const canvas = document.querySelector('canvas');
    let dot = this.parent.getComponent("Circle");
    
    dot.y += (this.velY * dot.r / 10) * Time.secondsBetweenFrame;

    if(dot.y - dot.r >= canvas.height)
    {

      dot.y = 0 - (dot.r * 2) - (Math.random() * 10);
      dot.x = Math.random() * canvas.width;

    }
    

  }
}

export default DotUpdateComponent;
