import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js";

class AIPaddleCoordinatesDisplay extends GameObject {
  constructor(aiPaddle) {
    super();
    this.aiPaddle = aiPaddle;
    this.components.push(
      new Text(this, 0, 0, "", "16px Arial")
    );
    this.components.push(new TextDraw(this, "white", "white"));
  }

  update() {
    const textComponent = this.getComponent("Text");
    textComponent.text = `AI Paddle: (${this.aiPaddle.x.toFixed(2)}, ${this.aiPaddle.y.toFixed(2)})`;
    textComponent.x = 10;
    textComponent.y = 50;
  }
}

export default AIPaddleCoordinatesDisplay;
