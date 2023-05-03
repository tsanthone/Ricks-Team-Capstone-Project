// Game object class for the Y velocity lens for the ball.

// Imports
import GameObject from "../Engine/GameObject.js";
import Rectangle from "../Engine/Rectangle.js";
import RectangleDraw from "../Engine/RectangleDraw.js";
import Constants from "./Constants.js";
import VelocityLensYUpdateComponent from "./VelocityLensYUpdateComponent.js";

class VelocityLensY extends GameObject{
    constructor(x, y, w, h){
        super();
        this.components.push(new Rectangle(this, x, y, w, h));
        this.components.push(new RectangleDraw(this, "green", "transparent"));
        this.components.push(new VelocityLensYUpdateComponent(this));
    }
}

export default VelocityLensY;