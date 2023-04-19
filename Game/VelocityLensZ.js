// Game object class for the diagonal velocities lens.

import GameObject from "../Engine/GameObject.js";
import Circle from "../Engine/Circle.js";
import CircleDraw from "../Engine/CircleDraw.js";
import VelocityLensZUpdateComponent from "./VelocityLensZUpdateComponent.js";

class VelocityLensZ extends GameObject{
    constructor(x, y, r){
        super();
        this.components.push(new Circle(this, x, y, r));
        this.components.push(new CircleDraw(this, "blue", "transparent"));
        this.components.push(new VelocityLensZUpdateComponent(this));
    }
}

export default VelocityLensZ;