import gameState from './game-state'
const TICK_RATE = 3000

async function init() {
  console.log('starting game')

  let nextTimeToTick = Date.now()
  function nextAnimationFrame() {
    const now = Date.now()
    if (nextTimeToTick <= now) {
      gameState.tick()
      nextTimeToTick = now + TICK_RATE
    }
    requestAnimationFrame(nextAnimationFrame)
  }

  nextAnimationFrame()
}

init()
