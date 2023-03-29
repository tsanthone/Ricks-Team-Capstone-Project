import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import PressToStartUpdateComponent from "./PressToStartUpdateComponent.js"

class ControlsGameObject extends GameObject{
  constructor(x,y){
    super();
    this.x = 0;//x;
    this.y = 100;//y;
    this.start();
  }
  start(){
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 20) + "px sans"

    this.components.push(new Text(this, this.x,this.y,
      "Controls" + "\n 1 : Scene Lens\n2 : Time Lens\n3 : Input Lens\n"
      , font))
    this.components.push(new TextDraw(this, "white", "white"))
  }
}

export default ControlsGameObject;