/**
 * File: Game.js
 * Description: This is the file responsible for game scenes of the game.
 */

class Game {

    //Fields
    static scenes = [];
    static currentSceneIndex = 0;
    static nextSceneIndex = -1;
    static userScore = 0;
    static aiScore = 0;

    /**
     * Function: scene()
     * Description: This function returns the scene of the current scene index
     * @returns the scene of the current scene index
     */
    static scene() {
        return Game.scenes[Game.currentSceneIndex];
    }

    /**
     * Function: FindByType()
     * Description: This is a function used to find gameobjects of a certain type and then returns them.
     * @param type: type of game object being searched for
     * @returns array of game objects of a specified type.
     */
    static FindByType(type) {
        return Game.scene().gameObjects.filter(g => g.constructor.name == type);
    }

    /**
     * Function: updateScene()
     * Description: This is a function used to update the scene
     */
    static updateScene() {
        if (Game.nextSceneIndex != -1) {
            Game.currentSceneIndex = Game.nextSceneIndex;
            Game.nextSceneIndex = -1;
            Game.scene().restart();
        }
    }

    /**
    * Function: changeScene()
    * Description: This is a function used to change the current game scene to the passed in scene index.
    * @param index: the index of the scene to change to.
    */
    static changeScene(index) {
        Game.nextSceneIndex = index;
    }
}

export default Game;