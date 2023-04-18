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

        if(typeof object.r == "number"){
            anchorX = object.x + object.r + 3;
            anchorY = object.y - object.r + 10;
        }
        else if(typeof object.w == "number"){
            anchorX = object.x + object.w + 3;
            anchorY = object.y + 10; 
        }
        else{
            anchorX = object.x + 23;
            anchorY = object.y + 10;
        }

        if(text.x != anchorX || text.y != anchorY){
            text.x = anchorX;
            text.y = anchorY;
        }
    }
}

export default ComponentListUpdateComponent;