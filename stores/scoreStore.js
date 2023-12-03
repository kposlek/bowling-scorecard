import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', {
  state: () => {
    return {
      static: {
        frameHeader: 'Frames',
        playerHeader: 'Player',
        totalHeader: 'Total',
        addButton: 'Add pins',
        inputPlaceholder: 'Number of the pins hit',
        popoverContent: 'Popover content'
      },
      score: 'Hello from Store!',
      inputValue: '',
      frames: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      frameResume: 0,
      hits: ['10', '10'],

      player: 'Karolina',
      resume: 0,

      //input validation
      errorMessage: ''
    }
  },
  actions: {
    fetchScore() {
      console.log(this.score)
    },
    //validation od inputs value
    inputValidation(value) {
      const broj = parseInt(value)
      return broj >= 1 && broj <= 10 && !isNaN(broj)
    }
  }
})
