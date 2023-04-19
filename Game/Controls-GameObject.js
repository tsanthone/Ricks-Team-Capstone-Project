import GameObject from "../engine/GameObject.js"
import Text from "../engine/Text.js"
import TextDraw from "../engine/TextDraw.js"
import PressToStartUpdateComponent from "./PressToStartUpdateComponent.js"

class ControlsGameObject extends GameObject{
  constructor(x,y, inputText){
    super();
    this.x = x;//x;
    this.y = y;//y;
    this.inputText = inputText;
    this.start();
  }
  start(){
    const canvas = document.querySelector('canvas');
    let font = (canvas.height / 20) + "px sans"

    if(this.inputText == "Controls")
    {
      font = (canvas.height / 10) + "px sans"
    }
    else if(this.inputText =="Press F to go back")
    {
      font = (canvas.height / 30) + "px sans"
    }

    this.components.push(new Text(this, this.x,this.y, this.inputText, font))
    this.components.push(new TextDraw(this, "white", "white"))
  }
}

export default ControlsGameObject;