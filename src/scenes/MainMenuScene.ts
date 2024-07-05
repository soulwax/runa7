import { Game } from '../Game.js'
import { Scene } from './Scene.js'

export class MainMenuScene implements Scene {
  private game: Game

  constructor(game: Game) {
    this.game = game
  }

  update(_deltaTime: number): void {
    if (Object.values(this.game.getKeys()).some((key) => key)) {
      this.game.startGame()
    }
  }

  render(ctx: CanvasRenderingContext2D): void {
    const canvas = this.game.getCanvas()
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = 'white'
    ctx.font = '48px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('Runa7', canvas.width / 2, canvas.height / 2)

    ctx.font = '24px Arial'
    ctx.fillText('Press any key to start', canvas.width / 2, canvas.height / 2 + 50)
  }
}
