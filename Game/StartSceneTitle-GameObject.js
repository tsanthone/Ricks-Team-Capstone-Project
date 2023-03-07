import GameObject from "../Engine/GameObject.js"
import Text from "../Engine/Text.js"
import TextDraw from "../Engine/TextDraw.js"
import StartUpdateComponent from "./StartSceneTitle-UpdateComponent.js"

class StartSceneTitleGameObject extends GameObject
{
  constructor(x,y)
  {
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  start()
  {
    this.components.push(new Text(this, this.x,this.y,"PONG", "500px sans"))
    this.components.push(new TextDraw(this, "white", "white"))
    this.components.push(new StartUpdateComponent(this))
  }
}

export default StartSceneTitleGameObject;