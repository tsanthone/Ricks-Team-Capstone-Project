// Game object class for the screen border collider for the collider lens.

// Imports
import GameObject from "../Engine/GameObject.js";
import Rectangle from "../Engine/Rectangle.js";
import RectangleDraw from "../Engine/RectangleDraw.js";
import Constants from "./Constants.js";

class ScoreColliderGameObject extends GameObject{
    constructor(){
        super();
        this.components.push(new Rectangle(this, 0, 0, Constants.maxX, Constants.maxY));
        this.components.push(new RectangleDraw(this, "transparent", "limegreen"));
    }
}

export default ScoreColliderGameObject;