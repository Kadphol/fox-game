import { STATE } from './constants'

const gameState = {
  current: STATE.INIT,
  clock: 1,
  wakeTime: -1,
  tick() {
    this.clock++
    console.log(this.clock)
    return this.clock
  },
  startGame() {
    console.log('Hatching...')
    this.current = STATE.HATCHING
    this.wakeTime = this.clock + 3
  },
  wake() {
    console.log('Waken')
    this.current = STATE.IDLING
    this.wakeTime = -1
  },
  changeWeather() {
    console.log('Changing weather')
  },
  cleanUpPoop() {
    console.log('Cleaning up poop')
  },
  feed() {
    console.log('Feeding')
  },
  handleUserAction(icon) {
    if ([STATE.CELEBRATING, STATE.SLEEPING, STATE.FEEDING, STATE.HATCHING].includes(this.current)) {
      return
    }

    if (this.current === STATE.INIT || this.current === STATE.DEAD) {
      this.startGame()
      return
    }

    switch (icon) {
      case 'weather':
        this.changeWeather()
        break
      case 'poop':
        this.cleanUpPoop()
        break
      case 'fish':
        this.feed()
        break
    }
  },
}

export const handleUserAction = gameState.handleUserAction.bind(gameState)
export default gameState
