import { Game } from '../Game'

export class Player {
  private x: number
  private y: number
  private speed: number
  private game: Game

  constructor(game: Game, x: number, y: number) {
    this.game = game
    this.x = x
    this.y = y
    this.speed = 5
  }

  update() {
    const keys = this.game.getKeys()

    if (keys.ArrowUp || keys.w) this.y -= this.speed
    if (keys.ArrowDown || keys.s) this.y += this.speed
    if (keys.ArrowLeft || keys.a) this.x -= this.speed
    if (keys.ArrowRight || keys.d) this.x += this.speed
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x, this.y, 32, 32)
  }

  getX(): number {
    return this.x
  }

  getY(): number {
    return this.y
  }
}
