import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js";

class UserPaddleCoordinatesWorldSpace extends GameObject {
  constructor(userPaddle, screenHeight) {
    super();
    this.userPaddle = userPaddle;
    this.screenHeight = screenHeight;
    this.components.push(
      new Text(this, 0, 0, "", "16px Arial")
    );
    this.components.push(new TextDraw(this, "white", "white"));
  }

  update() {
    const textComponent = this.getComponent("Text");
    const posY = this.screenHeight - this.userPaddle.y;
    textComponent.text = `User Paddle: (${this.userPaddle.x.toFixed(2)}, ${posY.toFixed(2)})`;
    textComponent.x = 10;
    textComponent.y = 80;
  }
}

export default UserPaddleCoordinatesWorldSpace;
