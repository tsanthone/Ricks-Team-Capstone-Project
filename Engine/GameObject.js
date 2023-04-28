/**
 * File: GameObject.js
 * Description: This is the file responsible for handeling the game objects in the game.
 */

class GameObject {

    /**
     * Function: constructor()
     * Description: This is the constructor for GameObject.js.
     */
    constructor() {
        this.components = [];
    }

    /**
     * Function: update()
     * Description: This is the update function for the GameObject.js.
     */
    update() {
        this.components.filter(c => c.update).forEach(c => c.update());
    }

    /**
     * Function: draw()
     * Description: This is the draw function for the GameObject.js to draw things on the canvas.
     */
    draw(ctx) {
        this.components.filter(c => c.draw).forEach(c => c.draw(ctx));
    }

    /**
     * Function: getComponent()
     * Description: This is the getComponent function for the GameObject.js to retrieve components.
     */
    getComponent(componentString) {
        return this.components.find(c => c.constructor.name == componentString);
    }
}

export default GameObject;