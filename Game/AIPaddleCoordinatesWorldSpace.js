import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js";

class AIPaddleCoordinatesWorldSpace extends GameObject {
  constructor(aiPaddle, screenHeight) {
    super();
    this.aiPaddle = aiPaddle;
    this.screenHeight = screenHeight;
    this.components.push(new Text(this, 0, 0, "", "16px Arial"));
    this.components.push(new TextDraw(this, "white", "white"));
  }

  update() {
    const textComponent = this.getComponent("Text");
    const posY = this.screenHeight - this.aiPaddle.y;
    textComponent.text = `AI Paddle: (${this.aiPaddle.x.toFixed(
      2
    )}, ${posY.toFixed(2)})`;
    textComponent.x = 10;
    textComponent.y = 50;
  }
}

export default AIPaddleCoordinatesWorldSpace;
