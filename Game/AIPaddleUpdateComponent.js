// Update Component for the AI Paddle.

import Component from "../Engine/Component.js";
import Time from "../Engine/Time.js";
import Constants from "./Constants.js";
import Game from "../Engine/Game.js";

class AIPaddleUpdateComponent extends Component{
    constructor(parent){
        super(parent);
        this.vel = 300;
    }

    update(){
        let paddle = this.parent.getComponent("Rectangle");
        let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
        let proposedY = paddle.y;

        if((paddle.y + (paddle.h / 2)) > ball.y){
            proposedY -= this.vel * Time.secondsBetweenFrame;
        }
        if((paddle.y + (paddle.h / 2)) < ball.y){
            proposedY += this.vel * Time.secondsBetweenFrame;
        }

        if(proposedY > 0 && proposedY < Constants.maxY - paddle.h){
            paddle.y = proposedY;
        }
    }
}

export default AIPaddleUpdateComponent;