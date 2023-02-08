import Component from "./Component.js";

class Circle extends Component{
    constructor(parent, x, y, r){
        super(parent);
        this.x = x;
        this.y = y;
        this.r = r;
    }
}

export default Circle;