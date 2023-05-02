/**
 * File: StartScene.js
 * Description: This file creates all the initial game objects for the main menu scene.
 */

// Imports
import Scene from "../Engine/Scene.js";
import ControllerGameObject from "./ControllerGameObject.js";
import PressStartGameObject from "./PressToStartGameObject.js";
import DotGameObject from "./Dot-GameObject.js";
import StartSceneTitleGameObject from "./StartSceneTitle-GameObject.js";
import LensesToggle from "./LensesToggle.js";
import SceneLensGameObject from "./SceneLens-GameObject.js";
import TimeLensGameObject from "./TimeLens-GameObject.js";
import InputLensGameObject from "./InputLens-GameObject.js";
import PressForControlsGameObject from "./PressForControls-GameObject.js";
import PointerGameObject from "./PointerGameObject.js";
import ComponentListGameObject from "./ComponentListGameObject.js";
import Game from "../Engine/Game.js";
import VelocityLensX from "./VelocityLensX.js";
import VelocityLensY from "./VelocityLensY.js";
import OriginCoordinatesObjectSpaceGameObject from "./OriginCoordinatesObjectSpaceGameObject.js";
import BallCoordinateObjectSpaceGameObject from "./BallCoordinateObjectSpaceGameObject.js";
import OriginCoordinatesCameraSpaceGameObject from "./OriginCoordinatesCameraSpaceGameObject.js";
import BallCoordinateCameraSpaceGameObject from "./BallCoordinatesCameraSpaceGameObject.js";
import BallCoordinatesScreenSpaceGameObject from "./BallCoordinatesScreenSpaceGameObject.js";
import OriginCoordinatesScreenSpaceGameObject from "./OriginCoordinatesScreenSpaceGameObject.js";

class StartScene extends Scene {

  /**
   * Function: constructor()
   * Description: This is the constructor for StartScene.js.
   */
  constructor() {
    super("Start Scene");
  }

