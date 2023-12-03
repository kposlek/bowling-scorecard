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
        inputHeading: 'Number of the pins hit:',
        /* popoverContent: 'Popover content', */

        //Input validation messages
        requiredInputMessage:
          'This field is required. Please enter the number of bowling pins you knocked down.',
        validatedInputMessage: 'The entry is not valid. Please enter a value between 1 and 10.'
      },
      //test
      inputValue: '',
      frames: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      frameScore: 0,

      hits: ['10', '10'],

      //fictitious player
      player: 'Karolina',

      //
      totalFrameScore: 0,

      //input validation error message
      errorMessage: ''
    }
  },
  actions: {
    //validation on inputs value
    inputValidation(value) {
      const broj = parseInt(value)
      return broj >= 1 && broj <= 10 && !isNaN(broj)
    },
    inputRequiredError() {
      return (this.errorMessage = this.static.requiredInputMessage)
    },
    inputValidationError() {
      return (this.errorMessage = this.static.validatedInputMessage)
    }
  }
})
