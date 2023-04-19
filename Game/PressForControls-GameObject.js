import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"

class PressForControlsGameObject extends GameObject{
  constructor(x,y){
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  start(){
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 30) + "px sans"

    this.components.push(new Text(this, this.x,this.y,
      "Press F for controls"
      , font))
    this.components.push(new TextDraw(this, "white", "white"))
  }
}

export default PressForControlsGameObject;