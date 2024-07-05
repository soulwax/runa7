import { Player } from '../entities/Player.js'
import { Game } from '../Game.js'
import { Scene } from './Scene.js'

export class GameScene implements Scene {
  protected game: Game
  private player: Player

  constructor(game: Game) {
    this.game = game
    this.player = new Player(game, 400, 300)
  }

  update(deltaTime: number): void {
    // Pass deltaTime to the player's update method
    this.player.update(deltaTime)
  }

  render(ctx: CanvasRenderingContext2D): void {
    const canvas = this.game.getCanvas()

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw background
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Render player
    this.player.render(ctx)
  }
}
