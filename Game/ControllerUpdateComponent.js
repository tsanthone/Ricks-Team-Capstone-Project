/**
 * File: ControllerUpdateComponent.js
 * Description: This file handles all of the updates for the controller game object such as inputs, lenses, and
 * other features.
 */

// Imports
import Component from "../Engine/Component.js";
import Game from "../Engine/Game.js";
import Input from "../Engine/Input.js";
import Time from "../Engine/Time.js";
import LensesToggle from "./LensesToggle.js";
import SceneLensGameObject from "./SceneLens-GameObject.js";
import TimeLensGameObject from "./TimeLens-GameObject.js";
import InputLensGameObject from "./InputLens-GameObject.js";
import ControlsGameObject from "./Controls-GameObject.js";
import PressStartGameObject from "./PressToStartGameObject.js";
import StartSceneTitleGameObject from "./StartSceneTitle-GameObject.js";
import VelocityLensX from "./VelocityLensX.js";
import VelocityLensY from "./VelocityLensY.js";
import PointerGameObject from "./PointerGameObject.js";
import ComponentListGameObject from "./ComponentListGameObject.js";
import ColliderLensGameObject from "./ColliderLens-GameObject.js";
import LayerLensGameObject from "./LayerLens-GameObject.js";
import ReturnDefaultSettings from "./ReturnDefaultSettings.js";
import OriginCoordinatesDisplayGameObject from "./OriginCoordinatesDisplayGameObject.js";
import BallCoordinatesDisplayGameObject from "./BallCoordinatesDisplayGameObject.js";
import OriginCoordinatesObjectSpaceGameObject from "./OriginCoordinatesObjectSpaceGameObject.js";
import BallCoordinateObjectSpaceGameObject from "./BallCoordinateObjectSpaceGameObject.js";
import OriginCoordinatesCameraSpaceGameObject from "./OriginCoordinatesCameraSpaceGameObject.js";
import BallCoordinatesCameraSpaceGameObject from "./BallCoordinatesCameraSpaceGameObject.js";
import BallCoordinatesScreenSpaceGameObject from "./BallCoordinatesScreenSpaceGameObject.js";
import OriginCoordinatesScreenSpaceGameObject from "./OriginCoordinatesScreenSpaceGameObject.js";
import ScoreColliderGameObject from "./ScoreColliderGameObject.js";
import PressForControlsGameObject from "./PressForControls-GameObject.js";
import VelocityLensZ from "./VelocityLensZ.js";
import AIPaddleGameObject from "./AIPaddleGameObject.js";
import AIPaddleUpdateComponent from "./AIPaddleUpdateComponent.js";
import UserPaddleGameObject from "./UserPaddleGameObject.js";
import UserPaddleUpdateComponent from "./UserPaddleUpdateComponent.js";
import AIPaddleCoordinatesDisplay from "./AIPaddleCoordinatesDisplay.js";
import UserPaddleCoordinatesDisplay from "./UserPaddleCoordinatesDisplay.js";
import AIPaddleCoordinatesWorldSpace from "./AIPaddleCoordinatesWorldSPace.js";
import UserPaddleCoordinatesWorldSpace from "./UserPaddleCoordinatesWorldSpace.js";
import AIPaddleCoordinatesObjectSpace from "./AIPaddleCoordinatesObjectSpace.js";
import UserPaddleCoordinatesObjectSpace from "./UserPaddleCoordinatesObjectSpace.js";
import AIPaddleCoordinatesCameraSpace from "./AIPaddleCoordinatesCameraSpace.js";
import UserPaddleCoordinatesCameraSpace from "./UserPaddleCoordinatesCameraSpace.js";
import MouseCoordinatesDisplay from "./MouseCoordinatesDisplay.js";
import MouseCoordinatesCameraSpace from "./MouseCoordinatesCameraSpace.js";
import MouseCoordinatesObjectSpace from "./MouseCoordinatesObjectSpace.js";
import MouseCoordinatesScreenSpace from "./MouseCoordinatesScreenSpace.js";

class ControllerUpdateComponent extends Component {
  /**
   * Function: constructor()
   * Description: This is the constructor for ControllerUpdateComponent.js.
   * @param parent: parent
   */
  constructor(parent) {
    super(parent);
  }

