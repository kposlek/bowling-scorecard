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
        validatedInputMessage: 'The entry is not valid. Please enter a value between 0 and 10.',
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
      return pinsHit >= 0 && pinsHit <= 10 && !isNaN(pinsHit)
    },

    inputValidationError() {
      return (this.errorMessage = this.static.validatedInputMessage)
    },

    addInput() {
      const pinsHit = parseInt(this.inputValue)

      if (isNaN(pinsHit)) return

      if (!this.inputValidation(pinsHit)) {
        this.inputValidationError()
        return
      }

      let valueAdded = false
      this.validationError = ''

      if (pinsHit >= 0 && pinsHit < 11) {
        this.frames.forEach((frame) => {
          if (valueAdded) {
            this.inputValue = ''
            return
          }

          if (frame.throw1 === undefined) {
            valueAdded = this.handleFirstThrow(frame, pinsHit)
            return
          }

          if (frame.throw2 === undefined) {
            valueAdded = this.handleSecondThrow(frame, pinsHit)
            return
          }

          if (frame.throw3 === undefined && frame.id === LAST_FRAME_INDEX) {
            valueAdded = this.handleThirdThrow(frame, pinsHit)
            return
          }
        })
      } else {
        return
      }
      this.calculateScores()
    },

    handleFirstThrow(frame, pinsHit) {
      if (pinsHit === STRIKE_PINS && frame.id !== LAST_FRAME_INDEX) {
        this.frames[frame.id].throw1 = pinsHit
        this.frames[frame.id].throw2 = 0
      } else {
        this.frames[frame.id].throw1 = pinsHit
      }

      if (frame.id === LAST_FRAME_INDEX) {
        this.inputValue = ''
      }

      return true
    },

    handleSecondThrow(frame, pinsHit) {
      if (frame.id !== LAST_FRAME_INDEX) {
        if (frame.throw1 + pinsHit <= 10) {
          this.frames[frame.id].throw2 = pinsHit
        } else {
          this.errorMessage = ''
          this.validationError = this.static.requiredInputMessage
        }
      } else if (pinsHit >= 0 && pinsHit <= 10) {
        this.frames[frame.id].throw2 = pinsHit
        this.inputValue = ''
        if (frame.throw1 + frame.throw2 < 10) {
          this.gameOver = true
        }
      }
      return true
    },

    handleThirdThrow(frame, pinsHit) {
      this.frames[frame.id].throw3 = pinsHit
      this.gameOver = true

      if (frame.id === LAST_FRAME_INDEX) {
        this.inputValue = ''
      }

      return true
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
