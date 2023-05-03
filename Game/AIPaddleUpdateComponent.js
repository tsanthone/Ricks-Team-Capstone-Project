// Update Component for the AI Paddle.

// Imports
import Component from "../Engine/Component.js";
import Time from "../Engine/Time.js";
import Constants from "./Constants.js";
import Game from "../Engine/Game.js";

class AIPaddleUpdateComponent extends Component{
    constructor(parent){
        super(parent);
        // The paddles move at a static velocity of 300.
        this.vel = 300;
    }

    update(){
        let paddle = this.parent.getComponent("Rectangle");
        let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
        let proposedY = paddle.y;

        // The "AI" that controls the paddle. If the ball is lower than the paddle then go down, if it is above then it go up.
        if((paddle.y + (paddle.h / 2)) > ball.y){
            proposedY -= this.vel * Time.secondsBetweenFrame;
        }
        if((paddle.y + (paddle.h / 2)) < ball.y){
            proposedY += this.vel * Time.secondsBetweenFrame;
        }

        // Prevents the paddle from going off the screen.
        if(proposedY > 0 && proposedY < Constants.maxY - paddle.h){
            paddle.y = proposedY;
        }
    }
}

export default AIPaddleUpdateComponent;