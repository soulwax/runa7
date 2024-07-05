import { Game } from '../Game'
import { Scene } from './Scene'

export class MainMenuScene extends Scene {
  constructor(game: Game) {
    super(game)
  }

  update(_deltaTime: number): void {
    // Update logic for main menu (e.g., button hover effects)
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
