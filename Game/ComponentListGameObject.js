// Game object class for the component list which displays the components at the pointer.

import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js";
import Constants from "./Constants.js";
import ComponentListUpdateComponent from "./ComponentListUpdateComponent.js";

class ComponentListGameObject extends GameObject{
    constructor(x, y, list, component){
        super();
        this.text = list;
        this.component = component;
        this.components.push(new Text(this, x, y, this.text, "10px sans"));
        this.components.push(new TextDraw(this, "red", "red"));
        this.components.push(new ComponentListUpdateComponent(this));
    }
}

export default ComponentListGameObject;