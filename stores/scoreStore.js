
import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score',  {
  state: () => {
    return {
      score: "Hello from Store!"
    }
  },
  actions: {
    fetchScore() {
      console.log(this.score)
    }
  }
})
