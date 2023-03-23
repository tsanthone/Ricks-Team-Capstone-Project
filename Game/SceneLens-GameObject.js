import GameObject from "../Engine/GameObject.js"
import Text from "../Engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import SceneLensUpdateComponent from "./SceneLens-UpdateComponent.js"

class SceneLensGameObject extends GameObject
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
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 20) + "px sans"

    this.components.push(new Text(this, this.x,this.y,"Time", font))
    this.components.push(new TextDraw(this, "white", "white"))
    this.components.push(new SceneLensUpdateComponent(this))
  }
}

export default SceneLensGameObject;