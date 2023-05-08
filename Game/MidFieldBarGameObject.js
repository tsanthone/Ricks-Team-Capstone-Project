// Game object class for the bar that appears in the middle of the field.

import GameObject from "../Engine/GameObject.js";
import Rectangle from "../Engine/Rectangle.js";
import RectangleDraw from "../Engine/RectangleDraw.js";
import Constants from "./Constants.js";

class MidFieldBarGameObject extends GameObject{
    constructor(y){
        super();
        // Sets the values of the width and height to the constant set in Constants.
        this.w = Constants.midFieldBarWidth;
        this.h = Constants.midFieldBarHeight;
        this.components.push(new Rectangle(this, (Constants.maxX / 2) - (this.w / 2), y, this.w, this.h)); 
        this.components.push(new RectangleDraw(this, "white", "transparent"));
    }
}

export default MidFieldBarGameObject;