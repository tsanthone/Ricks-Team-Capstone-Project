import Component from "./Component.js";

class TextDraw extends Component {
    constructor(parent, fillStyle, strokeStyle) {
        super(parent);
        this.fillStyle = fillStyle;
        this.strokeStyle = strokeStyle;

        //Edit to allow alpha transormations
        this.alpha = 1;
        this.globalAlpha = 1;
    }

    draw(ctx) {
        //Edit to allow alpha transormations
        ctx.save();
        let textDrawAlpha = this.parent.getComponent("TextDraw");
        ctx.globalAlpha = textDrawAlpha.alpha;


        let text = this.parent.getComponent("Text");

        ctx.fillStyle = this.fillStyle;
        ctx.strokeStyle = this.strokeStyle;
        ctx.font = text.font;

        ctx.fillText(text.text, text.x, text.y);
        ctx.strokeText(text.text, text.x, text.y);

        //Edit to allow alpha transormations
        ctx.restore()
    }
}

export default TextDraw;