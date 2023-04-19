import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js"; 

class BallCoordinateObjectSpaceGameObject extends GameObject {
  constructor(ball, offsetX, offsetY) {
    super();
    this.ball = ball;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.components.push(
      new Text(
        this,
        ball.x + offsetX,
        ball.y + offsetY,
        `(0, 0)`,
        "16px Arial"
      )
    );
    this.components.push(new TextDraw(this, "white", "white"));
  }

  update() {
    const textComponent = this.getComponent("Text");

    // Update the position of the text to follow the ball
    textComponent.x = this.ball.x + this.offsetX;
    textComponent.y = this.ball.y + this.offsetY;
  }
}

export default BallCoordinateObjectSpaceGameObject;
