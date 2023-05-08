import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js";

class UserPaddleCoordinatesObjectSpace extends GameObject {
  constructor(userPaddle, ball, screenHeight) {
    super();
    this.userPaddle = userPaddle;
    this.ball = ball;
    this.screenHeight = screenHeight;
    this.components.push(
      new Text(this, 0, 0, "", "16px Arial")
    );
    this.components.push(new TextDraw(this, "white", "white"));
  }

  update() {
    const textComponent = this.getComponent("Text");
    const posX = this.userPaddle.x - this.ball.x;
    const posY = (this.screenHeight - this.userPaddle.y) - (this.screenHeight - this.ball.y);
    textComponent.text = `User Paddle: (${posX.toFixed(2)}, ${posY.toFixed(2)})`;
    textComponent.x = 10;
    textComponent.y = 80;
  }
}

export default UserPaddleCoordinatesObjectSpace;
