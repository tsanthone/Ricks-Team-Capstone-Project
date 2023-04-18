import GameObject from "../Engine/GameObject.js"
import Text from "../Engine/Text.js"
import TextDraw from "../Engine/TextDraw.js"

class EndSceneResultGameObject extends GameObject
{
  constructor(x,y,text)
  {
    super();
    this.x = x;
    this.y = y;
    this.text = text;
    this.start();
  }
  start()
  {
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 3) + "px sans"

    this.components.push(new Text(this, this.x,this.y,this.text, font))
    this.components.push(new TextDraw(this, "white", "white"))
  }
}

export default EndSceneResultGameObject;