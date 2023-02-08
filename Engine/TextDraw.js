import Component from "./Component.js";

class TextDraw extends Component{
    constructor(parent, fillStyle, strokeStyle){
        super(parent);
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle;
    }

    draw(ctx){
        let text = this.parent.getComponent("Text");

        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;
        ctx.font = text.font;

        ctx.fillText(text.text, text.x, text.y);
        ctx.strokeText(text.text, text.x, text.y);
    }
}

export default TextDraw;