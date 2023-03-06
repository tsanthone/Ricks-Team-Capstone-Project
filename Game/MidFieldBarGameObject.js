// Game object class for the bar that appears in the middle of the field.

import GameObject from "../Engine/GameObject.js";
import Rectangle from "../Engine/Rectangle.js";
import RectangleDraw from "../Engine/RectangleDraw.js";
import Constants from "./Constants.js";

class MidFieldBarGameObject extends GameObject{
    constructor(){
        super();
        this.w = Constants.midFieldBarWidth;
        this.h = Constants.midFieldBarHeight;
        this.components.push(new Rectangle(this, (Constants.maxX / 2) - (this.w / 2), 0, this.w, this.h)); // Sets the bar at the exact center x and very top y of the screen.
        this.components.push(new RectangleDraw(this, "rgb(255, 255, 255)", "transparent")); // Draws the bar as white with transparent borders.
    }
}

export default MidFieldBarGameObject;