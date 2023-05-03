// Game object class for the diagonal velocities lens.

// Imports
import GameObject from "../Engine/GameObject.js";
import Circle from "../Engine/Circle.js";
import CircleDraw from "../Engine/CircleDraw.js";
import VelocityLensZUpdateComponent from "./VelocityLensZUpdateComponent.js";

class VelocityLensZ extends GameObject{
    constructor(x, y, r, dist){
        super();
        // Distance value so that we can make multiple circles to form a line.
        this.dist = dist;
        this.components.push(new Circle(this, x, y, r));
        this.components.push(new CircleDraw(this, "blue", "transparent"));
        this.components.push(new VelocityLensZUpdateComponent(this));
    }
}

export default VelocityLensZ;