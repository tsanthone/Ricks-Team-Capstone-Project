// Game object class for the PONG ball.

import GameObject from "../Engine/GameObject.js";
import Circle from "../Engine/Circle.js";
import CircleDraw from "../Engine/CircleDraw.js";
import BallUpdateComponent from "./BallUpdateComponent.js";

class BallGameObject extends GameObject{
    constructor(x, y){
        super();
        this.r = 25;
        this.components.push(new Circle(this, x, y, this.r));
        this.components.push(new CircleDraw(this, "white", "black"));
        this.components.push(new BallUpdateComponent(this));
    }
}

export default BallGameObject;