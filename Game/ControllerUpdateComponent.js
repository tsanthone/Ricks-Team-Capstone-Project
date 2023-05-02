// Update component for the Controller game object.

import Component from "../Engine/Component.js";
import Game from "../Engine/Game.js";
import Input from "../Engine/Input.js";
import Time from "../Engine/Time.js";
import Constants from "./Constants.js";
import LensesToggle from "./LensesToggle.js";
import SceneLensGameObject from "./SceneLens-GameObject.js";
import TimeLensGameObject from "./TimeLens-GameObject.js";
import InputLensGameObject from "./InputLens-GameObject.js";
import Scene from "../Engine/Scene.js";
import ControlsGameObject from "./Controls-GameObject.js";
import PressStartGameObject from "./PressToStartGameObject.js";
import StartSceneTitleGameObject from "./StartSceneTitle-GameObject.js";
import VelocityLensX from "./VelocityLensX.js";
import VelocityLensY from "./VelocityLensY.js";
import PointerGameObject from "./PointerGameObject.js";
import ComponentListGameObject from "./ComponentListGameObject.js";
import Rectangle from "../Engine/Rectangle.js";
import ColliderLensGameObject from "./ColliderLens-GameObject.js";
import LayerLensGameObject from "./LayerLens-GameObject.js";
import ReturnDefaultSettings from "./ReturnDefaultSettings.js";

class ControllerUpdateComponent extends Component {
    constructor(parent) {
        super(parent);
    }

