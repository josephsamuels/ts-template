import GameLoop from './classes/GameLoop';
import './styles/styles.css';

window.addEventListener("load", () => {
  new GameLoop(document.getElementById('root') as HTMLCanvasElement);
})
