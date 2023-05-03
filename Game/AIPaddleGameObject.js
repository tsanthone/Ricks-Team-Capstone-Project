// Game object class for the AI Paddle.

// Imports
import GameObject from "../Engine/GameObject.js";
import Rectangle from "../Engine/Rectangle.js";
import RectangleDraw from "../Engine/RectangleDraw.js";
import AIPaddleUpdateComponent from "./AIPaddleUpdateComponent.js";

class AIPaddleGameObject extends GameObject{
    constructor(x, y){
        super();
        // Each paddle has a static width of 40px and a static height of 175px.
        this.w = 40;
        this.h = 175;
        this.components.push(new Rectangle(this, x, y, this.w, this.h));
        this.components.push(new RectangleDraw(this, "white", "black"));
        this.components.push(new AIPaddleUpdateComponent(this));
    }
}

export default AIPaddleGameObject;