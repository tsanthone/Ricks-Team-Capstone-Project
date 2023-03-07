import Component from "../Engine/Component.js"
import Time from "../Engine/Time.js"
import Game from "../Engine/Game.js"
import StartSceneDotGameObject from "./StartSceneDot-GameObject.js";




class StartSceneDotUpdateComponent extends Component {
  constructor(parent) {
    super(parent);
    this.velX = 0;
    this.velY = 10;
    this.timePassed = 0 // Simple timer for deleting

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

      //const color = `hsl(${Math.random() * 360}, 70%, 100%, 30%)`;
      //Game.scene().gameObjects.push(new StartSceneDotGameObject(Math.random() * canvas.width, (0 - (dot.r * 2)), dot.r, color));

    }
    

  }
}

export default StartSceneDotUpdateComponent;
