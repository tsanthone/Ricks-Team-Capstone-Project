import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"

class ControlsGameObject extends GameObject{
  constructor(x,y){
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  start(){
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 20) + "px sans"

    this.components.push(new Text(this, this.x,this.y,
      "Press ENTER for Controls"
      , font))
    this.components.push(new TextDraw(this, "white", "white"))
  }
}

export default ControlsGameObject;