// Update component for the Z velocity lens.

import Component from "../Engine/Component.js";
import Game from "../Engine/Game.js";

class VelocityLensZUpdateComponent extends Component{
    constructor(parent){
        super(parent);
    }

    update(){
        let ball = Game.FindByType("BallGameObject")[0].getComponent("Circle");
        let xVel = Game.FindByType("BallGameObject")[0].getComponent("BallUpdateComponent").xVel;
        let yVel = Game.FindByType("BallGameObject")[0].getComponent("BallUpdateComponent").yVel;
        let circle = this.parent.getComponent("Circle");

        // Sets the anchors to be diagonally away from the ball depending on how far we want it to be.
        let anchorX = ball.x + ((100 * (xVel / 400))) * this.parent.dist;
        let anchorY = ball.y + ((100 * (yVel / 410))) * this.parent.dist;

        // Check to make sure that the z velocity circles move with the ball.
        if(circle.x != anchorX || circle.y != anchorY){
            circle.x = anchorX;
            circle.y = anchorY;
        }
    }
}

export default VelocityLensZUpdateComponent;