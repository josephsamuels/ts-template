import GameScene from "../GameScene";

class TestScene extends GameScene {
  constructor() {
    super();

    this.sceneContext.font = '30px sans-serif';
    this.sceneContext.fillStyle = 'green';
  }

  renderScene(): HTMLCanvasElement {
    this.sceneContext.fillRect(0, 0, this.sceneCanvas.width, this.sceneCanvas.height);
    this.drawText(this.currentInput, 10, 30, 'black');

    return this.sceneCanvas;
  }
}

export default TestScene;
