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

      frames: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      frameResume: 0,
      hits: ['10', '10'],

      player: 'Karolina',
      resume: 0
    }
  },
  actions: {
    fetchScore() {
      console.log(this.score)
    }
  }
})
