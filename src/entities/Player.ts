import { Game } from '../Game.js'

export class Player {
  private x: number
  private y: number
  private speed: number
  private game: Game

  constructor(game: Game, x: number, y: number) {
    this.game = game
    this.x = x
    this.y = y
    this.speed = 200 // pixels per second
  }

  update(deltaTime: number) {
    const keys = this.game.getKeys()
    const movement = this.speed * (deltaTime / 1000) // Convert speed to pixels per frame

    if (keys['ArrowUp'] || keys['w']) this.y -= movement
    if (keys['ArrowDown'] || keys['s']) this.y += movement
    if (keys['ArrowLeft'] || keys['a']) this.x -= movement
    if (keys['ArrowRight'] || keys['d']) this.x += movement

    // Simple boundary checking
    const canvas = this.game.getCanvas()
    this.x = Math.max(0, Math.min(this.x, canvas.width - 32))
    this.y = Math.max(0, Math.min(this.y, canvas.height - 32))
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'blue'
    ctx.fillRect(this.x, this.y, 32, 32)
  }

  getX(): number {
    return this.x
  }

  getY(): number {
    return this.y
  }
}
