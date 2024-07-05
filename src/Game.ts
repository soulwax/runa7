import { MainMenuScene } from './scenes/MainMenuScene'
import { Scene } from './scenes/Scene'

export class Game {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private currentScene: Scene
  private lastTime: number = 0

  constructor() {
    this.canvas = document.getElementById('gameCanvas') as HTMLCanvasElement
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
    this.resizeCanvas()
    window.addEventListener('resize', () => this.resizeCanvas())

    this.currentScene = new MainMenuScene(this)
  }

  private resizeCanvas() {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }

  start() {
    this.gameLoop(0)
  }

  private gameLoop(timestamp: number) {
    const deltaTime = timestamp - this.lastTime
    this.lastTime = timestamp

    this.update(deltaTime)
    this.render()

    requestAnimationFrame((t) => this.gameLoop(t))
  }

  private update(deltaTime: number) {
    this.currentScene.update(deltaTime)
  }

  private render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.currentScene.render(this.ctx)
  }

  changeScene(newScene: Scene) {
    this.currentScene = newScene
  }

  getCanvas() {
    return this.canvas
  }

  getContext() {
    return this.ctx
  }
}
