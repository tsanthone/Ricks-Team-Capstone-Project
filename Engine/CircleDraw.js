/**
 * File: CircleDraw.js
 * Description: This is the file responsible for drawing any circle game objects in the game.
 */

// Imports
import Component from "./Component.js";

class CircleDraw extends Component {

    /**
     * Function: constructor()
     * Description: This is the constructor for CircleDraw.js
     * @param parent:parent
     * @param fillStyle: The fill style for the circle
     * @param strokeStyle: The stroke style for the circle
     */
    constructor(parent, fillStyle, strokeStyle) {
        super(parent);
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle;
    }

    /**
     * Function: draw()
     * Description: This is the draw function for drawing the circle game objects on the canvas.
     * @param ctx: ctx
     */
    draw(ctx) {
        let circle = this.parent.getComponent("Circle");

        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;

        ctx.beginPath();
        ctx.arc(
            circle.x,
            circle.y,
            circle.r,
            0,
            Math.PI * 2
        )
        ctx.fill();
        ctx.stroke();
    }
}

export default CircleDraw;