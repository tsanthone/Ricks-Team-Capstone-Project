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




        //LENSES
        const canvas = document.querySelector('canvas'); //For canvas dimensions

        //Scene Lens
        if (Input.frameKeysDown["1"] == true) {
            if (LensesToggle.sceneLensToggle == false) {
                LensesToggle.sceneLensToggle = true;
                Game.scene().gameObjects.push(new SceneLensGameObject(canvas.width / 10, canvas.height * 9 / 10));
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
                Game.scene().gameObjects.push(new TimeLensGameObject(canvas.width / 4, canvas.height * 9 / 10));
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
                Game.scene().gameObjects.push(new InputLensGameObject(canvas.width / 2, canvas.height * 9 / 10));
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