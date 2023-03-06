// The play scene for the PONG game. This scene is where the actual gameplay will take place as well as progress to the end game screen.

import Scene from "../Engine/Scene.js";
import MidFieldBarGameObject from "./MidFieldBarGameObject.js";
// import BallGameObject from "./BallGameObject.jsf";
// import UserPaddleGameObject from "./UserPaddleGameObject.js";
// import AIPaddleGameObject from "./AIPaddleGameObject.js";
// import ScoreGameObject from "./ScoreGameObject.js";
import Constants from "./Constants.js";

class PlayScene extends Scene{
    constructor(){
        super("Play Scene");
    }

    start(){
        // Add Mid-Field Bar
        this.gameObjects.push(new MidFieldBarGameObject((Constants.maxX / 2) - (Constants.midFieldBarHeight / 2), 0));
    }
}

export default PlayScene;