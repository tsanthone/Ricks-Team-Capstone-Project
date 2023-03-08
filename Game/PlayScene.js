// The play scene for the PONG game. This scene is where the actual gameplay will take place as well as progress to the end game screen.

import Scene from "../Engine/Scene.js";
import MidFieldBarGameObject from "./MidFieldBarGameObject.js";
import BallGameObject from "./BallGameObject.js";
import Constants from "./Constants.js";
import UserPaddleGameObject from "./UserPaddleGameObject.js";
// import AIPaddleGameObject from "./AIPaddleGameObject.js";
// import ScoreGameObject from "./ScoreGameObject.js";

class PlayScene extends Scene{
    constructor(){
        super("Play Scene");
    }

    start(){
        // Add Mid-Field Bar
        this.gameObjects.push(new MidFieldBarGameObject());

        // Add PONG Ball
        this.gameObjects.push(new BallGameObject(Constants.maxX / 2, Constants.maxY / 2));

        // Add User Controlled Paddle
        this.gameObjects.push(new UserPaddleGameObject(40, 40));
    }
}

export default PlayScene;