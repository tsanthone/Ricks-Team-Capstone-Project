import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js"; // Use the correct import

class BallCoordinatesScreenSpaceGameObject extends GameObject {
  constructor(ball, x, y) {
    super();
    this.ball = ball;
    this.x = x;
    this.y = y;
    this.components.push(
      new Text(
        this,
        x,
        y,
        `(${ball.x.toFixed(2)}, ${ball.y.toFixed(2)})`,
        "16px Arial"
      )
    );
    this.components.push(new TextDraw(this, "white", "white"));
  }

  update() {
    const textComponent = this.getComponent("Text");
    textComponent.text = `(${this.ball.x.toFixed(2)}, ${this.ball.y.toFixed(2)})`;

    // Update the position of the text to follow the ball
    textComponent.x = this.ball.x + this.x;
    textComponent.y = this.ball.y + this.y;
  }
}

export default BallCoordinatesScreenSpaceGameObject;