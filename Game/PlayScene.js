// The play scene for the PONG game. This scene is where the actual gameplay will take place as well as progress to the end game screen.

import Scene from "../Engine/Scene.js";
import MidFieldBarGameObject from "./MidFieldBarGameObject.js";
import BallGameObject from "./BallGameObject.js";
import Constants from "./Constants.js";
import UserPaddleGameObject from "./UserPaddleGameObject.js";
import AIPaddleGameObject from "./AIPaddleGameObject.js";
import ScoreGameObject from "./ScoreGameObject.js";

class PlayScene extends Scene{
    constructor(){
        super("Play Scene");
    }

    start(){
        // Add Mid-Field Bar
        let totalBars = 12;
        let midBarY = 20;
        for(let i = 0; i < totalBars; i++){
            this.gameObjects.push(new MidFieldBarGameObject(midBarY));
            midBarY += 80; // Adds 2X the height of a mid field bar dash to the Y so that the next one is spread down.
        }

        // Add PONG Ball
        this.gameObjects.push(new BallGameObject(Constants.maxX / 2, Constants.maxY / 2));

        // Add Score
        this.gameObjects.push(new ScoreGameObject());

        // Add User Controlled Paddle
        this.gameObjects.push(new UserPaddleGameObject(40, 40));

        // Add AI Controlled Paddle
        this.gameObjects.push(new AIPaddleGameObject(Constants.maxX - 80, Constants.maxY - 215));
    }
}

export default PlayScene;