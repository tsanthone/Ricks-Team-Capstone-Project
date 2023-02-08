import Component from "./Component.js";

class Text extends Component{
    constructor(parent, x, y, text, font){
        super(parent);
        this.x = x;
        this.y = y;
        this.text = text;
        this.font = font;
    }
}

export default Text;