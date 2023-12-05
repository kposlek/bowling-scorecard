import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { mount } from '@vue/test-utils'
import ScoreDisplay from './../ScoreDisplay.vue'

describe('ScoreDisplay', () => {
  it('renders properly', () => {
    setActivePinia(createPinia())

    const wrapper = mount(ScoreDisplay)

    expect(wrapper.text()).toContain('Player')
  })

  describe('print first throw', () => {
    let wrapper
    let frameThrow
    let index

    beforeEach(() => {
      setActivePinia(createPinia())
      wrapper = mount(ScoreDisplay)
    })

    it('should print simple values', () => {
      frameThrow = 2
      index = 0

      const result = wrapper.vm.printThrow1(frameThrow, index)

      expect(result).toBe(2)
    })

    it('should handle strikes', () => {
      frameThrow = 10
      index = 0

      const result = wrapper.vm.printThrow1(frameThrow, index)

      expect(result).toBe('\u00A0')
    })

    it('should handle zero', () => {
      frameThrow = 0
      index = 0

      const result = wrapper.vm.printThrow1(frameThrow, index)

      expect(result).toBe('-')
    })

    it('should handle last frame', () => {
      frameThrow = 10
      index = 9

      const result = wrapper.vm.printThrow1(frameThrow, index)

      expect(result).toBe('X')
    })

    it('should handle undefined', () => {
      frameThrow = undefined
      index = 0

      const result = wrapper.vm.printThrow1(frameThrow, index)

      expect(result).toBe('\u00A0')
    })
  })

  describe('print second throw', () => {
    let wrapper
    let frameThrow
    let index
    let previousThrow

    beforeEach(() => {
      setActivePinia(createPinia())
      wrapper = mount(ScoreDisplay)
    })

    it('should print spare', () => {
      frameThrow = 5
      index = 5
      previousThrow = 5

      const result = wrapper.vm.printThrow2(frameThrow, previousThrow, index)

      expect(result).toBe('/')
    })

    it('should handle strikes', () => {
      index = 4
      previousThrow = 10

      const result = wrapper.vm.printThrow2(frameThrow, previousThrow, index)

      expect(result).toBe('X')
    })

    it('should handle zero', () => {
      frameThrow = 0
      index = 6
      previousThrow = 5

      const result = wrapper.vm.printThrow2(frameThrow, previousThrow, index)

      expect(result).toBe('-')
    })

    it('should handle undefined', () => {
      frameThrow = undefined
      index = 6
      previousThrow = 5

      const result = wrapper.vm.printThrow2(frameThrow, previousThrow, index)

      expect(result).toBe('\u00A0')
    })

    it('should handle strikes for last frame', () => {
      frameThrow = 10
      index = 4
      previousThrow = 10

      const result = wrapper.vm.printThrow2(frameThrow, previousThrow, index)

      expect(result).toBe('X')
    })

    it('should print simple values', () => {
      frameThrow = 2
      index = 0
      previousThrow = 5

      const result = wrapper.vm.printThrow2(frameThrow, index)

      expect(result).toBe(2)
    })
  })

  describe('print first throw', () => {
    let wrapper
    let frameThrow3
    let index

    beforeEach(() => {
      setActivePinia(createPinia())
      wrapper = mount(ScoreDisplay)
    })

    it('should print strike', () => {
      frameThrow3 = 10
      index = 9

      const result = wrapper.vm.printThrow3(frameThrow3, index)

      expect(result).toBe('X')
    })

    it('should handle undefined', () => {
      frameThrow3 = undefined
      index = 9

      const result = wrapper.vm.printThrow3(frameThrow3, index)

      expect(result).toBe('\u00A0')
    })

    it('should handle zero', () => {
      frameThrow3 = 0
      index = 9

      const result = wrapper.vm.printThrow3(frameThrow3, index)

      expect(result).toBe('-')
    })

    it('should handle simple values', () => {
      frameThrow3 = 8
      index = 9

      const result = wrapper.vm.printThrow3(frameThrow3, index)

      expect(result).toBe(8)
    })
  })
})
