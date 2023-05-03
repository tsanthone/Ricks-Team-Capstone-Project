// This is the file responsible for creating any rectangle game objects in the game.

import Component from "./Component.js";

class Rectangle extends Component{
    constructor(parent, x, y, w, h){
        super(parent);
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
}

export default Rectangle;