// Update Component for the PONG Ball game object.

import Component from "../Engine/Component.js";
import Time from "../Engine/Time.js";
import Constants from "./Constants.js";

class BallUpdateComponent extends Component{
    constructor(parent){
        super(parent);
        this.xVel = 200;
        this.yVel = 200;
    }

    update(){
        let ball = this.parent.getComponent("Circle");
        let proposedX = ball.x;
        let proposedY = ball.y;
        let canMoveX = true;
        let canMoveY = true;

        proposedX += this.xVel * Time.secondsBetweenFrame;
        proposedY += this.yVel * Time.secondsBetweenFrame;

        // Screen Collisions
        if(proposedX > 0 + ball.r && proposedX < Constants.maxX - ball.r){
            if(canMoveX){
                ball.x = proposedX;
            }
        }
        else{
            this.xVel *= -1;
        }
        if(proposedY > 0 + ball.r && proposedY < Constants.maxY - ball.r){
            if(canMoveY){
                ball.y = proposedY;
            }
        }
        else{
            this.yVel *= -1;
        }
    }
}

export default BallUpdateComponent;