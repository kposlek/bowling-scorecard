import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useScoreStore } from '../scoreStore'

describe('scoreStore', () => {
  let store

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useScoreStore()
  })

  describe('score calculation', () => {
    it('should calculate random game', () => {
      store.frames = [
        { id: 0, throw1: 10, throw2: 0, score: 0 },
        { id: 1, throw1: 7, throw2: 3, score: 0 },
        { id: 2, throw1: 9, throw2: 0, score: 0 },
        { id: 3, throw1: 10, throw2: 0, score: 0 },
        { id: 4, throw1: 0, throw2: 8, score: 0 },
        { id: 5, throw1: 8, throw2: 2, score: 0 },
        { id: 6, throw1: 0, throw2: 6, score: 0 },
        { id: 7, throw1: 10, throw2: 0, score: 0 },
        { id: 8, throw1: 10, throw2: 0, score: 0 },
        { id: 9, throw1: 10, throw2: 8, throw3: 1, score: 0 }
      ]

      store.calculateScores()

      expect(store.frames[0].score).toBe(20)
      expect(store.frames[1].score).toBe(39)
      expect(store.frames[2].score).toBe(48)
      expect(store.frames[3].score).toBe(66)
      expect(store.frames[4].score).toBe(74)
      expect(store.frames[5].score).toBe(84)
      expect(store.frames[6].score).toBe(90)
      expect(store.frames[7].score).toBe(120)
      expect(store.frames[8].score).toBe(148)
      expect(store.frames[9].score).toBe(167)
    })

    it('should calculate perfect game', () => {
      store.frames = [
        { id: 0, throw1: 10, throw2: 0, score: 0 },
        { id: 1, throw1: 10, throw2: 0, score: 0 },
        { id: 2, throw1: 10, throw2: 0, score: 0 },
        { id: 3, throw1: 10, throw2: 0, score: 0 },
        { id: 4, throw1: 10, throw2: 0, score: 0 },
        { id: 5, throw1: 10, throw2: 0, score: 0 },
        { id: 6, throw1: 10, throw2: 0, score: 0 },
        { id: 7, throw1: 10, throw2: 0, score: 0 },
        { id: 8, throw1: 10, throw2: 0, score: 0 },
        { id: 9, throw1: 10, throw2: 10, throw3: 10, score: 0 }
      ]

      store.calculateScores()

      expect(store.frames[0].score).toBe(30)
      expect(store.frames[1].score).toBe(60)
      expect(store.frames[2].score).toBe(90)
      expect(store.frames[3].score).toBe(120)
      expect(store.frames[4].score).toBe(150)
      expect(store.frames[5].score).toBe(180)
      expect(store.frames[6].score).toBe(210)
      expect(store.frames[7].score).toBe(240)
      expect(store.frames[8].score).toBe(270)
      expect(store.frames[9].score).toBe(300)
    })

    it('should calculate game with only 2 throws in 3rd frame', () => {
      store.frames = [
        { id: 0, throw1: 10, throw2: 0, score: 0 },
        { id: 1, throw1: 7, throw2: 3, score: 0 },
        { id: 2, throw1: 9, throw2: 0, score: 0 },
        { id: 3, throw1: 10, throw2: 0, score: 0 },
        { id: 4, throw1: 0, throw2: 8, score: 0 },
        { id: 5, throw1: 8, throw2: 2, score: 0 },
        { id: 6, throw1: 0, throw2: 6, score: 0 },
        { id: 7, throw1: 4, throw2: 0, score: 0 },
        { id: 8, throw1: 6, throw2: 0, score: 0 },
        { id: 9, throw1: 2, throw2: 4, throw3: 0, score: 0 }
      ]

      store.calculateScores()

      expect(store.frames[0].score).toBe(20)
      expect(store.frames[1].score).toBe(39)
      expect(store.frames[2].score).toBe(48)
      expect(store.frames[3].score).toBe(66)
      expect(store.frames[4].score).toBe(74)
      expect(store.frames[5].score).toBe(84)
      expect(store.frames[6].score).toBe(90)
      expect(store.frames[7].score).toBe(94)
      expect(store.frames[8].score).toBe(100)
      expect(store.frames[9].score).toBe(106)
    })
  })

  describe('input pins hit', () => {
    it('should input at first undefined', () => {
      store.frames = [
        { id: 0, throw1: 10, throw2: 0, score: 0 },
        { id: 1, throw1: 7, throw2: 3, score: 0 },
        { id: 2, throw1: 9, throw2: 0, score: 0 },
        { id: 3, throw1: 10, throw2: 0, score: 0 },
        { id: 4, throw1: 0, throw2: 8, score: 0 },
        { id: 5, throw1: 8, throw2: undefined, score: 0 },
        { id: 6, throw1: undefined, throw2: undefined, score: 0 },
        { id: 7, throw1: undefined, throw2: undefined, score: 0 },
        { id: 8, throw1: undefined, throw2: undefined, score: 0 },
        { id: 9, throw1: undefined, throw2: undefined, throw3: undefined, score: 0 }
      ]
      store.inputValue = '2'

      store.addInput()

      expect(store.frames[5].throw2).toBe(2)
      expect(store.inputValue).toBe('')
    })

    it('should handle input strikes', () => {
      store.frames = [
        { id: 0, throw1: 10, throw2: 0, score: 0 },
        { id: 1, throw1: 7, throw2: 3, score: 0 },
        { id: 2, throw1: 9, throw2: 0, score: 0 },
        { id: 3, throw1: 10, throw2: 0, score: 0 },
        { id: 4, throw1: 0, throw2: 8, score: 0 },
        { id: 5, throw1: undefined, throw2: undefined, score: 0 },
        { id: 6, throw1: undefined, throw2: undefined, score: 0 },
        { id: 7, throw1: undefined, throw2: undefined, score: 0 },
        { id: 8, throw1: undefined, throw2: undefined, score: 0 },
        { id: 9, throw1: undefined, throw2: undefined, throw3: undefined, score: 0 }
      ]
      store.inputValue = '10'

      store.addInput()

      expect(store.frames[5].throw1).toBe(10)
      expect(store.frames[5].throw2).toBe(0)
      expect(store.inputValue).toBe('')
    })

    it('should handle input strikes', () => {
      store.frames = [
        { id: 0, throw1: 10, throw2: 0, score: 0 },
        { id: 1, throw1: 7, throw2: 3, score: 0 },
        { id: 2, throw1: 9, throw2: 0, score: 0 },
        { id: 3, throw1: 10, throw2: 0, score: 0 },
        { id: 4, throw1: 0, throw2: 8, score: 0 },
        { id: 5, throw1: 8, throw2: 2, score: 0 },
        { id: 6, throw1: 0, throw2: 6, score: 0 },
        { id: 7, throw1: 4, throw2: 0, score: 0 },
        { id: 8, throw1: 6, throw2: 0, score: 0 },
        { id: 9, throw1: undefined, throw2: undefined, throw3: undefined, score: 0 }
      ]
      store.inputValue = '10'

      store.addInput()

      expect(store.frames[9].throw1).toBe(10)
      expect(store.inputValue).toBe('')
    })
  })
})
