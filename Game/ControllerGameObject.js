/**
 * File: ControllerGameObject.js
 * Description: This file is the game object class for the Controller. This controller will be used to 
 * handle most of the key input triggers in each of the scenes.
 */

// Imports
import GameObject from "../Engine/GameObject.js";
import ControllerUpdateComponent from "./ControllerUpdateComponent.js";

class ControllerGameObject extends GameObject {

    /**
    * Function: constructor()
    * Description: This is the constructor for ControllerGameObject.js.
    */
    constructor() {
        super();
        this.components.push(new ControllerUpdateComponent(this));
    }
}

export default ControllerGameObject;