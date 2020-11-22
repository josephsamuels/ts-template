abstract class GameScene {
  sceneCanvas: HTMLCanvasElement;
  sceneContext: CanvasRenderingContext2D;
  currentInput: string;

  constructor() {
    this.sceneCanvas = document.createElement('canvas') as HTMLCanvasElement;
    this.sceneCanvas.width = 320;
    this.sceneCanvas.height = 240;

    this.sceneContext = this.sceneCanvas.getContext('2d');
  }

  receiveInput(input: string): void {
    this.currentInput = input;
  };

  drawText(text: string, posX: number, posY: number, color: string) {
    let currentFill = this.sceneContext.fillStyle;

    this.sceneContext.fillStyle = color;
    this.sceneContext.fillText(text, posX, posY);
    this.sceneContext.fillStyle = currentFill;
  }

  abstract renderScene(): HTMLCanvasElement;
}

export default GameScene;
