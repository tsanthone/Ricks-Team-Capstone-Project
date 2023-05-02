// Update component for the X velocity lens.

import Component from "../Engine/Component.js";
import Time from "../Engine/Time.js";
import Constants from "./Constants.js";
import Game from "../Engine/Game.js";

class VelocityLensXUpdateComponent extends Component{
    constructor(parent){
        super(parent);
    }

    update(){
        let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
        let xVel = Game.FindByType("BallGameObject")[0].getComponent("BallUpdateComponent").xVel;
        let yVel = Game.FindByType("BallGameObject")[0].getComponent("BallUpdateComponent").yVel;
        let rect = this.parent.getComponent("Rectangle");
        let anchor;

        anchor = ball.x + ball.r;

        if(rect.x != anchor || rect.y != ball.y - 5){
            rect.x = anchor;
            rect.y = ball.y - 5;
        }
    }
}

export default VelocityLensXUpdateComponent;