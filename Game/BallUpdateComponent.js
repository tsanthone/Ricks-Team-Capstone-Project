// Update Component for the PONG Ball game object.

import Component from "../Engine/Component.js";
import Time from "../Engine/Time.js";
import Constants from "./Constants.js";
import Game from "../Engine/Game.js";

class BallUpdateComponent extends Component{
    constructor(parent){
        super(parent);
        this.xVel = 350;
        this.yVel = 300;
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
            this.xVel *= -1;
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