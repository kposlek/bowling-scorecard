<template>
  <div class="w-100">
    <ScoreInput />

    <div class="row d-flex justify-content-center p-2">
      <div class="container text-center m-0 p-0 border-start border-top">
        <div class="row flex-md-row flex-column p-0 m-0">
          <div class="col justify-content-center p-0 border-bottom">
            <div class="row d-flex fw-bold m-0 p-1 justify-content-center border-bottom border-end">
              {{ store.static.playerHeader }}
            </div>
            <div class="row d-flex m-0 p-1 justify-content-center border-end">
              {{ store.player }}
            </div>
          </div>

          <div class="col p-0 border-bottom" v-for="(frame, index) in store.frames" :key="frame.id">
            <div class="row p-0 border-bottom m-0 justify-content-center">
              <div class="col border-end p-1">
                {{ printThrow1(frame.throw1, index) }}
              </div>

              <div class="col border-end p-1">{{ printThrow2(frame.throw2, frame.throw1) }}</div>

              <div v-if="frame.id === 9" class="col border-end p-1">
                {{ printThrow3(frame.throw3, frame.throw1, index) }}
              </div>
            </div>

            <div class="row p-1 m-0 justify-content-center border-end">
              {{ frame.score || 0 }}
            </div>
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useScoreStore } from '../../stores/scoreStore.js'
import ScoreInput from './ScoreInput.vue'
const store = useScoreStore()

function printThrow1(frameThrow, index) {
  if (index === 9 && frameThrow === 10) {
    return 'X'
  }
  if (frameThrow === undefined || (frameThrow === 10 && index !== 9)) {
    return '\u00A0'
  } else if (frameThrow === 0) {
    return '-'
  } else {
    return frameThrow
  }
}

function printThrow2(frameThrow, previousThrow, index) {
  if (index === 9 && frameThrow === 10) {
    return 'X'
  }
  if (frameThrow === undefined) {
    return '\u00A0'
  } else {
    if (previousThrow === 10) {
      return 'X'
    } else if (frameThrow + previousThrow === 10) {
      return '/'
    } else if (frameThrow === 0) {
      return '-'
    } else if (frameThrow === 10) {
      return 'X'
    } else {
      return frameThrow
    }
  }
}
function printThrow3(frameThrow3, frameThrow1) {
  if (frameThrow3 === undefined) {
    return '\u00A0'
  } else {
    if (frameThrow1 === 10) {
      if (frameThrow3 > 0 && frameThrow3 < 10) {
        return frameThrow3
      } else if (frameThrow3 === 0) {
        return '-'
      } else if (frameThrow3 === 10) {
        return 'X'
      }
    } else {
      return '\u00A0'
    }
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  .container {
    width: 100px;
  }
}
</style>
