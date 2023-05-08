// Update component for the score game object.

import Component from "../Engine/Component.js";
import Game from "../Engine/Game.js";

class ScoreUpdateComponent extends Component{
    constructor(parent){
        super(parent);
    }

    update(){
        let text = this.parent.getComponent("Text");
        // Updates the score text to match the current game score.
        text.text = Game.userScore + "     " + Game.aiScore; 

        //Change scene to End Scene if either score is above 10
        if(Game.userScore >= 10 || Game.aiScore >= 10)
        {
            Game.changeScene(2);
        }
    }
}

export default ScoreUpdateComponent;