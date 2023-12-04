import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', {
  state: () => {
    return {
      static: {
        //Headers for ScoreDisplay component
        frameHeader: 'Frames',
        playerHeader: 'Player',
        totalHeader: 'Total',

        //Headers for ScoreInput component
        addButton: 'Add pins',
        inputHeading: 'Number of pins hit:',

        //Input validation messages
        requiredInputMessage: 'The entry is not valid. The total sum of all pins can be up to 10.',
        validatedInputMessage: 'The entry is not valid. Please enter a value between 1 and 10.'
      },
      //test
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

      //fictitious player
      player: 'Karolina',

      //
      totalScore: 0,

      //input validation error message
      errorMessage: '',
      validationError: '',
      valueAdded: false
    }
  },
  actions: {
    //validation on inputs value
    inputValidation(value) {
      const pinsHit = parseInt(value)
      return pinsHit >= 1 && pinsHit <= 10 && !isNaN(pinsHit)
    },

    inputValidationError() {
      return (this.errorMessage = this.static.validatedInputMessage)
    },
    //Score input
    addInput() {
      const value = parseInt(this.inputValue)
      if (isNaN(value)) return

      this.validationError = ''

      if (value >= 0 && value < 11) {
        this.frames.forEach((frame) => {
          if (!this.valueAdded) {
            if (frame.throw1 === undefined) {
              if (value === 10 && frame.id !== 9) {
                frame.throw1 = 'strike'
                frame.throw2 = 0
                this.valueAdded = true
              } else {
                frame.throw1 = value
                this.valueAdded = true
              }
            } else if (frame.throw2 === undefined) {
              if (frame.id !== 9) {
                if (frame.throw1 + value <= 10) {
                  frame.throw2 = value
                  this.valueAdded = true
                } else {
                  this.valueAdded = true
                  this.errorMessage = ''
                  return (this.validationError = this.static.requiredInputMessage)
                }
              } else if (value >= 0 && value <= 10) {
                frame.throw2 = value
                this.valueAdded = true
              }
            } else if (frame.throw3 === undefined && frame.id === 9) {
              frame.throw3 = value
              this.valueAdded = true
            }
          }
          if (this.valueAdded) {
            this.inputValue = ''
          }
        })
      } else {
        return
      }
    }
  }
})
