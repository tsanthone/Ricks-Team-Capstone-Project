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
import GridOverlayGameObject from "./GridOverlayGameObject.js";
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

        //Cheats
        if (Input.keys["["] == true) {
          Game.userScore++;
        }
        if (Input.keys["]"] == true) {
          Game.aiScore++;
        }

    const canvas = document.querySelector("canvas"); //For canvas dimensions

    // If the player is on the start scene (currentSceneIndex of 0), and they press the "Enter" key, they should be sent to the play scene (currentSceneIndex of 1).
    if (Game.currentSceneIndex == 0 && Input.frameKeysDown["f"] == true || Input.frameKeysDown["F"] == true) {
      if (LensesToggle.controlsMenuToggle == false) {
        //Remove Main Menu
        LensesToggle.controlsMenuToggle = true;
        let startSceneTitle = Game.FindByType("StartSceneTitleGameObject")[0];
        startSceneTitle.markForDelete = true;
        let pressToStart = Game.FindByType("PressStartGameObject")[0];
        pressToStart.markForDelete = true;
        let pressForControls = Game.FindByType("PressForControlsGameObject")[0];
        pressForControls.markForDelete = true;

        //Add Controls
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 3 + 125, canvas.height / 10, "Controls"));
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 3 - 150, canvas.height / 5, "Game"));
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 3 + 600, canvas.height / 5, "Lenses"));
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 3 - 160, canvas.height / 5 + 250, "Cheats"));
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 2 - 150, canvas.height - canvas.height / 20, "Press F to go back"));


        //Game
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 8 + 100, canvas.height / 5 + 100, "↑ or W: Move Up"));
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 8 + 100, canvas.height / 5 + 150, "↓ or D : Move Down"));

        //Cheats
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 8 + 100, canvas.height / 5 + 350, "[ : Give Player Points"));
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 8 + 100, canvas.height / 5 + 400, "] : Give Bot Points"));


        //Lenses
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 8 + 900, canvas.height / 5 + 100, "1 : Scene Lens"));
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 8 + 900, canvas.height / 5 + 150, "2 : Time Lens"));
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 8 + 900, canvas.height / 5 + 200, "3 : Input Lens"));
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 8 + 900, canvas.height / 5 + 250, "4 : Velocity Lens"));
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 8 + 900, canvas.height / 5 + 300, "5 : Components Lens"));
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 8 + 900, canvas.height / 5 + 350, "6 : World Space Lens"));
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 8 + 900, canvas.height / 5 + 400, "7 : Object Space Lens"));
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 8 + 900, canvas.height / 5 + 450, "8 : Camera Space Lens"));
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 8 + 900, canvas.height / 5 + 500, "9 : Screen Space Lens"));
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 8 + 900, canvas.height / 5 + 550, "0 : Colliders Lens"));
        Game.scene().gameObjects.push(new ControlsGameObject(canvas.width / 8 + 900, canvas.height / 5 + 600, "- : Layers Lens"));





      }
      else {
        //Remove Controls
        LensesToggle.controlsMenuToggle = false;
        let controls = Game.FindByType("ControlsGameObject");
        for (let i = 0; i < controls.length; i++) {
          controls[i].markForDelete = true;
        }

        //Add Main Menu Back
        Game.scene().gameObjects.push(new PressForControlsGameObject(canvas.width / 2 - (canvas.width / 14), canvas.height / 2 + (canvas.height / 6)));
        Game.scene().gameObjects.push(new PressStartGameObject(canvas.width / 2 - (canvas.width / 9), canvas.height / 2 + (canvas.height / 11)));
        Game.scene().gameObjects.push(new StartSceneTitleGameObject(canvas.width / 2 - (canvas.width / 3), canvas.height / 2 - (canvas.height / 20)));
      }
    }

    //LENSES
    //Scene Lens
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

    //Time Lens
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

    //Input Lens
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

    // Velocities Lens
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

        Game.scene().gameObjects.push(
          new VelocityLensX(ball.x, ball.y, 100 * (Math.abs(xVel) / 400), 10)
        );
        Game.scene().gameObjects.push(
          new VelocityLensY(ball.x, ball.y, 10, 100 * (Math.abs(yVel) / 410))
        );
      } else if (LensesToggle.velocityLensToggle == true) {
        LensesToggle.velocityLensToggle = false;
        let velLensX = Game.FindByType("VelocityLensX")[0];
        let velLensY = Game.FindByType("VelocityLensY")[0];
        velLensX.markForDelete = true;
        velLensY.markForDelete = true;
      }
    }

    // Components Lens
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

    //Collider Lens
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
      //If the collider lens is already on, return the color settings back to default then delete the lens
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

    //Layer Lens
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

    //World Space
    if (Input.frameKeysDown["6"] == true) {
      if (LensesToggle.worldSpaceToggle == false) {
        //Turn off other lenses
        if (LensesToggle.objectSpaceToggle == true) {
          LensesToggle.objectSpaceToggle = false;
          let gridOverlay = Game.FindByType("GridOverlayGameObject")[0];
          if (gridOverlay) {
            gridOverlay.markForDelete = true;
          }

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
        }

        if (LensesToggle.cameraSpaceToggle == true) {
          LensesToggle.cameraSpaceToggle = false;
          let gridOverlay = Game.FindByType("GridOverlayGameObject")[0];
          if (gridOverlay) {
            gridOverlay.markForDelete = true;
          }

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
        }

        if (LensesToggle.screenSpaceToggle == true) {
          LensesToggle.screenSpaceToggle = false;
          let gridOverlay = Game.FindByType("GridOverlayGameObject")[0];
          if (gridOverlay) {
            gridOverlay.markForDelete = true;
          }

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
        }

        //Add lens
        LensesToggle.worldSpaceToggle = true;
        Game.scene().gameObjects.push(new GridOverlayGameObject());
        Game.scene().gameObjects.push(
          new OriginCoordinatesDisplayGameObject(10, 20)
        );
        let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
        if (ball) {
          Game.scene().gameObjects.push(
            new BallCoordinatesDisplayGameObject(ball, 15, -15, canvas.height) // Adjust offsets here
          );
        }
      } else if (LensesToggle.worldSpaceToggle == true) {
        LensesToggle.worldSpaceToggle = false;
        let gridOverlay = Game.FindByType("GridOverlayGameObject")[0];
        if (gridOverlay) {
          gridOverlay.markForDelete = true;
        }

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
      }
    }

    //Object Space
    if (Input.frameKeysDown["7"] == true) {
      if (LensesToggle.objectSpaceToggle == false) {
        //Turn off other lenses
        if (LensesToggle.worldSpaceToggle == true) {
          LensesToggle.worldSpaceToggle = false;
          let gridOverlay = Game.FindByType("GridOverlayGameObject")[0];
          if (gridOverlay) {
            gridOverlay.markForDelete = true;
          }

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
        }

        if (LensesToggle.cameraSpaceToggle == true) {
          LensesToggle.cameraSpaceToggle = false;
          let gridOverlay = Game.FindByType("GridOverlayGameObject")[0];
          if (gridOverlay) {
            gridOverlay.markForDelete = true;
          }

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
        }

        if (LensesToggle.screenSpaceToggle == true) {
          LensesToggle.screenSpaceToggle = false;
          let gridOverlay = Game.FindByType("GridOverlayGameObject")[0];
          if (gridOverlay) {
            gridOverlay.markForDelete = true;
          }

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
        }

        //Add new lens
        LensesToggle.objectSpaceToggle = true;
        Game.scene().gameObjects.push(new GridOverlayGameObject());
        let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
        Game.scene().gameObjects.push(
          new OriginCoordinatesObjectSpaceGameObject(ball, canvas.height, 10)
        );

        if (ball) {
          Game.scene().gameObjects.push(
            new BallCoordinateObjectSpaceGameObject(ball, 15, -15) // Adjust offsets here
          );
        }
      } else if (LensesToggle.objectSpaceToggle == true) {
        LensesToggle.objectSpaceToggle = false;
        let gridOverlay = Game.FindByType("GridOverlayGameObject")[0];
        if (gridOverlay) {
          gridOverlay.markForDelete = true;
        }

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
      }
    }

    //Camera Space
    if (Input.frameKeysDown["8"] == true) {
      if (LensesToggle.cameraSpaceToggle == false) {
        //Turn off other lenses
        if (LensesToggle.worldSpaceToggle == true) {
          LensesToggle.worldSpaceToggle = false;
          let gridOverlay = Game.FindByType("GridOverlayGameObject")[0];
          if (gridOverlay) {
            gridOverlay.markForDelete = true;
          }

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
        }

        if (LensesToggle.objectSpaceToggle == true) {
          LensesToggle.objectSpaceToggle = false;
          let gridOverlay = Game.FindByType("GridOverlayGameObject")[0];
          if (gridOverlay) {
            gridOverlay.markForDelete = true;
          }

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
        }

        if (LensesToggle.screenSpaceToggle == true) {
          LensesToggle.screenSpaceToggle = false;
          let gridOverlay = Game.FindByType("GridOverlayGameObject")[0];
          if (gridOverlay) {
            gridOverlay.markForDelete = true;
          }

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
        }

        //Add new lens
        LensesToggle.cameraSpaceToggle = true;
        Game.scene().gameObjects.push(new GridOverlayGameObject());
        let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
        Game.scene().gameObjects.push(
          new OriginCoordinatesCameraSpaceGameObject(
            canvas.width,
            canvas.height
          )
        );

        if (ball) {
          Game.scene().gameObjects.push(
            new BallCoordinatesCameraSpaceGameObject(
              ball,
              canvas.width,
              canvas.height
            ) // Adjust offsets here
          );
        }
      } else if (LensesToggle.cameraSpaceToggle == true) {
        LensesToggle.cameraSpaceToggle = false;
        let gridOverlay = Game.FindByType("GridOverlayGameObject")[0];
        if (gridOverlay) {
          gridOverlay.markForDelete = true;
        }

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
      }
    }

    //Screen Space
    if (Input.frameKeysDown["9"] == true) {
      if (LensesToggle.screenSpaceToggle == false) {
        //Turn off other lenses
        if (LensesToggle.worldSpaceToggle == true) {
          LensesToggle.worldSpaceToggle = false;
          let gridOverlay = Game.FindByType("GridOverlayGameObject")[0];
          if (gridOverlay) {
            gridOverlay.markForDelete = true;
          }

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
        }

        if (LensesToggle.cameraSpaceToggle == true) {
          LensesToggle.cameraSpaceToggle = false;
          let gridOverlay = Game.FindByType("GridOverlayGameObject")[0];
          if (gridOverlay) {
            gridOverlay.markForDelete = true;
          }

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
        }

        if (LensesToggle.objectSpaceToggle == true) {
          LensesToggle.cameraSpaceToggle = false;
          let gridOverlay = Game.FindByType("GridOverlayGameObject")[0];
          if (gridOverlay) {
            gridOverlay.markForDelete = true;
          }

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
        }

        //Add new lens
        LensesToggle.screenSpaceToggle = true;
        Game.scene().gameObjects.push(new GridOverlayGameObject());
        let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
        Game.scene().gameObjects.push(
          new OriginCoordinatesScreenSpaceGameObject(10)
        );

        if (ball) {
          Game.scene().gameObjects.push(
            new BallCoordinatesScreenSpaceGameObject(ball, 15, -15) // Adjust offsets here
          );
        }
      } else if (LensesToggle.screenSpaceToggle == true) {
        LensesToggle.screenSpaceToggle = false;
        let gridOverlay = Game.FindByType("GridOverlayGameObject")[0];
        if (gridOverlay) {
          gridOverlay.markForDelete = true;
        }

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
      }
    }
  }
}

export default ControllerUpdateComponent;