  /**
  * Function: start()
  * Description: This function handles all actions that will start at the beginning of the main menu scene
  * such as game object creation.
  */
  start() {

    ////////// Utility //////////

    // Canvas Dimensions
    const canvas = document.querySelector("canvas");

    // Add Game Controller
    this.gameObjects.push(new ControllerGameObject());

    ////////// Background //////////

    // Add Background Dots
    for (var i = 0; i < 80; i++) {
      const color = `hsl(${Math.random() * 360}, 70%, 100%, 30%)`;
      this.gameObjects.push(
        new DotGameObject(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 10,
          color
        )
      );
    }
    for (var i = 0; i < 20; i++) {
      const color = `hsl(${Math.random() * 360}, 70%, 100%, 50%)`;
      this.gameObjects.push(
        new DotGameObject(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 200,
          color
        )
      );
    }

    ////////// Text //////////

    // Add Title
    this.gameObjects.push(new StartSceneTitleGameObject(canvas.width / 2 - (canvas.width / 3), canvas.height / 2 - (canvas.height / 20)));

    // Add Press ENTER To Start
    this.gameObjects.push(new PressStartGameObject(canvas.width / 2 - (canvas.width / 9), canvas.height / 2 + (canvas.height / 11)));

    // Add Press F For Controls
    this.gameObjects.push(new PressForControlsGameObject(canvas.width / 2 - (canvas.width / 14), canvas.height / 2 + (canvas.height / 6)));

    ////////// Lenses //////////
    //redraws active lenses

    // Redraw Scene Lens
    if (LensesToggle.sceneLensToggle == true) {
      this.gameObjects.push(
        new SceneLensGameObject(canvas.width / 25, (canvas.height * 9) / 10)
      );
    }

    // Redraw Time Lens
    if (LensesToggle.timeLensToggle == true) {
      this.gameObjects.push(
        new TimeLensGameObject(canvas.width / 25, (canvas.height * 9) / 10)
      );
    }

    // Redraw Input Lens
    if (LensesToggle.inputLensToggle == true) {
      this.gameObjects.push(
        new InputLensGameObject(canvas.width / 25, (canvas.height * 9) / 10)
      );
    }

    // Redraw Velocity Lens
    if (LensesToggle.velocityLensToggle == true) {
      let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
      let xVel = Game.FindByType("BallGameObject")[0].getComponent(
        "BallUpdateComponent"
      ).xVel;
      let yVel = Game.FindByType("BallGameObject")[0].getComponent(
        "BallUpdateComponent"
      ).yVel;

      Game.scene().gameObjects.push(
        new VelocityLensX(ball.x, ball.y, 100 * (Math.abs(xVel) / 400), 10)
      );
      Game.scene().gameObjects.push(
        new VelocityLensY(ball.x, ball.y, 10, 100 * (Math.abs(yVel) / 410))
      );
    }

    // Redraw Components Lens
    if (LensesToggle.componentLensToggle == true) {
      LensesToggle.componentLensToggle = true;
      let numGameObjects = Game.scene().gameObjects.length;

      for (let i = 0; i < numGameObjects; i++) {
        let currentGameObject = Game.scene().gameObjects[i];
        let component;
        let validObject = false;
        let width;
        let height;
        let x;
        let y;

        if (typeof currentGameObject.components[0].w == "number") {
          component = currentGameObject.getComponent("Rectangle");
          width = component.w;
          height = component.h;
          x = component.x;
          y = component.y;
          validObject = true;
        } else if (typeof currentGameObject.components[0].r == "number") {
          component = currentGameObject.getComponent("Circle");
          width = component.r * 2;
          height = component.r * 2;
          validObject = true;
        } else if (typeof currentGameObject.components[0].x == "number") {
          component = currentGameObject.getComponent("Text");
          width = 20;
          height = 20;
          x = component.x;
          y = component.y;
          validObject = true;
        }

        if (validObject) {
          let componentList = [];

          for (let j = 0; j < currentGameObject.components.length; j++) {
            componentList.push(
              " " + currentGameObject.components[j].constructor.name
            );
          }

          Game.scene().gameObjects.push(
            new PointerGameObject(
              component.x,
              component.y,
              width,
              height,
              component
            )
          );
          Game.scene().gameObjects.push(
            new ComponentListGameObject(
              component.x + width,
              component.y,
              componentList,
              component
            )
          );
        }
      }
    }

    // Redraw World Space Lens
    if (LensesToggle.worldSpaceToggle == true) {
      Game.scene().gameObjects.push(
        new OriginCoordinatesDisplayGameObject(10, 20)
      );
      let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
      if (ball) {
        Game.scene().gameObjects.push(
          new BallCoordinatesDisplayGameObject(ball, 15, -15) //adjust offsets here
        );
      }
    }

    // Redraw Object Space Lens
    if (LensesToggle.objectSpaceToggle == true) {
      let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
      Game.scene().gameObjects.push(
        new OriginCoordinatesObjectSpaceGameObject(ball, 10, 20, 10)
      );

      if (ball) {
        Game.scene().gameObjects.push(
          new BallCoordinateObjectSpaceGameObject(ball, 15, -15) //adjust offsets here
        );
      }
    }

    // Redraw Camera Space Lens
    if (LensesToggle.cameraSpaceToggle == true) {
      let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
      Game.scene().gameObjects.push(
        new OriginCoordinatesCameraSpaceGameObject(canvas.width, canvas.height)
      );

      if (ball) {
        Game.scene().gameObjects.push(
          new BallCoordinateCameraSpaceGameObject(
            ball,
            canvas.width,
            canvas.height
          ) //adjust offsets here
        );
      }
    }

    // Redraw Screen Space Lens
    if (LensesToggle.screenSpaceToggle == true) {
      let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
      Game.scene().gameObjects.push(
        new OriginCoordinatesScreenSpaceGameObject(10)
      );

      if (ball) {
        Game.scene().gameObjects.push(
          new BallCoordinatesScreenSpaceGameObject(ball, 15, -15) //adjust offsets here
        );
      }
    }
  }
}

export default StartScene;
