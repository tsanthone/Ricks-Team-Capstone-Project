// Game object class for the Controller. This controller will be used to handle most of the key input triggers in each of the scenes.

import GameObject from "../Engine/GameObject.js";
import ControllerUpdateComponent from "./ControllerUpdateComponent.js";

class ControllerGameObject extends GameObject{
    constructor(){
        super();
        this.components.push(new ControllerUpdateComponent(this));
    }
}

export default ControllerGameObject;