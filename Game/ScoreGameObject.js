// Game object for the text displaying the scores (user and AI).

import Game from "../Engine/Game.js";
import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js";
import Constants from "./Constants.js";
import ScoreUpdateComponent from "./ScoreUpdateComponent.js";

class ScoreGameObject extends GameObject{
    constructor(){
        super();
        this.components.push(new Text(this, (Constants.maxX / 2) - 77, 70, Game.userScore + "     " + Game.aiScore, "70px sans"));
        this.components.push(new TextDraw(this, "white", "white"));
        this.components.push(new ScoreUpdateComponent(this));
    }
}

export default ScoreGameObject;