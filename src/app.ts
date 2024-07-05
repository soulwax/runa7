import { Game } from './Game'

declare global {
  interface Window {
    onload: () => void
  }
}

window.onload = () => {
  const game = new Game()
  game.start()
}
