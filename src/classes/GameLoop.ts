import GameScene from './GameScene';
import TestScene from './GameScenes/TestScene';

class GameLoop {
  rootCanvas: HTMLCanvasElement;
  rootCanvasContext: CanvasRenderingContext2D;
  sceneStack: GameScene[];
  pressedKey: string = '';

  constructor(rootCanvas: HTMLCanvasElement) {
    this.rootCanvas = rootCanvas;
    this.rootCanvasContext = rootCanvas.getContext('2d');
    this.resizeCanvas();

    this.sceneStack = [new TestScene()];

    window.addEventListener('resize', () => this.resizeCanvas());

    window.addEventListener('keydown', (event) => this.pressedKey = event.key);

    window.requestAnimationFrame(() => this.loop());
  }

  resizeCanvas() {
    this.rootCanvas.width = window.innerWidth;
    this.rootCanvas.height = window.innerHeight;

  }

  loop() {
    this.sceneStack[0].receiveInput(this.pressedKey);
    this.renderCanvas();

    window.requestAnimationFrame(() => this.loop());
  }

  renderCanvas() {
    this.rootCanvasContext.clearRect(0, 0, this.rootCanvas.width, this.rootCanvas.height);

    let sourceScene = this.sceneStack[0].renderScene();

    let zoomRatio = Math.trunc((this.rootCanvas.width > this.rootCanvas.height) ? this.rootCanvas.height / sourceScene.height : this.rootCanvas.width / sourceScene.width);

    let outputWidth = sourceScene.width * zoomRatio;
    let outputHeight = sourceScene.height * zoomRatio;
    let outputX = (this.rootCanvas.width - outputWidth) / 2;
    let outputY = (this.rootCanvas.height - outputHeight) / 2;


    this.rootCanvasContext.drawImage(sourceScene, outputX, outputY, outputWidth, outputHeight);
  }
}

export default GameLoop;