    update() {
        // If the player is on the start scene (currentSceneIndex of 0), and they press the "Enter" key, they should be sent to the play scene (currentSceneIndex of 1).
        if (Game.currentSceneIndex == 0 && Input.keys["Enter"] == true) {
            Game.changeScene(1);
        }

        // If the player is on the end scene (currentSceneIndex of 2), and they press the "Enter" key, they should be sent to the play scene (currentSceneIndex of 1).
        if (Game.currentSceneIndex == 2 && Input.keys["Enter"] == true) {
            Game.changeScene(1);
            Game.userScore = 0;
            Game.aiScore = 0;
        }
        // If the player is on the end scene (currentSceneIndex of 2), and they press the "Escape" key, they should be sent to the play scene (currentSceneIndex of 0).
        else if (Game.currentSceneIndex == 2 && Input.keys["Escape"] == true) {
            Game.changeScene(0);
            Game.userScore = 0;
            Game.aiScore = 0;
        }




        //////////////////    FOR TESTING     ////////////////////////
        if (Input.keys["/"] == true) {
            Game.changeScene(0);

        }
        if (Input.keys["*"] == true) {
            Game.changeScene(1);
            Game.userScore = 0;
            Game.aiScore = 0;
        }
        if (Input.keys["-"] == true) {
            Game.changeScene(2);
        }

        if (Input.keys["["] == true) {
            Game.userScore++;
        }
        if (Input.keys["]"] == true) {
            Game.aiScore++;
        }

        // console.log(Game.scene(0).gameObjects)


        const canvas = document.querySelector('canvas'); //For canvas dimensions


        // let LensesToggle = false;
        // if (Input.frameKeysDown["Enter"] == true) { // && Scene.currentSceneIndex == 0
        //     console.log("WOWOWOWOWO")
        //     LensesToggle = !LensesToggle;
        //     if(LensesToggle == true)
        //     {
        //         let startSceneTitle = Game.FindByType("StartSceneTitleGameObject")[0];
        //         startSceneTitle.markForDelete = true;
        //         let pressToStart = Game.FindByType("PressStartGameObject")[0];
        //         pressToStart.markForDelete = true;
        //         Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 25, canvas.height * 9 / 10));
        //     }
        //     else
        //     {
        //         let controls = Game.FindByType("ControlsGameObject")[0];
        //         controls.markForDelete = true;
        //         Game.scene().gameObjects.push(new StartSceneTitleGameObject(canvas.width / 2 - (canvas.width / 3), canvas.height / 2 - (canvas.width / 20)));
        //         Game.scene().gameObjects.push(new PressStartGameObject(canvas.width / 2 - (canvas.width / 9), canvas.height / 2 + (canvas.width / 11)));

                
        //     }
        // }




        //LENSES
        //Scene Lens
        if (Input.frameKeysDown["1"] == true) {
            if (LensesToggle.sceneLensToggle == false) {
                LensesToggle.sceneLensToggle = true;
                Game.scene().gameObjects.push(new SceneLensGameObject(canvas.width / 25, canvas.height * 9 / 10));
            }
            else if (LensesToggle.sceneLensToggle == true) {
                LensesToggle.sceneLensToggle = false;
                let thisSceneLens = Game.FindByType("SceneLensGameObject")[0];
                thisSceneLens.markForDelete = true;
            }
        }

        //Time Lens
        if (Input.frameKeysDown["2"] == true) {
            if (LensesToggle.timeLensToggle == false) {
                LensesToggle.timeLensToggle = true;
                Game.scene().gameObjects.push(new TimeLensGameObject(canvas.width / 25, canvas.height * 9 / 10));
            }
            else if (LensesToggle.timeLensToggle == true) {
                LensesToggle.timeLensToggle = false;
                let thisTimeLens = Game.FindByType("TimeLensGameObject")[0];
                thisTimeLens.markForDelete = true;
            }
        }

        //Input Lens
        if (Input.frameKeysDown["3"] == true) {
            if (LensesToggle.inputLensToggle == false) {
                LensesToggle.inputLensToggle = true;
                Game.scene().gameObjects.push(new InputLensGameObject(canvas.width / 25, canvas.height * 9 / 10));
            }
            else if (LensesToggle.inputLensToggle == true) {
                LensesToggle.inputLensToggle = false;
                let thisInputLens = Game.FindByType("InputLensGameObject")[0];
                thisInputLens.markForDelete = true;
            }
        }

        // Velocities Lens
        if(Input.frameKeysDown["4"] == true){
            if(LensesToggle.velocityLensToggle == false){
                LensesToggle.velocityLensToggle = true;
                let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
                let xVel = Game.FindByType("BallGameObject")[0].getComponent("BallUpdateComponent").xVel;
                let yVel = Game.FindByType("BallGameObject")[0].getComponent("BallUpdateComponent").yVel;
                
                Game.scene().gameObjects.push(new VelocityLensX(ball.x, ball.y, 100 * (Math.abs(xVel) / 400), 10));
                Game.scene().gameObjects.push(new VelocityLensY(ball.x, ball.y, 10, 100 * (Math.abs(yVel) / 410)));
            }
            else if(LensesToggle.velocityLensToggle == true){
                LensesToggle.velocityLensToggle = false;
                let velLensX = Game.FindByType("VelocityLensX")[0];
                let velLensY = Game.FindByType("VelocityLensY")[0];
                velLensX.markForDelete = true;
                velLensY.markForDelete = true;
            }
        }

        // Components Lens
        if(Input.frameKeysDown["5"] == true){
            if(LensesToggle.componentLensToggle == false){
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
            else if(LensesToggle.componentLensToggle == true){
                LensesToggle.componentLensToggle = false;
                let numGameObjects = Game.FindByType("PointerGameObject").length;

                for(let i = 0; i < numGameObjects; i++){
                    let currentPointer = Game.FindByType("PointerGameObject")[i];
                    let currentComponentList = Game.FindByType("ComponentListGameObject")[i];
                    currentPointer.markForDelete = true;
                    currentComponentList.markForDelete = true;
                }
            }
        }
        //Collider Lens
        if (Input.frameKeysDown["c"] == true) {
            if (LensesToggle.colliderLensToggle == false) {
                LensesToggle.colliderLensToggle = true;
                Game.scene().gameObjects.push(new ColliderLensGameObject(canvas.width / 25, canvas.height * 9 / 10));
            }
            //If the collider lens is already on, return the color settings back to default then delete the lens
            else if (LensesToggle.colliderLensToggle == true) {
                LensesToggle.colliderLensToggle = false;
                let thisColliderLens = Game.FindByType("ColliderLensGameObject")[0];
                Game.scene().gameObjects.push(new ReturnDefaultSettings(canvas.width / 25, canvas.height * 9 / 10));
                thisColliderLens.markForDelete = true;
            }
        }

        //Layer Lens
        if (Input.frameKeysDown["l"] == true) {
            if (LensesToggle.layerLensToggle == false) {
                LensesToggle.layerLensToggle = true;
                Game.scene().gameObjects.push(new LayerLensGameObject(canvas.width / 25, canvas.height * 9 / 10));
            }
            //If the layer lens is already on, return the color settings back to default then delete the lens
            else if (LensesToggle.layerLensToggle == true) {
                LensesToggle.layerLensToggle = false;
                let thisLayerLens = Game.FindByType("LayerLensGameObject")[0];
                Game.scene().gameObjects.push(new ReturnDefaultSettings(canvas.width / 25, canvas.height * 9 / 10));
                thisLayerLens.markForDelete = true;
            }
        }
    }
}

export default ControllerUpdateComponent;