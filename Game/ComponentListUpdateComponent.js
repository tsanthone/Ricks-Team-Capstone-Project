// Update component for the component list game objects.

import Component from "../Engine/Component.js";
import Time from "../Engine/Time.js";
import Constants from "./Constants.js";
import Game from "../Engine/Game.js";

class ComponentListUpdateComponent extends Component{
    constructor(parent){
        super(parent);
    }

    update(){
        let object = this.parent.component;
        let text = this.parent.getComponent("Text");
        let anchorX;
        let anchorY;

        // If the object has a radius value, it is a circle and the outline goes around the circle.
        if(typeof object.r == "number"){
            anchorX = object.x + object.r + 3;
            anchorY = object.y - object.r + 10;
        }
        // If the object has a width value, it is a rectangle and the outline goes around the rectangle.
        else if(typeof object.w == "number"){
            anchorX = object.x + object.w + 3;
            anchorY = object.y + 10; 
        }
        // If it has neither of those values, then it is a text object and the outline goes around the bottom left corner.
        else{
            anchorX = object.x + 23;
            anchorY = object.y + 10;
        }

        // Check to make sure that the outline moves with each object.
        if(text.x != anchorX || text.y != anchorY){
            text.x = anchorX;
            text.y = anchorY;
        }
    }
}

export default ComponentListUpdateComponent;