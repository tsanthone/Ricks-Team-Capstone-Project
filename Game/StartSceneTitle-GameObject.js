import GameObject from "../Engine/GameObject.js"
import Text from "../Engine/Text.js"
import TextDraw from "../Engine/TextDraw.js"

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
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 2) + "px sans"

    this.components.push(new Text(this, this.x,this.y,"PONG", font))
    this.components.push(new TextDraw(this, "white", "white"))
  }
}

export default StartSceneTitleGameObject;