  /**
   * Function: update()
   * Description: This is the update function for ControllerUpdateComponent.js which is called every tick, and
   * handles all the games inputs, lenses, and many other features within this function.
   */
  update() {
    ////////// Utility //////////

    //Canvas Dimensions
    const canvas = document.querySelector("canvas");

    ////////// Scene Management //////////

    // Main Menu to Play Scene
    if (Game.currentSceneIndex == 0 && Input.keys["Enter"] == true) {
      //if the player is on the start scene (currentSceneIndex of 0), and they press the "Enter" key,
      //they should be sent to the play scene (currentSceneIndex of 1).
      Game.changeScene(1);
    }

    // End Scene to Play Scene
    if (Game.currentSceneIndex == 2 && Input.keys["Enter"] == true) {
      //if the player is on the end scene (currentSceneIndex of 2), and they press the "Enter" key,
      //they should be sent to the play scene (currentSceneIndex of 1).
      Game.changeScene(1);
      Game.userScore = 0;
      Game.aiScore = 0;
    }

    // End Scene to Main Menu
    else if (Game.currentSceneIndex == 2 && Input.keys["Escape"] == true) {
      //if the player is on the end scene (currentSceneIndex of 2), and they press the "Escape" key,
      //they should be sent to the play scene (currentSceneIndex of 0).
      Game.changeScene(0);
      Game.userScore = 0;
      Game.aiScore = 0;
    }

    ////////// Cheats //////////

    // Give user points
    if (Input.keys["["] == true) {
      Game.userScore++;
    }

    // Give bot points
    if (Input.keys["]"] == true) {
      Game.aiScore++;
    }

    ////////// Pause //////////

    // Pause
    if (Input.frameKeysDown["p"] == true || Input.frameKeysDown["P"] == true) {
      if (LensesToggle.pause == false) {
        LensesToggle.pause = true;
        Time.secondsBetweenFrame = 0;

        if (Game.currentSceneIndex == 1) {
          //pause lens overlay
          Game.scene().gameObjects.push(
            new ControlsGameObject(canvas.width - 300, 30, "        Lenses")
          );
          Game.scene().gameObjects.push(
            new ControlsGameObject(canvas.width - 300, 60, "1 : Scene Lens")
          );
          Game.scene().gameObjects.push(
            new ControlsGameObject(canvas.width - 300, 80, "2 : Time Lens")
          );
          Game.scene().gameObjects.push(
            new ControlsGameObject(canvas.width - 300, 100, "3 : Input Lens")
          );
          Game.scene().gameObjects.push(
            new ControlsGameObject(canvas.width - 300, 120, "4 : Velocity Lens")
          );
          Game.scene().gameObjects.push(
            new ControlsGameObject(
              canvas.width - 300,
              140,
              "5 : Components Lens"
            )
          );
          Game.scene().gameObjects.push(
            new ControlsGameObject(
              canvas.width - 300,
              160,
              "6 : World Space Lens"
            )
          );
          Game.scene().gameObjects.push(
            new ControlsGameObject(
              canvas.width - 300,
              180,
              "7 : Object Space Lens"
            )
          );
          Game.scene().gameObjects.push(
            new ControlsGameObject(
              canvas.width - 300,
              200,
              "8 : Camera Space Lens"
            )
          );
          Game.scene().gameObjects.push(
            new ControlsGameObject(
              canvas.width - 300,
              220,
              "9 : Screen Space Lens"
            )
          );
          Game.scene().gameObjects.push(
            new ControlsGameObject(
              canvas.width - 300,
              240,
              "0 : Colliders Lens"
            )
          );
          Game.scene().gameObjects.push(
            new ControlsGameObject(canvas.width - 300, 260, "- : Layers Lens")
          );
          Game.scene().gameObjects.push(
            new ControlsGameObject(canvas.width - 300, 280, "p : Pause")
          );
        }
      } else {
        LensesToggle.pause = false;
        let controls = Game.FindByType("ControlsGameObject");
        for (let i = 0; i < controls.length; i++) {
          controls[i].markForDelete = true;
        }
        Time.secondsBetweenFrame = 0.01;
      }
    }

    ////////// Controls Menu //////////

    if (
      (Game.currentSceneIndex == 0 && Input.frameKeysDown["f"] == true) ||
      Input.frameKeysDown["F"] == true
    ) {
      if (LensesToggle.controlsMenuToggle == false) {
        //remove main menu gameObjects
        LensesToggle.controlsMenuToggle = true;
        let startSceneTitle = Game.FindByType("StartSceneTitleGameObject")[0];
        startSceneTitle.markForDelete = true;
        let pressToStart = Game.FindByType("PressStartGameObject")[0];
        pressToStart.markForDelete = true;
        let pressForControls = Game.FindByType("PressForControlsGameObject")[0];
        pressForControls.markForDelete = true;

        //add controls
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 3 + 125,
            canvas.height / 10,
            "Controls"
          )
        );
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 3 - 150,
            canvas.height / 5,
            "Game"
          )
        );
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 3 + 600,
            canvas.height / 5,
            "Lenses"
          )
        );
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 3 - 160,
            canvas.height / 5 + 250,
            "Cheats"
          )
        );
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 2 - 150,
            canvas.height - canvas.height / 20,
            "Press F to go back"
          )
        );

        //add game controls
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 8 + 100,
            canvas.height / 5 + 100,
            "↑ or W: Move Up"
          )
        );
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 8 + 100,
            canvas.height / 5 + 150,
            "↓ or D : Move Down"
          )
        );

        //add cheats controls
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 8 + 100,
            canvas.height / 5 + 350,
            "[ : Give Player Points"
          )
        );
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 8 + 100,
            canvas.height / 5 + 400,
            "] : Give Bot Points"
          )
        );
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 8 + 100,
            canvas.height / 5 + 450,
            "P : Pause"
          )
        );

        //add lens controls
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 8 + 900,
            canvas.height / 5 + 100,
            "1 : Scene Lens"
          )
        );
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 8 + 900,
            canvas.height / 5 + 150,
            "2 : Time Lens"
          )
        );
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 8 + 900,
            canvas.height / 5 + 200,
            "3 : Input Lens"
          )
        );
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 8 + 900,
            canvas.height / 5 + 250,
            "4 : Velocity Lens"
          )
        );
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 8 + 900,
            canvas.height / 5 + 300,
            "5 : Components Lens"
          )
        );
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 8 + 900,
            canvas.height / 5 + 350,
            "6 : World Space Lens"
          )
        );
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 8 + 900,
            canvas.height / 5 + 400,
            "7 : Object Space Lens"
          )
        );
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 8 + 900,
            canvas.height / 5 + 450,
            "8 : Camera Space Lens"
          )
        );
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 8 + 900,
            canvas.height / 5 + 500,
            "9 : Screen Space Lens"
          )
        );
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 8 + 900,
            canvas.height / 5 + 550,
            "0 : Colliders Lens"
          )
        );
        Game.scene().gameObjects.push(
          new ControlsGameObject(
            canvas.width / 8 + 900,
            canvas.height / 5 + 600,
            "- : Layers Lens"
          )
        );
      } else {
        //remove controls gameObjects
        LensesToggle.controlsMenuToggle = false;
        let controls = Game.FindByType("ControlsGameObject");
        for (let i = 0; i < controls.length; i++) {
          controls[i].markForDelete = true;
        }

        //add main menu gameObjects
        Game.scene().gameObjects.push(
          new PressForControlsGameObject(
            canvas.width / 2 - canvas.width / 14,
            canvas.height / 2 + canvas.height / 6
          )
        );
        Game.scene().gameObjects.push(
          new PressStartGameObject(
            canvas.width / 2 - canvas.width / 9,
            canvas.height / 2 + canvas.height / 11
          )
        );
        Game.scene().gameObjects.push(
          new StartSceneTitleGameObject(
            canvas.width / 2 - canvas.width / 3,
            canvas.height / 2 - canvas.height / 20
          )
        );
      }
    }

    ////////// Lenses //////////
    //adds lenses to scene

    // Add Scene Lens
    if (Input.frameKeysDown["1"] == true) {
      if (LensesToggle.sceneLensToggle == false) {
        LensesToggle.sceneLensToggle = true;
        Game.scene().gameObjects.push(
          new SceneLensGameObject(canvas.width / 25, (canvas.height * 9) / 10)
        );
      } else if (LensesToggle.sceneLensToggle == true) {
        LensesToggle.sceneLensToggle = false;
        let thisSceneLens = Game.FindByType("SceneLensGameObject")[0];
        thisSceneLens.markForDelete = true;
      }
    }

    // Add Time Lens
    if (Input.frameKeysDown["2"] == true) {
      if (LensesToggle.timeLensToggle == false) {
        LensesToggle.timeLensToggle = true;
        Game.scene().gameObjects.push(
          new TimeLensGameObject(canvas.width / 25, (canvas.height * 9) / 10)
        );
      } else if (LensesToggle.timeLensToggle == true) {
        LensesToggle.timeLensToggle = false;
        let thisTimeLens = Game.FindByType("TimeLensGameObject")[0];
        thisTimeLens.markForDelete = true;
      }
    }

    // Add Input Lens
    if (Input.frameKeysDown["3"] == true) {
      if (LensesToggle.inputLensToggle == false) {
        LensesToggle.inputLensToggle = true;
        Game.scene().gameObjects.push(
          new InputLensGameObject(canvas.width / 25, (canvas.height * 9) / 10)
        );
      } else if (LensesToggle.inputLensToggle == true) {
        LensesToggle.inputLensToggle = false;
        let thisInputLens = Game.FindByType("InputLensGameObject")[0];
        thisInputLens.markForDelete = true;
      }
    }

    // Add Velocities Lens
    if (Input.frameKeysDown["4"] == true) {
      if (LensesToggle.velocityLensToggle == false) {
        LensesToggle.velocityLensToggle = true;
        let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
        let xVel = Game.FindByType("BallGameObject")[0].getComponent(
          "BallUpdateComponent"
        ).xVel;
        let yVel = Game.FindByType("BallGameObject")[0].getComponent(
          "BallUpdateComponent"
        ).yVel;
        let xWidth = 100 * (Math.abs(xVel) / 400);
        let yHieght = 100 * (Math.abs(yVel) / 410);

        Game.scene().gameObjects.push(
          new VelocityLensX(ball.x, ball.y, xWidth, 10)
        );
        Game.scene().gameObjects.push(
          new VelocityLensY(ball.x, ball.y, 10, yHieght)
        );

        for (let i = 3; i < 10; i++) {
          Game.scene().gameObjects.push(
            new VelocityLensZ(ball.x, ball.y, 7.5, i / 10)
          );
        }
      } else if (LensesToggle.velocityLensToggle == true) {
        LensesToggle.velocityLensToggle = false;
        let velLensX = Game.FindByType("VelocityLensX")[0];
        let velLensY = Game.FindByType("VelocityLensY")[0];
        for (let i = 0; i < 7; i++) {
          let velLensZ = Game.FindByType("VelocityLensZ")[i];
          velLensZ.markForDelete = true;
        }

        velLensX.markForDelete = true;
        velLensY.markForDelete = true;
      }
    }

    // Add Components Lens
    if (Input.frameKeysDown["5"] == true) {
      if (LensesToggle.componentLensToggle == false) {
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
      } else if (LensesToggle.componentLensToggle == true) {
        LensesToggle.componentLensToggle = false;
        let numGameObjects = Game.FindByType("PointerGameObject").length;

        for (let i = 0; i < numGameObjects; i++) {
          let currentPointer = Game.FindByType("PointerGameObject")[i];
          let currentComponentList = Game.FindByType("ComponentListGameObject")[
            i
          ];
          currentPointer.markForDelete = true;
          currentComponentList.markForDelete = true;
        }
      }
    }

    // Add Collider Lens
    if (Input.frameKeysDown["0"] == true) {
      if (LensesToggle.colliderLensToggle == false) {
        LensesToggle.colliderLensToggle = true;
        Game.scene().gameObjects.push(
          new ColliderLensGameObject(
            canvas.width / 25,
            (canvas.height * 9) / 10
          )
        );
        Game.scene().gameObjects.push(new ScoreColliderGameObject());
      }
      //if the collider lens is already on, return the color settings back to default then delete the lens
      else if (LensesToggle.colliderLensToggle == true) {
        LensesToggle.colliderLensToggle = false;
        let thisColliderLens = Game.FindByType("ColliderLensGameObject")[0];
        let scoreCollider = Game.FindByType("ScoreColliderGameObject")[0];
        Game.scene().gameObjects.push(
          new ReturnDefaultSettings(canvas.width / 25, (canvas.height * 9) / 10)
        );
        thisColliderLens.markForDelete = true;
        scoreCollider.markForDelete = true;
      }
    }

    // Add Layer Lens
    if (Input.frameKeysDown["-"] == true) {
      if (LensesToggle.layerLensToggle == false) {
        LensesToggle.layerLensToggle = true;
        Game.scene().gameObjects.push(
          new LayerLensGameObject(canvas.width / 25, (canvas.height * 9) / 10)
        );
      } else if (LensesToggle.layerLensToggle == true) {
        LensesToggle.layerLensToggle = false;
        let thisLayerLens = Game.FindByType("LayerLensGameObject")[0];
        Game.scene().gameObjects.push(
          new ReturnDefaultSettings(canvas.width / 25, (canvas.height * 9) / 10)
        );
        thisLayerLens.markForDelete = true;
      }
    }

    // Add World Space Lens
    if (Input.frameKeysDown["6"] == true) {
      // If the world space lens is currently off
      if (LensesToggle.worldSpaceToggle == false) {
        // If the object space lens is currently on, turn it off and remove its related game objects
        if (LensesToggle.objectSpaceToggle == true) {
          LensesToggle.objectSpaceToggle = false;

          let originCoordinatesDisplay = Game.scene().gameObjects.find(
            (gameObject) =>
              gameObject instanceof OriginCoordinatesObjectSpaceGameObject
          );
          if (originCoordinatesDisplay) {
            originCoordinatesDisplay.markForDelete = true;
          }

          let ballCoordinatesDisplay = Game.FindByType(
            "BallCoordinateObjectSpaceGameObject"
          )[0];
          if (ballCoordinatesDisplay) {
            ballCoordinatesDisplay.markForDelete = true;
          }

          let aiPaddleCoordinatesObjectSpace = Game.FindByType(
            "AIPaddleCoordinatesObjectSpace"
          )[0];
          if (aiPaddleCoordinatesObjectSpace) {
            aiPaddleCoordinatesObjectSpace.markForDelete = true;
          }

          let userPaddleCoordinatesObjectSpace = Game.FindByType(
            "UserPaddleCoordinatesObjectSpace"
          )[0];
          if (userPaddleCoordinatesObjectSpace) {
            userPaddleCoordinatesObjectSpace.markForDelete = true;
          }
          let mouseObjectSpace = Game.FindByType(
            "MouseCoordinatesObjectSpace"
          )[0];
          if (mouseObjectSpace) {
            mouseObjectSpace.markForDelete = true;
          }
        }

        // If the camera space lens is currently on, turn it off and remove its related game objects

        if (LensesToggle.cameraSpaceToggle == true) {
          LensesToggle.cameraSpaceToggle = false;

          let originCoordinatesDisplay = Game.scene().gameObjects.find(
            (gameObject) =>
              gameObject instanceof OriginCoordinatesCameraSpaceGameObject
          );
          if (originCoordinatesDisplay) {
            originCoordinatesDisplay.markForDelete = true;
          }

          let ballCoordinatesDisplay = Game.FindByType(
            "BallCoordinatesCameraSpaceGameObject"
          )[0];
          if (ballCoordinatesDisplay) {
            ballCoordinatesDisplay.markForDelete = true;
          }
          let aiPaddleCoordinatesCameraSpace = Game.FindByType(
            "AIPaddleCoordinatesCameraSpace"
          )[0];
          if (aiPaddleCoordinatesCameraSpace) {
            aiPaddleCoordinatesCameraSpace.markForDelete = true;
          }

          let userPaddleCoordinatesCameraSpace = Game.FindByType(
            "UserPaddleCoordinatesCameraSpace"
          )[0];
          if (userPaddleCoordinatesCameraSpace) {
            userPaddleCoordinatesCameraSpace.markForDelete = true;
          }
          let mouseCameraSpace = Game.FindByType(
            "MouseCoordinatesCameraSpace"
          )[0];
          if (mouseCameraSpace) {
            mouseCameraSpace.markForDelete = true;
          }
        }

        // If the screen space lens is currently on, turn it off and remove its related game objects
        if (LensesToggle.screenSpaceToggle == true) {
          LensesToggle.screenSpaceToggle = false;

          let originCoordinatesDisplay = Game.scene().gameObjects.find(
            (gameObject) =>
              gameObject instanceof OriginCoordinatesScreenSpaceGameObject
          );
          if (originCoordinatesDisplay) {
            originCoordinatesDisplay.markForDelete = true;
          }

          let ballCoordinatesDisplay = Game.FindByType(
            "BallCoordinatesScreenSpaceGameObject"
          )[0];
          if (ballCoordinatesDisplay) {
            ballCoordinatesDisplay.markForDelete = true;
          }
          let aiPaddleCoordinatesDisplay = Game.FindByType(
            "AIPaddleCoordinatesDisplay"
          )[0];
          if (aiPaddleCoordinatesDisplay) {
            aiPaddleCoordinatesDisplay.markForDelete = true;
          }

          let userPaddleCoordinatesDisplay = Game.FindByType(
            "UserPaddleCoordinatesDisplay"
          )[0];
          if (userPaddleCoordinatesDisplay) {
            userPaddleCoordinatesDisplay.markForDelete = true;
          }
          let mouseScreenSpace = Game.FindByType(
            "MouseCoordinatesScreenSpace"
          )[0];
          if (mouseScreenSpace) {
            mouseScreenSpace.markForDelete = true;
          }
        }

        // Now we can turn on the world space lens and add its related game objects
        LensesToggle.worldSpaceToggle = true;
        //Origin Coordinates
        Game.scene().gameObjects.push(
          new OriginCoordinatesDisplayGameObject(10, 20)
        );
        //Ball Game Object
        let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
        if (ball) {
          Game.scene().gameObjects.push(
            new BallCoordinatesDisplayGameObject(ball, 15, -15, canvas.height) // Adjust offsets here
          );
        }

        //Paddle Coordinates
        let userPaddle = Game.FindByType(
          "UserPaddleGameObject"
        )[0].getComponent("Rectangle");
        let aiPaddle =
          Game.FindByType("AIPaddleGameObject")[0].getComponent("Rectangle");

        const aiPaddleCoordinatesWorldSpace = new AIPaddleCoordinatesWorldSpace(
          aiPaddle,
          canvas.height - 177
        );
        const userPaddleCoordinatesWorldSpace =
          new UserPaddleCoordinatesWorldSpace(userPaddle, canvas.height - 177);

        Game.scene().gameObjects.push(aiPaddleCoordinatesWorldSpace);
        Game.scene().gameObjects.push(userPaddleCoordinatesWorldSpace);

        //Mouse Coordinates
        const mouseCoordinatesDisplay = new MouseCoordinatesDisplay(
          canvas.width,
          canvas.height
        );
        Game.scene().gameObjects.push(mouseCoordinatesDisplay);
        // If the world space lens is currently on and the user pressed the key to toggle it off
      } else if (LensesToggle.worldSpaceToggle == true) {
        // Turn off the world space lens
        LensesToggle.worldSpaceToggle = false;

        // Remove all the game objects related to the world space lens

        let originCoordinatesDisplay = Game.scene().gameObjects.find(
          (gameObject) =>
            gameObject instanceof OriginCoordinatesDisplayGameObject
        );
        if (originCoordinatesDisplay) {
          originCoordinatesDisplay.markForDelete = true;
        }

        let ballCoordinatesDisplay = Game.FindByType(
          "BallCoordinatesDisplayGameObject"
        )[0];
        if (ballCoordinatesDisplay) {
          ballCoordinatesDisplay.markForDelete = true;
        }

        let aiPaddleCoordinatesWorldSpace = Game.FindByType(
          "AIPaddleCoordinatesWorldSpace"
        )[0];
        if (aiPaddleCoordinatesWorldSpace) {
          aiPaddleCoordinatesWorldSpace.markForDelete = true;
        }

        let userPaddleCoordinatesWorldSpace = Game.FindByType(
          "UserPaddleCoordinatesWorldSpace"
        )[0];
        if (userPaddleCoordinatesWorldSpace) {
          userPaddleCoordinatesWorldSpace.markForDelete = true;
        }

        let mouseWorldSpace = Game.FindByType("MouseCoordinatesDisplay")[0];
        if (mouseWorldSpace) {
          mouseWorldSpace.markForDelete = true;
        }
      }
    }

    // Add Object Space Lens
    if (Input.frameKeysDown["7"] == true) {
      // If the object space lens is currently off
      if (LensesToggle.objectSpaceToggle == false) {
        // If the world space lens is currently on, turn it off and remove its related game objects
        if (LensesToggle.worldSpaceToggle == true) {
          LensesToggle.worldSpaceToggle = false;

          let originCoordinatesDisplay = Game.scene().gameObjects.find(
            (gameObject) =>
              gameObject instanceof OriginCoordinatesDisplayGameObject
          );
          if (originCoordinatesDisplay) {
            originCoordinatesDisplay.markForDelete = true;
          }

          let ballCoordinatesDisplay = Game.FindByType(
            "BallCoordinatesDisplayGameObject"
          )[0];
          if (ballCoordinatesDisplay) {
            ballCoordinatesDisplay.markForDelete = true;
          }
          let aiPaddleCoordinatesWorldSpace = Game.FindByType(
            "AIPaddleCoordinatesWorldSpace"
          )[0];
          if (aiPaddleCoordinatesWorldSpace) {
            aiPaddleCoordinatesWorldSpace.markForDelete = true;
          }

          let userPaddleCoordinatesWorldSpace = Game.FindByType(
            "UserPaddleCoordinatesWorldSpace"
          )[0];
          if (userPaddleCoordinatesWorldSpace) {
            userPaddleCoordinatesWorldSpace.markForDelete = true;
          }
          let mouseWorldSpace = Game.FindByType("MouseCoordinatesDisplay")[0];
          if (mouseWorldSpace) {
            mouseWorldSpace.markForDelete = true;
          }
        }
        // If the camera space lens is currently on, turn it off and remove its related game objects
        if (LensesToggle.cameraSpaceToggle == true) {
          LensesToggle.cameraSpaceToggle = false;

          let originCoordinatesDisplay = Game.scene().gameObjects.find(
            (gameObject) =>
              gameObject instanceof OriginCoordinatesCameraSpaceGameObject
          );
          if (originCoordinatesDisplay) {
            originCoordinatesDisplay.markForDelete = true;
          }

          let ballCoordinatesDisplay = Game.FindByType(
            "BallCoordinatesCameraSpaceGameObject"
          )[0];
          if (ballCoordinatesDisplay) {
            ballCoordinatesDisplay.markForDelete = true;
          }
          let aiPaddleCoordinatesCameraSpace = Game.FindByType(
            "AIPaddleCoordinatesCameraSpace"
          )[0];
          if (aiPaddleCoordinatesCameraSpace) {
            aiPaddleCoordinatesCameraSpace.markForDelete = true;
          }

          let userPaddleCoordinatesCameraSpace = Game.FindByType(
            "UserPaddleCoordinatesCameraSpace"
          )[0];
          if (userPaddleCoordinatesCameraSpace) {
            userPaddleCoordinatesCameraSpace.markForDelete = true;
          }
          let mouseCameraSpace = Game.FindByType(
            "MouseCoordinatesCameraSpace"
          )[0];
          if (mouseCameraSpace) {
            mouseCameraSpace.markForDelete = true;
          }
        }
        // If the screen space lens is currently on, turn it off and remove its related game objects
        if (LensesToggle.screenSpaceToggle == true) {
          LensesToggle.screenSpaceToggle = false;

          let originCoordinatesDisplay = Game.scene().gameObjects.find(
            (gameObject) =>
              gameObject instanceof OriginCoordinatesScreenSpaceGameObject
          );
          if (originCoordinatesDisplay) {
            originCoordinatesDisplay.markForDelete = true;
          }

          let ballCoordinatesDisplay = Game.FindByType(
            "BallCoordinatesScreenSpaceGameObject"
          )[0];
          if (ballCoordinatesDisplay) {
            ballCoordinatesDisplay.markForDelete = true;
          }
          let aiPaddleCoordinatesDisplay = Game.FindByType(
            "AIPaddleCoordinatesDisplay"
          )[0];
          if (aiPaddleCoordinatesDisplay) {
            aiPaddleCoordinatesDisplay.markForDelete = true;
          }

          let userPaddleCoordinatesDisplay = Game.FindByType(
            "UserPaddleCoordinatesDisplay"
          )[0];
          if (userPaddleCoordinatesDisplay) {
            userPaddleCoordinatesDisplay.markForDelete = true;
          }
          let mouseScreenSpace = Game.FindByType(
            "MouseCoordinatesScreenSpace"
          )[0];
          if (mouseScreenSpace) {
            mouseScreenSpace.markForDelete = true;
          }
        }

        // Now we can turn on the object space lens and add its related game objects
        LensesToggle.objectSpaceToggle = true;
        //Ball Game Object
        let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
        //Add Origin Coordinates
        Game.scene().gameObjects.push(
          new OriginCoordinatesObjectSpaceGameObject(
            ball,
            canvas.width,
            canvas.height,
            10
          )
        );
        //Ball Coordiantes
        if (ball) {
          Game.scene().gameObjects.push(
            new BallCoordinateObjectSpaceGameObject(ball, 15, -15) //adjust offsets here
          );
        }

        //Paddle Coordiantes
        let userPaddle = Game.FindByType(
          "UserPaddleGameObject"
        )[0].getComponent("Rectangle");
        let aiPaddle =
          Game.FindByType("AIPaddleGameObject")[0].getComponent("Rectangle");

        const aiPaddleCoordinatesObjectSpace =
          new AIPaddleCoordinatesObjectSpace(
            aiPaddle,
            ball,
            canvas.height - 176
          );
        const userPaddleCoordinatesObjectSpace =
          new UserPaddleCoordinatesObjectSpace(userPaddle, ball, canvas.height);

        Game.scene().gameObjects.push(aiPaddleCoordinatesObjectSpace);
        Game.scene().gameObjects.push(userPaddleCoordinatesObjectSpace);

        //Mouse Cooordinates
        const mouseCoordinatesObjectSpace = new MouseCoordinatesObjectSpace(
          ball,
          canvas.width,
          canvas.height
        );
        Game.scene().gameObjects.push(mouseCoordinatesObjectSpace);
        // If the object space lens is currently on and the user pressed the key to toggle it off
      } else if (LensesToggle.objectSpaceToggle == true) {
        // Turn off the object space lens
        LensesToggle.objectSpaceToggle = false;
        // Remove all the game objects related to the world space lens
        let originCoordinatesDisplay = Game.scene().gameObjects.find(
          (gameObject) =>
            gameObject instanceof OriginCoordinatesObjectSpaceGameObject
        );
        if (originCoordinatesDisplay) {
          originCoordinatesDisplay.markForDelete = true;
        }

        let ballCoordinatesDisplay = Game.FindByType(
          "BallCoordinateObjectSpaceGameObject"
        )[0];
        if (ballCoordinatesDisplay) {
          ballCoordinatesDisplay.markForDelete = true;
        }

        let aiPaddleCoordinatesObjectSpace = Game.FindByType(
          "AIPaddleCoordinatesObjectSpace"
        )[0];
        if (aiPaddleCoordinatesObjectSpace) {
          aiPaddleCoordinatesObjectSpace.markForDelete = true;
        }

        let userPaddleCoordinatesObjectSpace = Game.FindByType(
          "UserPaddleCoordinatesObjectSpace"
        )[0];
        if (userPaddleCoordinatesObjectSpace) {
          userPaddleCoordinatesObjectSpace.markForDelete = true;
        }
        let mouseObjectSpace = Game.FindByType(
          "MouseCoordinatesObjectSpace"
        )[0];
        if (mouseObjectSpace) {
          mouseObjectSpace.markForDelete = true;
        }
      }
    }

    // Add Camera Space Lens
    if (Input.frameKeysDown["8"] == true) {
      // If the camera space lens is currently off
      if (LensesToggle.cameraSpaceToggle == false) {
        // If the world space lens is currently on, turn it off and remove its related game objects
        if (LensesToggle.worldSpaceToggle == true) {
          LensesToggle.worldSpaceToggle = false;

          let originCoordinatesDisplay = Game.scene().gameObjects.find(
            (gameObject) =>
              gameObject instanceof OriginCoordinatesDisplayGameObject
          );
          if (originCoordinatesDisplay) {
            originCoordinatesDisplay.markForDelete = true;
          }

          let ballCoordinatesDisplay = Game.FindByType(
            "BallCoordinatesDisplayGameObject"
          )[0];
          if (ballCoordinatesDisplay) {
            ballCoordinatesDisplay.markForDelete = true;
          }
          let aiPaddleCoordinatesWorldSpace = Game.FindByType(
            "AIPaddleCoordinatesWorldSpace"
          )[0];
          if (aiPaddleCoordinatesWorldSpace) {
            aiPaddleCoordinatesWorldSpace.markForDelete = true;
          }

          let userPaddleCoordinatesWorldSpace = Game.FindByType(
            "UserPaddleCoordinatesWorldSpace"
          )[0];
          if (userPaddleCoordinatesWorldSpace) {
            userPaddleCoordinatesWorldSpace.markForDelete = true;
          }
          let mouseWorldSpace = Game.FindByType("MouseCoordinatesDisplay")[0];
          if (mouseWorldSpace) {
            mouseWorldSpace.markForDelete = true;
          }
        }
        // If the object space lens is currently on, turn it off and remove its related game objects
        if (LensesToggle.objectSpaceToggle == true) {
          LensesToggle.objectSpaceToggle = false;

          let originCoordinatesDisplay = Game.scene().gameObjects.find(
            (gameObject) =>
              gameObject instanceof OriginCoordinatesObjectSpaceGameObject
          );
          if (originCoordinatesDisplay) {
            originCoordinatesDisplay.markForDelete = true;
          }

          let ballCoordinatesDisplay = Game.FindByType(
            "BallCoordinateObjectSpaceGameObject"
          )[0];
          if (ballCoordinatesDisplay) {
            ballCoordinatesDisplay.markForDelete = true;
          }

          let aiPaddleCoordinatesObjectSpace = Game.FindByType(
            "AIPaddleCoordinatesObjectSpace"
          )[0];
          if (aiPaddleCoordinatesObjectSpace) {
            aiPaddleCoordinatesObjectSpace.markForDelete = true;
          }

          let userPaddleCoordinatesObjectSpace = Game.FindByType(
            "UserPaddleCoordinatesObjectSpace"
          )[0];
          if (userPaddleCoordinatesObjectSpace) {
            userPaddleCoordinatesObjectSpace.markForDelete = true;
          }
          let mouseObjectSpace = Game.FindByType(
            "MouseCoordinatesObjectSpace"
          )[0];
          if (mouseObjectSpace) {
            mouseObjectSpace.markForDelete = true;
          }
        }
        // If the screen space lens is currently on, turn it off and remove its related game objects
        if (LensesToggle.screenSpaceToggle == true) {
          LensesToggle.screenSpaceToggle = false;

          let originCoordinatesDisplay = Game.scene().gameObjects.find(
            (gameObject) =>
              gameObject instanceof OriginCoordinatesScreenSpaceGameObject
          );
          if (originCoordinatesDisplay) {
            originCoordinatesDisplay.markForDelete = true;
          }

          let ballCoordinatesDisplay = Game.FindByType(
            "BallCoordinatesScreenSpaceGameObject"
          )[0];
          if (ballCoordinatesDisplay) {
            ballCoordinatesDisplay.markForDelete = true;
          }
          let aiPaddleCoordinatesDisplay = Game.FindByType(
            "AIPaddleCoordinatesDisplay"
          )[0];
          if (aiPaddleCoordinatesDisplay) {
            aiPaddleCoordinatesDisplay.markForDelete = true;
          }

          let userPaddleCoordinatesDisplay = Game.FindByType(
            "UserPaddleCoordinatesDisplay"
          )[0];
          if (userPaddleCoordinatesDisplay) {
            userPaddleCoordinatesDisplay.markForDelete = true;
          }
          let mouseScreenSpace = Game.FindByType(
            "MouseCoordinatesScreenSpace"
          )[0];
          if (mouseScreenSpace) {
            mouseScreenSpace.markForDelete = true;
          }
        }

        // Now we can turn on the camera space lens and add its related game objects
        LensesToggle.cameraSpaceToggle = true;
        let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
        //Origin coordinates
        Game.scene().gameObjects.push(
          new OriginCoordinatesCameraSpaceGameObject(
            canvas.width,
            canvas.height
          )
        );
        //Ball Coordinates
        if (ball) {
          Game.scene().gameObjects.push(
            new BallCoordinatesCameraSpaceGameObject(
              ball,
              canvas.width,
              canvas.height
            ) //adjust offsets here
          );
        }
        //Paddle coordinates
        let userPaddle = Game.FindByType(
          "UserPaddleGameObject"
        )[0].getComponent("Rectangle");
        let aiPaddle =
          Game.FindByType("AIPaddleGameObject")[0].getComponent("Rectangle");

        const aiPaddleCoordinatesCameraSpace =
          new AIPaddleCoordinatesCameraSpace(
            aiPaddle,
            canvas.width,
            canvas.height
          );
        const userPaddleCoordinatesCameraSpace =
          new UserPaddleCoordinatesCameraSpace(
            userPaddle,
            canvas.width,
            canvas.height
          );

        Game.scene().gameObjects.push(aiPaddleCoordinatesCameraSpace);
        Game.scene().gameObjects.push(userPaddleCoordinatesCameraSpace);
        //Mouse coordinates
        const mouseCoordinatesCameraSpace = new MouseCoordinatesCameraSpace(
          canvas.width,
          canvas.height
        );
        Game.scene().gameObjects.push(mouseCoordinatesCameraSpace);
        // If the camera space lens is currently on and the user pressed the key to toggle it off
      } else if (LensesToggle.cameraSpaceToggle == true) {
        LensesToggle.cameraSpaceToggle = false;
        // Remove all the game objects related to the camera space lens

        let originCoordinatesDisplay = Game.scene().gameObjects.find(
          (gameObject) =>
            gameObject instanceof OriginCoordinatesCameraSpaceGameObject
        );
        if (originCoordinatesDisplay) {
          originCoordinatesDisplay.markForDelete = true;
        }

        let ballCoordinatesDisplay = Game.FindByType(
          "BallCoordinatesCameraSpaceGameObject"
        )[0];
        if (ballCoordinatesDisplay) {
          ballCoordinatesDisplay.markForDelete = true;
        }

        let aiPaddleCoordinatesCameraSpace = Game.FindByType(
          "AIPaddleCoordinatesCameraSpace"
        )[0];
        if (aiPaddleCoordinatesCameraSpace) {
          aiPaddleCoordinatesCameraSpace.markForDelete = true;
        }

        let userPaddleCoordinatesCameraSpace = Game.FindByType(
          "UserPaddleCoordinatesCameraSpace"
        )[0];
        if (userPaddleCoordinatesCameraSpace) {
          userPaddleCoordinatesCameraSpace.markForDelete = true;
        }
        let mouseCameraSpace = Game.FindByType(
          "MouseCoordinatesCameraSpace"
        )[0];
        if (mouseCameraSpace) {
          mouseCameraSpace.markForDelete = true;
        }
      }
    }

    // Add Screen Space Lens
    if (Input.frameKeysDown["9"] == true) {
      // If the screen space lens is currently off
      if (LensesToggle.screenSpaceToggle == false) {
        // If the world space lens is currently on, turn it off and remove its related game objects
        if (LensesToggle.worldSpaceToggle == true) {
          LensesToggle.worldSpaceToggle = false;

          let originCoordinatesDisplay = Game.scene().gameObjects.find(
            (gameObject) =>
              gameObject instanceof OriginCoordinatesDisplayGameObject
          );
          if (originCoordinatesDisplay) {
            originCoordinatesDisplay.markForDelete = true;
          }

          let ballCoordinatesDisplay = Game.FindByType(
            "BallCoordinatesDisplayGameObject"
          )[0];
          if (ballCoordinatesDisplay) {
            ballCoordinatesDisplay.markForDelete = true;
          }
          let aiPaddleCoordinatesWorldSpace = Game.FindByType(
            "AIPaddleCoordinatesWorldSpace"
          )[0];
          if (aiPaddleCoordinatesWorldSpace) {
            aiPaddleCoordinatesWorldSpace.markForDelete = true;
          }

          let userPaddleCoordinatesWorldSpace = Game.FindByType(
            "UserPaddleCoordinatesWorldSpace"
          )[0];
          if (userPaddleCoordinatesWorldSpace) {
            userPaddleCoordinatesWorldSpace.markForDelete = true;
          }
          let mouseWorldSpace = Game.FindByType("MouseCoordinatesDisplay")[0];
          if (mouseWorldSpace) {
            mouseWorldSpace.markForDelete = true;
          }
        }
        // If the camera space lens is currently on, turn it off and remove its related game objects

        if (LensesToggle.cameraSpaceToggle == true) {
          LensesToggle.cameraSpaceToggle = false;

          let originCoordinatesDisplay = Game.scene().gameObjects.find(
            (gameObject) =>
              gameObject instanceof OriginCoordinatesCameraSpaceGameObject
          );
          if (originCoordinatesDisplay) {
            originCoordinatesDisplay.markForDelete = true;
          }

          let ballCoordinatesDisplay = Game.FindByType(
            "BallCoordinatesCameraSpaceGameObject"
          )[0];
          if (ballCoordinatesDisplay) {
            ballCoordinatesDisplay.markForDelete = true;
          }
          let aiPaddleCoordinatesCameraSpace = Game.FindByType(
            "AIPaddleCoordinatesCameraSpace"
          )[0];
          if (aiPaddleCoordinatesCameraSpace) {
            aiPaddleCoordinatesCameraSpace.markForDelete = true;
          }

          let userPaddleCoordinatesCameraSpace = Game.FindByType(
            "UserPaddleCoordinatesCameraSpace"
          )[0];
          if (userPaddleCoordinatesCameraSpace) {
            userPaddleCoordinatesCameraSpace.markForDelete = true;
          }
          let mouseCameraSpace = Game.FindByType(
            "MouseCoordinatesCameraSpace"
          )[0];
          if (mouseCameraSpace) {
            mouseCameraSpace.markForDelete = true;
          }
        }
        // If the object space lens is currently on, turn it off and remove its related game objects

        if (LensesToggle.objectSpaceToggle == true) {
          LensesToggle.cameraSpaceToggle = false;

          let originCoordinatesDisplay = Game.scene().gameObjects.find(
            (gameObject) =>
              gameObject instanceof OriginCoordinatesCameraSpaceGameObject
          );
          if (originCoordinatesDisplay) {
            originCoordinatesDisplay.markForDelete = true;
          }

          let ballCoordinatesDisplay = Game.FindByType(
            "BallCoordinatesCameraSpaceGameObject"
          )[0];
          if (ballCoordinatesDisplay) {
            ballCoordinatesDisplay.markForDelete = true;
          }

          let aiPaddleCoordinatesObjectSpace = Game.FindByType(
            "AIPaddleCoordinatesObjectSpace"
          )[0];
          if (aiPaddleCoordinatesObjectSpace) {
            aiPaddleCoordinatesObjectSpace.markForDelete = true;
          }

          let userPaddleCoordinatesObjectSpace = Game.FindByType(
            "UserPaddleCoordinatesObjectSpace"
          )[0];
          if (userPaddleCoordinatesObjectSpace) {
            userPaddleCoordinatesObjectSpace.markForDelete = true;
          }
          let mouseObjectSpace = Game.FindByType(
            "MouseCoordinatesObjectSpace"
          )[0];
          if (mouseObjectSpace) {
            mouseObjectSpace.markForDelete = true;
          }
        }

        // Turn on the world space lens
        LensesToggle.screenSpaceToggle = true;
        let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
        //Origin Coordinates
        Game.scene().gameObjects.push(
          new OriginCoordinatesScreenSpaceGameObject(10)
        );
        //Ball coordinates
        if (ball) {
          Game.scene().gameObjects.push(
            new BallCoordinatesScreenSpaceGameObject(ball, 15, -15) //adjust offsets here
          );
        }
        //Paddle coordinates
        let userPaddle = Game.FindByType(
          "UserPaddleGameObject"
        )[0].getComponent("Rectangle");
        let aiPaddle =
          Game.FindByType("AIPaddleGameObject")[0].getComponent("Rectangle");

        const aiPaddleCoordinatesDisplay = new AIPaddleCoordinatesDisplay(
          aiPaddle
        );
        const userPaddleCoordinatesDisplay = new UserPaddleCoordinatesDisplay(
          userPaddle
        );

        Game.scene().gameObjects.push(aiPaddleCoordinatesDisplay);
        Game.scene().gameObjects.push(userPaddleCoordinatesDisplay);
        //Mouse coordinates
        const mouseCoordinatesScreenSpace = new MouseCoordinatesScreenSpace(
          canvas.width,
          canvas.height
        );
        Game.scene().gameObjects.push(mouseCoordinatesScreenSpace);
        // If the screen space lens is currently on and the user pressed the key to toggle it off
      } else if (LensesToggle.screenSpaceToggle == true) {
        // Turn off the screen space lens
        LensesToggle.screenSpaceToggle = false;
        // Remove all the game objects related to the screen space lens
        let originCoordinatesDisplay = Game.scene().gameObjects.find(
          (gameObject) =>
            gameObject instanceof OriginCoordinatesScreenSpaceGameObject
        );
        if (originCoordinatesDisplay) {
          originCoordinatesDisplay.markForDelete = true;
        }

        let ballCoordinatesDisplay = Game.FindByType(
          "BallCoordinatesScreenSpaceGameObject"
        )[0];
        if (ballCoordinatesDisplay) {
          ballCoordinatesDisplay.markForDelete = true;
        }

        let aiPaddleCoordinatesDisplay = Game.FindByType(
          "AIPaddleCoordinatesDisplay"
        )[0];
        if (aiPaddleCoordinatesDisplay) {
          aiPaddleCoordinatesDisplay.markForDelete = true;
        }

        let userPaddleCoordinatesDisplay = Game.FindByType(
          "UserPaddleCoordinatesDisplay"
        )[0];
        if (userPaddleCoordinatesDisplay) {
          userPaddleCoordinatesDisplay.markForDelete = true;
        }
        let mouseScreenSpace = Game.FindByType(
          "MouseCoordinatesScreenSpace"
        )[0];
        if (mouseScreenSpace) {
          mouseScreenSpace.markForDelete = true;
        }
      }
    }
  }
}

export default ControllerUpdateComponent;
