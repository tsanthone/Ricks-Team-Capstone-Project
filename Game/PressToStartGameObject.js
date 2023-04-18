import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import PressToStartUpdateComponent from "./PressToStartUpdateComponent.js"

class PressStartGameObject extends GameObject{
  constructor(x,y){
    super();
    this.x = x;
    this.y = y;
    this.start();
  }
  start(){
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 20) + "px sans"

    this.components.push(new Text(this, this.x,this.y,"Press ENTER to Start!", font))
    this.components.push(new TextDraw(this, "white", "white"))
    this.components.push(new PressToStartUpdateComponent(this))
  }
}

export default PressStartGameObject;