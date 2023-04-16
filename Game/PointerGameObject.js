// Game object class for the pointer which points to another game object whose components will be shown.

import GameObject from "../Engine/GameObject.js";
import Rectangle from "../Engine/Rectangle.js";
import RectangleDraw from "../Engine/RectangleDraw.js";
import Constants from "./Constants.js";
import PointerUpdateComponent from "./PointerUpdateComponent.js";

class PointerGameObject extends GameObject{
    constructor(x, y, w, h, component){
        super();
        this.component = component;
        this.components.push(new Rectangle(this, x, y, w, h));
        this.components.push(new RectangleDraw(this, "transparent", "red"));
        this.components.push(new PointerUpdateComponent(this));
    }
}

export default PointerGameObject;