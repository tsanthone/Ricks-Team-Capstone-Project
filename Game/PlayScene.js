/**
 * File: PlayScene.js
 * Description: This file creates all the initial game objects for the play scene of the pong game which is
 * the scene the game of pong is played in.
 */

// Imports
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
import PointerGameObject from "./PointerGameObject.js";
import ComponentListGameObject from "./ComponentListGameObject.js";
import Game from "../Engine/Game.js";
import VelocityLensX from "./VelocityLensX.js";
import VelocityLensY from "./VelocityLensY.js";
import OriginCoordinatesDisplayGameObject from "./OriginCoordinatesDisplayGameObject.js";
import BallCoordinatesDisplayGameObject from "./BallCoordinatesDisplayGameObject.js";
import OriginCoordinatesObjectSpaceGameObject from "./OriginCoordinatesObjectSpaceGameObject.js";
import BallCoordinateObjectSpaceGameObject from "./BallCoordinateObjectSpaceGameObject.js";
import OriginCoordinatesCameraSpaceGameObject from "./OriginCoordinatesCameraSpaceGameObject.js";
import BallCoordinateCameraSpaceGameObject from "./BallCoordinatesCameraSpaceGameObject.js";
import BallCoordinatesScreenSpaceGameObject from "./BallCoordinatesScreenSpaceGameObject.js";
import OriginCoordinatesScreenSpaceGameObject from "./OriginCoordinatesScreenSpaceGameObject.js";
import VelocityLensZ from "./VelocityLensZ.js";
import AIPaddleCoordinatesDisplay from "./AIPaddleCoordinatesDisplay.js";
import UserPaddleCoordinatesDisplay from "./UserPaddleCoordinatesDisplay.js";
import UserPaddleCoordinatesWorldSpace from "./UserPaddleCoordinatesWorldSpace.js";
import AIPaddleCoordinatesWorldSpace from "./AIPaddleCoordinatesWorldSPace.js";
import UserPaddleCoordinatesObjectSpace from "./UserPaddleCoordinatesObjectSpace.js";
import AIPaddleCoordinatesObjectSpace from "./AIPaddleCoordinatesObjectSpace.js";
import AIPaddleCoordinatesCameraSpace from "./AIPaddleCoordinatesCameraSpace.js";
import UserPaddleCoordinatesCameraSpace from "./UserPaddleCoordinatesCameraSpace.js";
import MouseCoordinatesDisplay from "./MouseCoordinatesDisplay.js";
import MouseCoordinatesCameraSpace from "./MouseCoordinatesCameraSpace.js";
import MouseCoordinatesObjectSpace from "./MouseCoordinatesObjectSpace.js";
import MouseCoordinatesScreenSpace from "./MouseCoordinatesScreenSpace.js";

class PlayScene extends Scene {

  /**
  * Function: constructor()
  * Description: This is the constructor for PlayScene.js.
  */
  constructor() {
    super("Play Scene");
  }

