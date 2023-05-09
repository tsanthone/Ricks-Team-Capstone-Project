// Import the required classes from the engine
import GameObject from "../Engine/GameObject.js";
import Rectangle from "../Engine/Rectangle.js";
import RectangleDraw from "../Engine/RectangleDraw.js";
// Import the update component specific to the AI Paddle
import AIPaddleUpdateComponent from "./AIPaddleUpdateComponent.js";

// Define the AIPaddleGameObject class that extends (inherits from) the GameObject class
class AIPaddleGameObject extends GameObject{
    // The constructor function runs when a new instance of the class is created
    constructor(x, y){
        // Call the constructor method on the parent class (GameObject)
        super();
        // Define fixed dimensions for the paddle
        this.w = 40;
        this.h = 175;
        // Add a Rectangle component to the game object
        // This component will handle the geometry of the paddle
        this.components.push(new Rectangle(this, x, y, this.w, this.h));
        // Add a RectangleDraw component to the game object
        // This component will handle the rendering of the paddle
        this.components.push(new RectangleDraw(this, "white", "black"));
        // Add an AIPaddleUpdateComponent to the game object
        // This component will handle the behavior of the paddle
        this.components.push(new AIPaddleUpdateComponent(this));
    }
}

// Export the class so it can be imported and used in other files
export default AIPaddleGameObject;
