import { Game } from '../Game'
import { Player } from '../entities/Player'
import { Scene } from './Scene'

export class GameScene extends Scene {
  private player: Player

  constructor(game: Game) {
    super(game)
    this.player = new Player(game, 100, 100)
  }

  update(_deltaTime: number): void {
    this.player.update()
  }

  render(ctx: CanvasRenderingContext2D): void {
    // Clear the canvas
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, this.game.getCanvas().width, this.game.getCanvas().height)

    // Render the player
    this.player.render(ctx)
  }
}
