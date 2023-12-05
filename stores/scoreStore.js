import { defineStore } from 'pinia'
import { LAST_FRAME_INDEX, STRIKE_PINS } from '../src/utils/constants'

export const useScoreStore = defineStore('score', {
  state: () => {
    return {
      static: {
        // headers for ScoreDisplay component
        frameHeader: 'Frames',
        playerHeader: 'Player',
        totalHeader: 'Total',

        // headers for ScoreInput component
        addButton: 'Add pins',
        inputHeading: 'Number of pins hit:',

        // messages
        requiredInputMessage: 'The entry is not valid. The total sum of all pins can be up to 10.',
        validatedInputMessage: 'The entry is not valid. Please enter a value between 1 and 10.',
        gameOverMessage: 'Congratulations! Well played!'
      },

      inputValue: '',

      frames: [
        { id: 0, throw1: undefined, throw2: undefined, score: 0 },
        { id: 1, throw1: undefined, throw2: undefined, score: 0 },
        { id: 2, throw1: undefined, throw2: undefined, score: 0 },
        { id: 3, throw1: undefined, throw2: undefined, score: 0 },
        { id: 4, throw1: undefined, throw2: undefined, score: 0 },
        { id: 5, throw1: undefined, throw2: undefined, score: 0 },
        { id: 6, throw1: undefined, throw2: undefined, score: 0 },
        { id: 7, throw1: undefined, throw2: undefined, score: 0 },
        { id: 8, throw1: undefined, throw2: undefined, score: 0 },
        { id: 9, throw1: undefined, throw2: undefined, throw3: undefined, score: 0 }
      ],

      player: 'Karolina',

      // input validation error message
      errorMessage: '',
      validationError: '',

      gameOver: false
    }
  },
  actions: {
    inputValidation(value) {
      const pinsHit = parseInt(value)
      return pinsHit >= 1 && pinsHit <= 10 && !isNaN(pinsHit)
    },

    inputValidationError() {
      return (this.errorMessage = this.static.validatedInputMessage)
    },
    addInput() {
      const pinsHit = parseInt(this.inputValue)
      if (isNaN(pinsHit)) return
      let valueAdded = false
      this.validationError = ''

      if (pinsHit >= 0 && pinsHit < 11) {
        this.frames.forEach((frame) => {
          if (valueAdded) {
            this.inputValue = ''
            return
          }

          // handle first throws in frames
          if (frame.throw1 === undefined) {
            if (pinsHit === STRIKE_PINS && frame.id !== LAST_FRAME_INDEX) {
              frame.throw1 = pinsHit
              frame.throw2 = 0
            } else {
              frame.throw1 = pinsHit
            }
            valueAdded = true

            if (frame.id === LAST_FRAME_INDEX) {
              this.inputValue = ''
            }

            return
          }

          // handle second throws in frames
          if (frame.throw2 === undefined) {
            if (frame.id !== LAST_FRAME_INDEX) {
              if (frame.throw1 + pinsHit <= 10) {
                frame.throw2 = pinsHit
              } else {
                this.errorMessage = ''
                return (this.validationError = this.static.requiredInputMessage)
              }
            } else if (pinsHit >= 0 && pinsHit <= 10) {
              frame.throw2 = pinsHit
            }

            if (frame.id === LAST_FRAME_INDEX) {
              this.inputValue = ''
              if (frame.throw1 + frame.throw2 < 10) {
                this.gameOver = true
              }
            }

            valueAdded = true
            return
          }

          // handle third throws in frames
          if (frame.throw3 === undefined && frame.id === LAST_FRAME_INDEX) {
            frame.throw3 = pinsHit
            valueAdded = true
            this.gameOver = true

            if (frame.id === LAST_FRAME_INDEX) {
              this.inputValue = ''
            }
          }
        })
      } else {
        return
      }
      this.calculateScores()
    },

    calculateScores() {
      this.frames.forEach((frame, index) => {
        // first: add basic pins together
        frame.score = frame.throw1 + frame.throw2
        if (index === LAST_FRAME_INDEX && frame.throw3 !== undefined) {
          frame.score = frame.score + frame.throw3
        }

        // second: add scores from previous frame
        if (index > 0) {
          frame.score = frame.score + this.frames[index - 1].score
        }

        // third: check for strikes and spares
        if (index < LAST_FRAME_INDEX) {
          if (frame.throw1 + frame.throw2 === 10) {
            frame.score = frame.score + this.frames[index + 1].throw1
          }

          if (frame.throw1 === STRIKE_PINS) {
            frame.score = frame.score + this.frames[index + 1].throw2

            if (index < 8 && this.frames[index + 1].throw1 === STRIKE_PINS) {
              frame.score = frame.score + this.frames[index + 2].throw1
            }
          }
        }
      })
    }
  }
})
