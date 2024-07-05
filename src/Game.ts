import { GameScene } from './scenes/GameScene.js'
import { MainMenuScene } from './scenes/MainMenuScene.js'
import { Scene } from './scenes/Scene.js'

export class Game {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private currentScene: Scene
  private lastTime: number = 0
  private keys: { [key: string]: boolean } = {}

  constructor() {
    this.canvas = document.getElementById('gameCanvas') as HTMLCanvasElement
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
    this.canvas.width = 800
    this.canvas.height = 600

    this.currentScene = new MainMenuScene(this)

    window.addEventListener('keydown', (e) => (this.keys[e.key] = true))
    window.addEventListener('keyup', (e) => (this.keys[e.key] = false))
  }

  start() {
    this.gameLoop(0)
  }

  private gameLoop(timestamp: number) {
    const deltaTime = timestamp - this.lastTime
    this.lastTime = timestamp

    this.currentScene.update(deltaTime)
    this.currentScene.render(this.ctx)

    requestAnimationFrame(this.gameLoop.bind(this))
  }

  getCanvas(): HTMLCanvasElement {
    return this.canvas
  }

  getContext(): CanvasRenderingContext2D {
    return this.ctx
  }

  getKeys(): { [key: string]: boolean } {
    return this.keys
  }

  startGame() {
    this.currentScene = new GameScene(this)
  }
}
