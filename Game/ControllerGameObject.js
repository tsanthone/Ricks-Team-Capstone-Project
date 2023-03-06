// Game object class for the Controller. This controller will be used to handle most of the key input triggers in each of the scenes.

import GameObject from "../Engine/GameObject.js";
import ControllerUpdateComponent from "./ControllerUpdateComponent.js";
import Circle from "../Engine/Circle.js";
import CircleDraw from "../Engine/CircleDraw.js";

class ControllerGameObject extends GameObject{
    constructor(x, y){
        super();
        this.components.push(new ControllerUpdateComponent(this));
    }
}

export default ControllerGameObject;