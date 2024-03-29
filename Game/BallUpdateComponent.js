// Update Component for the PONG Ball game object.

// Imports
import Component from "../Engine/Component.js";
import Time from "../Engine/Time.js";
import Constants from "./Constants.js";
import Game from "../Engine/Game.js";

class BallUpdateComponent extends Component{
    constructor(parent){
        super(parent);
        // Pseudo randomizes the x and y velocities of the ball as it is being created.
        this.xVel = (300 + Math.random() * 100) * (-1 + Math.round(Math.random()) * 2);
        this.yVel = (310 + Math.random() * 100) * (-1 + Math.round(Math.random()) * 2);
    }

    update(){
        let ball = this.parent.getComponent("Circle");
        let proposedX = ball.x;
        let proposedY = ball.y;
        let canMoveX = true;
        let canMoveY = true;
        let userPaddle = Game.FindByType("UserPaddleGameObject")[0].getComponent("Rectangle");
        let aiPaddle = Game.FindByType("AIPaddleGameObject")[0].getComponent("Rectangle");

        proposedX += this.xVel * Time.secondsBetweenFrame;
        proposedY += this.yVel * Time.secondsBetweenFrame;

        // Paddle Collisions
        if(proposedX < userPaddle.x + userPaddle.w + ball.r && (proposedY > userPaddle.y && proposedY < userPaddle.y + userPaddle.h)){
            canMoveX = false;
        }
        if(proposedX > aiPaddle.x - ball.r && (proposedY > aiPaddle.y && proposedY < aiPaddle.y + aiPaddle.h)){
            canMoveX = false;
        }

        // Screen Collisions
        if(proposedX > 0 + ball.r && proposedX < Constants.maxX - ball.r && canMoveX){
            ball.x = proposedX;
        }
        else{
            if(proposedX > 0 + ball.r + 70 && proposedX < Constants.maxX - ball.r - 70){
                this.xVel *= -1;
            }
            else if(proposedX < 0 + ball.r + 70){
                Game.aiScore++;
                Game.scene().restart();
            }
            else if(proposedX > Constants.maxX - ball.r - 70){
                Game.userScore++;
                Game.scene().restart();
            }
            
        }
        if(proposedY > 0 + ball.r && proposedY < Constants.maxY - ball.r && canMoveY){
            ball.y = proposedY;
        }
        else{
            this.yVel *= -1;
        }
    }
}

export default BallUpdateComponent;