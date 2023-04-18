// Game object class for the X velocity lens for the ball.

import GameObject from "../Engine/GameObject.js";
import Rectangle from "../Engine/Rectangle.js";
import RectangleDraw from "../Engine/RectangleDraw.js";
import Constants from "./Constants.js";
import VelocityLensXUpdateComponent from "./VelocityLensXUpdateComponent.js";

class VelocityLensX extends GameObject{
    constructor(x, y, w, h){
        super();
        this.components.push(new Rectangle(this, x, y, w, h));
        this.components.push(new RectangleDraw(this, "red", "transparent"));
        this.components.push(new VelocityLensXUpdateComponent(this));
    }
}

export default VelocityLensX;