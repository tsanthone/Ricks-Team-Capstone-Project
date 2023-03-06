// Update component for the Controller game object.

import Component from "../Engine/Component.js";
import Game from "../Engine/Game.js";
import Input from "../Engine/Input.js";

class ControllerUpdateComponent extends Component{
    constructor(parent){
        super(parent);
    }

    update(){
        // If the player is on the start scene (currentSceneIndex of 0), and they press the "Enter" key, they should be sent to the play scene (currentSceneIndex of 1).
        if(Game.currentSceneIndex == 0 && Input.keys["Enter"] == true){
            Game.changeScene(Game.scenes.length - 1);
        }
    } 
}

export default ControllerUpdateComponent;