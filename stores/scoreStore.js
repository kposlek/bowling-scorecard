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
        { id: 0, throw1: 'strike', throw2: 0, score: 10 },
        { id: 1, throw1: 2, throw2: 5, score: 0 },
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
      validationError: ''
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
      let valueAdded = false
      this.validationError = ''

      if (value >= 0 && value < 11) {
        this.frames.forEach((frame) => {
          if (!valueAdded) {
            if (frame.throw1 === undefined) {
              if (value === 10 && frame.id !== 9) {
                frame.throw1 = 'strike'
                frame.throw2 = 0
                valueAdded = true
              } else {
                frame.throw1 = value
                valueAdded = true
              }
            } else if (frame.throw2 === undefined) {
              if (frame.id !== 9) {
                if (frame.throw1 + value <= 10) {
                  frame.throw2 = value
                  valueAdded = true
                } else {
                  valueAdded = true
                  this.errorMessage = ''
                  return (this.validationError = this.static.requiredInputMessage)
                }
              } else if (value >= 0 && value <= 10) {
                frame.throw2 = value
                valueAdded = true
              }
            } else if (frame.throw3 === undefined && frame.id === 9) {
              frame.throw3 = value
              valueAdded = true
            }
          }
          if (valueAdded) {
            this.inputValue = ''
          }
        })
      } else {
        return
      }
    },

    returnNumber(value) {
      if (value === undefined) {
        return 0
      } else if (value === 'strike') {
        return 10
      } else {
        return value
      }
    },

    //Total Score
    totalScoreSum(value, index) {
      console.log(this.totalScore)
      if (index !== 9) {
        let throw1 = this.returnNumber(this.frames[index + 1].throw1)
        let throw2 = this.returnNumber(this.frames[index + 1].throw2)
        //this.totalScore = this.totalScore + this.frames[index].score + throw1 + throw2
        //this.totalScore = this.totalScore + this.frames[index].score + throw1 + throw2
      } else {
        console.log(222222222222222)
      }

      return this.totalScore
    }
  }
})
