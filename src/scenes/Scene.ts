import { Game } from '../Game'

export abstract class Scene {
  protected game: Game

  constructor(game: Game) {
    this.game = game
  }

  abstract update(deltaTime: number): void
  abstract render(ctx: CanvasRenderingContext2D): void
}

declare global {
  interface CanvasRenderingContext2D {
    font: string
    textAlign: string
    fillText(arg0: string, arg1: number, arg2: number): unknown
    fillRect(arg0: number, arg1: number, width: unknown, height: unknown): unknown
    fillStyle: string
    // Add any missing properties or methods here
  }
}
