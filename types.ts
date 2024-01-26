export type PickedNumberHandler = (pickedNumber: number) => void
export type GameOverHandler = (numberOfRounds: number) => void
export type StartNewGameHandler = () => void
export type GameScreenProps = {
  userNumber: number,
  onGameOver: GameOverHandler
}
export type DirectionGuess = 'lower' | 'greater'
export type GuessLogItemProps = {
  roundNumber: number,
  guess: number
}
export type GameOverScreenProps = {
  roundsNumber: number,
  userNumber: number,
  onStartNewGame: StartNewGameHandler
}
