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

        console.log(Game.scene(0).gameObjects)


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
    }
}

export default ControllerUpdateComponent;