  /**
  * Function: start()
  * Description: This function handles all actions that will start at the beginning of the play scene
  * such as game object creation.
  */
  start() {

    ////////// Utility //////////

    // Canvas Dimensions
    const canvas = document.querySelector("canvas");

    // Add Game Controller
    this.gameObjects.push(new ControllerGameObject());

    ////////// Game //////////

    // Add Mid-Field Bar
    let totalBars = 12;
    let midBarY = 20;
    for (let i = 0; i < totalBars; i++) {
      this.gameObjects.push(new MidFieldBarGameObject(midBarY));
      midBarY += 80; //adds 2X the height of a mid field bar dash to the Y so that the next one is spread down.
    }

    // Add Pong Ball
    this.gameObjects.push(
      new BallGameObject(Constants.maxX / 2, Constants.maxY / 2)
    );

    // Add Score
    this.gameObjects.push(new ScoreGameObject());

    // Add User Controlled Paddle
    this.gameObjects.push(new UserPaddleGameObject(40, 40));

    // Add AI Controlled Paddle
    this.gameObjects.push(
      new AIPaddleGameObject(Constants.maxX - 80, Constants.maxY - 215)
    );

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
    // Redraw Collider Lens
    if (LensesToggle.colliderLensToggle == true) {
      this.gameObjects.push(
        new ColliderLensGameObject(canvas.width / 25, (canvas.height * 9) / 10)
      );
    }
    // Redraw Layer Lens
    if (LensesToggle.layerLensToggle == true) {
      this.gameObjects.push(
        new LayerLensGameObject(canvas.width / 25, (canvas.height * 9) / 10)
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
      for (let i = 3; i < 10; i++) {
        Game.scene().gameObjects.push(new VelocityLensZ(ball.x, ball.y, 7.5, i / 10));
      }
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

      let userPaddle = Game.FindByType("UserPaddleGameObject")[0].getComponent("Rectangle");
      let aiPaddle = Game.FindByType("AIPaddleGameObject")[0].getComponent("Rectangle");

      const aiPaddleCoordinatesWorldSpace = new AIPaddleCoordinatesWorldSpace(aiPaddle, canvas.height - 176);
      const userPaddleCoordinatesWorldSpace = new UserPaddleCoordinatesWorldSpace(userPaddle, canvas.height - 176);
      
     Game.scene().gameObjects.push(aiPaddleCoordinatesWorldSpace);
     Game.scene().gameObjects.push(userPaddleCoordinatesWorldSpace);

     const mouseCoordinatesDisplay = new MouseCoordinatesDisplay(canvas.width, canvas.height);
     Game.scene().gameObjects.push(mouseCoordinatesDisplay);

    }

    // Redraw Object Space Lens
    if (LensesToggle.objectSpaceToggle == true) {
      let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
      Game.scene().gameObjects.push(
        new OriginCoordinatesObjectSpaceGameObject(ball, canvas.width, canvas.height, 10)
      );

      if (ball) {
        Game.scene().gameObjects.push(
          new BallCoordinateObjectSpaceGameObject(ball, 15, -15) //adjust offsets here
        );
      }

      let userPaddle = Game.FindByType("UserPaddleGameObject")[0].getComponent("Rectangle");
      let aiPaddle = Game.FindByType("AIPaddleGameObject")[0].getComponent("Rectangle");

      const aiPaddleCoordinatesObjectSpace = new AIPaddleCoordinatesObjectSpace(aiPaddle, ball, canvas.height - 176);
      const userPaddleCoordinatesObjectSpace = new UserPaddleCoordinatesObjectSpace(userPaddle, ball, canvas.height - 176);

      Game.scene().gameObjects.push(aiPaddleCoordinatesObjectSpace);
      Game.scene().gameObjects.push(userPaddleCoordinatesObjectSpace);

      const mouseCoordinatesObjectSpace = new MouseCoordinatesObjectSpace(
        ball,
        canvas.width,
        canvas.height
      );
      Game.scene().gameObjects.push(mouseCoordinatesObjectSpace);
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

      let userPaddle = Game.FindByType("UserPaddleGameObject")[0].getComponent("Rectangle");
      let aiPaddle = Game.FindByType("AIPaddleGameObject")[0].getComponent("Rectangle");

      const aiPaddleCoordinatesCameraSpace = new AIPaddleCoordinatesCameraSpace(aiPaddle, canvas.width, canvas.height);
      const userPaddleCoordinatesCameraSpace = new UserPaddleCoordinatesCameraSpace(userPaddle, canvas.width, canvas.height);

      Game.scene().gameObjects.push(aiPaddleCoordinatesCameraSpace);
      Game.scene().gameObjects.push(userPaddleCoordinatesCameraSpace);

      const mouseCoordinatesCameraSpace = new MouseCoordinatesCameraSpace(canvas.width, canvas.height);
      Game.scene().gameObjects.push(mouseCoordinatesCameraSpace);
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

      let userPaddle = Game.FindByType("UserPaddleGameObject")[0].getComponent("Rectangle");
      let aiPaddle = Game.FindByType("AIPaddleGameObject")[0].getComponent("Rectangle");

      const aiPaddleCoordinatesDisplay = new AIPaddleCoordinatesDisplay(aiPaddle);
      const userPaddleCoordinatesDisplay = new UserPaddleCoordinatesDisplay(userPaddle);

      Game.scene().gameObjects.push(aiPaddleCoordinatesDisplay);
      Game.scene().gameObjects.push(userPaddleCoordinatesDisplay);

      const mouseCoordinatesScreenSpace = new MouseCoordinatesScreenSpace(
        canvas.width,
        canvas.height
      );
      Game.scene().gameObjects.push(mouseCoordinatesScreenSpace);
    }
  }
}

export default PlayScene;
