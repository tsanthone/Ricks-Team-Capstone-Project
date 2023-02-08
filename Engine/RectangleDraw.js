import Component from "./Component.js";

class RectangleDraw extends Component{
    constructor(parent, fillStyle, strokeStyle){
        super(parent);
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle;
    }

    draw(ctx){
        let rectangle = this.parent.getComponent("Rectangle");

        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;

        ctx.beginPath();
        ctx.rect(
            rectangle.x,
            rectangle.y,
            rectangle.w,
            rectangle.h
        )
        ctx.fill();
        ctx.stroke();
    }
}

export default RectangleDraw;