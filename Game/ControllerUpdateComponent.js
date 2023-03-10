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
            Game.changeScene(1);
        }

        // If the player is on the end scene (currentSceneIndex of 2), and they press the "Enter" key, they should be sent to the play scene (currentSceneIndex of 1).
        if(Game.currentSceneIndex == 2 && Input.keys["Enter"] == true){
            Game.changeScene(1);
            Game.userScore = 0;
            Game.aiScore = 0;
        }
        // If the player is on the end scene (currentSceneIndex of 2), and they press the "Escape" key, they should be sent to the play scene (currentSceneIndex of 0).
        else if(Game.currentSceneIndex == 2 && Input.keys["Escape"] == true){
            Game.changeScene(0);
            Game.userScore = 0;
            Game.aiScore = 0;
        }




        //////////////////    FOR TESTING     ////////////////////////
        if(Input.keys["/"] == true){
            Game.changeScene(0);

        }
        if(Input.keys["*"] == true){
            Game.changeScene(1);
            Game.userScore = 0;
            Game.aiScore = 0;
        }
        if(Input.keys["-"] == true){
            Game.changeScene(2);
        }

        if(Input.keys["["] == true){
            Game.userScore++;
        }
        if(Input.keys["]"] == true){
            Game.aiScore++;
        }
    } 
}

export default ControllerUpdateComponent;