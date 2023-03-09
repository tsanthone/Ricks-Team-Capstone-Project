// Update Component for the User Paddle.

import Component from "../Engine/Component.js";
import Input from "../Engine/Input.js";
import Time from "../Engine/Time.js";
import Constants from "./Constants.js";

class UserPaddleUpdateComponent extends Component{
    constructor(parent){
        super(parent);
        this.vel = 300;
    }

    update(){
        let paddle = this.parent.getComponent("Rectangle");
        let proposedY = paddle.y;

        // If the user presses the w key then move up, if they press s move down.
        if(Input.keys["w"] == true){
            proposedY -= this.vel * Time.secondsBetweenFrame;
        }
        if(Input.keys["s"] == true){
            proposedY += this.vel * Time.secondsBetweenFrame;
        }

        // Prevents the user paddle from leaving the screen.
        if(proposedY > 0 && proposedY < Constants.maxY - paddle.h){
            paddle.y = proposedY;
        }
    }
}

export default UserPaddleUpdateComponent;