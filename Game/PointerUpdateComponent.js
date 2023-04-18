// Update component for the pointer game objects.

import Component from "../Engine/Component.js";
import Time from "../Engine/Time.js";
import Constants from "./Constants.js";
import Game from "../Engine/Game.js";

class PointerUpdateComponent extends Component{
    constructor(parent){
        super(parent);
    }

    update(){
        let object = this.parent.component;
        let pointer = this.parent.getComponent("Rectangle");
        let anchorX;
        let anchorY;

        if(typeof object.r == "number"){
            anchorX = object.x - object.r;
            anchorY = object.y - object.r;
        }
        else{
            anchorX = object.x;
            anchorY = object.y;
        }

        if(pointer.x != anchorX || pointer.y != anchorY){
            pointer.x = anchorX;
            pointer.y = anchorY;
        }
    }
}

export default PointerUpdateComponent;