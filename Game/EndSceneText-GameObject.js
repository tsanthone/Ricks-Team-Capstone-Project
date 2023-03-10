import GameObject from "../Engine/GameObject.js"
import Text from "../Engine/Text.js"
import TextDraw from "../Engine/TextDraw.js"

class EndSceneTextGameObject extends GameObject
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
    let font = (canvas.height / 25) + "px sans"

    this.components.push(new Text(this, this.x,this.y,"Press ENTER to Retry               Press Escape to Main Menu", font))
    this.components.push(new TextDraw(this, "white", "white"))
  }
}

export default EndSceneTextGameObject;