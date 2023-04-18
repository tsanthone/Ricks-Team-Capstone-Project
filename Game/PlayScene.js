// The play scene for the PONG game. This scene is where the actual gameplay will take place as well as progress to the end game screen.

import Scene from "../Engine/Scene.js";
import MidFieldBarGameObject from "./MidFieldBarGameObject.js";
import BallGameObject from "./BallGameObject.js";
import Constants from "./Constants.js";
import UserPaddleGameObject from "./UserPaddleGameObject.js";
import AIPaddleGameObject from "./AIPaddleGameObject.js";
import ScoreGameObject from "./ScoreGameObject.js";
import ControllerGameObject from "./ControllerGameObject.js";
import LensesToggle from "./LensesToggle.js";
import SceneLensGameObject from "./SceneLens-GameObject.js";
import TimeLensGameObject from "./TimeLens-GameObject.js";
import InputLensGameObject from "./InputLens-GameObject.js";
import ColliderLensGameObject from "./ColliderLens-GameObject.js";
import LayerLensGameObject from "./LayerLens-GameObject.js";

class PlayScene extends Scene {
    constructor() {
        super("Play Scene");
    }

    start() {
        // Add Mid-Field Bar
        let totalBars = 12;
        let midBarY = 20;
        for (let i = 0; i < totalBars; i++) {
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




        //////////////////    FOR TESTING     ////////////////////////
        this.gameObjects.push(new ControllerGameObject());



        //Lenses
        const canvas = document.querySelector('canvas');

        //Lenses
        if (LensesToggle.sceneLensToggle == true) {
            this.gameObjects.push(new SceneLensGameObject(canvas.width / 25, canvas.height * 9 / 10));
        }
        if (LensesToggle.timeLensToggle == true) {
            this.gameObjects.push(new TimeLensGameObject(canvas.width / 25, canvas.height * 9 / 10));
        }
        if (LensesToggle.inputLensToggle == true) {
            this.gameObjects.push(new InputLensGameObject(canvas.width / 25, canvas.height * 9 / 10));
        }
        if (LensesToggle.colliderLensToggle == true) {
            this.gameObjects.push(new ColliderLensGameObject(canvas.width / 25, canvas.height * 9 / 10));
        }
        if (LensesToggle.layerLensToggle == true) {
            this.gameObjects.push(new LayerLensGameObject(canvas.width / 25, canvas.height * 9 / 10));
        }
        if(LensesToggle.velocityLensToggle == true){
            let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
            let xVel = Game.FindByType("BallGameObject")[0].getComponent("BallUpdateComponent").xVel;
            let yVel = Game.FindByType("BallGameObject")[0].getComponent("BallUpdateComponent").yVel;
                      
            Game.scene().gameObjects.push(new VelocityLensX(ball.x, ball.y, 100 * (Math.abs(xVel) / 400), 10));
            Game.scene().gameObjects.push(new VelocityLensY(ball.x, ball.y, 10, 100 * (Math.abs(yVel) / 410)));   
          }
        if(LensesToggle.componentLensToggle == true){
            LensesToggle.componentLensToggle = true;
            let numGameObjects = Game.scene().gameObjects.length;
      
            for(let i = 0; i < numGameObjects; i++){
                let currentGameObject = Game.scene().gameObjects[i];
                let component;
                let validObject = false;
                let width;
                let height;
                let x;
                let y;
      
                if(typeof currentGameObject.components[0].w == "number"){
                    component = currentGameObject.getComponent("Rectangle");
                    width = component.w;
                    height = component.h;
                    x = component.x;
                    y = component.y
                    validObject = true;
                }
                else if(typeof currentGameObject.components[0].r == "number"){
                    component = currentGameObject.getComponent("Circle");
                    width = component.r * 2;
                    height = component.r * 2;
                    validObject = true;
                }
                else if(typeof currentGameObject.components[0].x == "number"){
                    component = currentGameObject.getComponent("Text");
                    width = 20;
                    height = 20;
                    x = component.x;
                    y = component.y;
                    validObject = true;
                }
                
                if(validObject){
                    let componentList = [];
      
                    for(let j = 0; j < currentGameObject.components.length; j++){
                        componentList.push(" " + currentGameObject.components[j].constructor.name);
                    }
      
                    Game.scene().gameObjects.push(new PointerGameObject(component.x, component.y, width, height, component));
                    Game.scene().gameObjects.push(new ComponentListGameObject(component.x + width, component.y, componentList, component));
                }
            }
          }
    }
}

export default PlayScene;