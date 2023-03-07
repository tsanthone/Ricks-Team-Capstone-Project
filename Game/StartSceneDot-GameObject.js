import GameObject from "../Engine/GameObject.js"
import Circle from "../Engine/Circle.js";
import CircleDraw from "../Engine/CircleDraw.js";
import StartSceneDotUpdateComponent from "./StartSceneDot-UpdateComponent.js";

class StartSceneDotGameObject extends GameObject{
  constructor(x,y,r, color){
    super();
    this.components.push(new Circle(this, x,y,r));
    this.components.push(new CircleDraw(this, color, "transparent"));
    this.components.push(new StartSceneDotUpdateComponent(this));
  }
}

export default StartSceneDotGameObject;