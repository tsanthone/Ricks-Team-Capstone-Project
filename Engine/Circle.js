/**
 * File: Circle.js
 * Description: This is the file responsible for creating any circle game objects in the game.
 */

// Imports
import Component from "./Component.js";

class Circle extends Component{

    /**
     * Function: constructor()
     * Description: This is the constructor for Circle.js
     * @param parent: parent
     * @param x: The x coordinate for the circle game object
     * @param y: The y coordinate for the circle game object
     * @param r: The radius for the circle game object
     */
    constructor(parent, x, y, r){
        super(parent);
        this.x = x;
        this.y = y;
        this.r = r;
    }
}

export default Circle;