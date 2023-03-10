//Description: This is the StartScene.js file, this file contains the code for creation of the StartScene scene. To add a new scene you must 
//have it registered in the html file as a scene and add it into the scenes array.

import Scene from "../Engine/Scene.js"
import StartGameObject from "./StartSceneText-GameObject.js";
import ControllerGameObject from "./ControllerGameObject.js";
import PressStartGameObject from "./PressToStartGameObject.js";
import StartSceneDotGameObject from "./Dot-GameObject.js";
import StartSceneTitleGameObject from "./StartSceneTitle-GameObject.js";
import EndSceneResultGameObject from "./EndSceneResult-GameObject.js";
import EndSceneTextGameObject from "./EndSceneText-GameObject.js";
import Game from "../Engine/Game.js";
import Constants from "./Constants.js";

class EndScene extends Scene {
    constructor() {
        super("End Scene");
    }

    start() {
        const canvas = document.querySelector('canvas');

        //Result
        if (Game.userScore >= 10) {
            for (var i = 0; i < 80; i++) {
                const color = `hsl(${Math.random() * 360}, 100%, 60%, 70%)`;
                this.gameObjects.push(new StartSceneDotGameObject(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 10, color));
            }
            for (var i = 0; i < 20; i++) {
                const color = `hsl(${Math.random() * 360}, 100%, 60%, 70%)`;
                this.gameObjects.push(new StartSceneDotGameObject(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 200, color));
            }
            
            this.gameObjects.push(new EndSceneResultGameObject(canvas.width / 2 - (canvas.width / 3.52), canvas.height / 2 - (canvas.width / 20), "Winner!"));
        }
        else {
            for (var i = 0; i < 80; i++) {
                const color = `hsl(${Math.random() * 360}, 10%, 20%, 70%)`;
                this.gameObjects.push(new StartSceneDotGameObject(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 10, color));
            }
            for (var i = 0; i < 20; i++) {
                const color = `hsl(${Math.random() * 360}, 10%, 20%, 70%)`;
                this.gameObjects.push(new StartSceneDotGameObject(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 200, color));
            }

            this.gameObjects.push(new EndSceneResultGameObject(canvas.width / 2 - (canvas.width / 2.6), canvas.height / 2 - (canvas.width / 20), "Try Again?"));
        }

        this.gameObjects.push(new EndSceneTextGameObject(canvas.width / 2 - (canvas.width / 4.2), canvas.height / 2 + (canvas.width / 20)));

        // //Press SPACE To Start
        // this.gameObjects.push(new PressStartGameObject(canvas.width / 2 - 250, canvas.height / 2 + 200));

        //Controller
        this.gameObjects.push(new ControllerGameObject());
    }
}

export default EndScene;