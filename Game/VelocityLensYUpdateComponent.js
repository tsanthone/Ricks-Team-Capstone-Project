// Update component for the Y velocity lens.

import Component from "../Engine/Component.js";
import Time from "../Engine/Time.js";
import Constants from "./Constants.js";
import Game from "../Engine/Game.js";

class VelocityLensYUpdateComponent extends Component{
    constructor(parent){
        super(parent);
    }

    update(){
        let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
        let xVel = Game.FindByType("BallGameObject")[0].getComponent("BallUpdateComponent").xVel;
        let yVel = Game.FindByType("BallGameObject")[0].getComponent("BallUpdateComponent").yVel;
        let rect = this.parent.getComponent("Rectangle");
        let anchor;

        // Sets the anchor at whatever the balls y value is minus its r value and the height of the y velocity bar.
        anchor = ball.y - rect.h - ball.r;

        // Check to make sure that the y velocity bar moves with the ball.
        if(rect.y != anchor || rect.x != ball.x - 5){
            rect.y = anchor;
            rect.x = ball.x - 5;
        }
    }
}

export default VelocityLensYUpdateComponent;