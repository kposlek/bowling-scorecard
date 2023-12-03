<template>
  <div class="w-100">
    <ScoreInput />
    <div class="row">
      <h1 class="text-center">{{ store.static.frameHeader }}</h1>
    </div>
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

          <div class="col p-0 border-bottom" v-for="frame in store.frames" :key="frame.id">
            <div class="row p-0 border-bottom m-0 justify-content-center">
              <div class="col p-0" v-for="hit in store.hits" :key="hit.id">
                <div class="hits-item border-end p-1">{{ hit }}</div>
              </div>
            </div>
            <div class="row p-1 m-0 justify-content-center border-end">{{ store.frameResume }}</div>
          </div>
          <div class="col p-0 border-bottom">
            <div class="row d-flex fw-bold m-0 p-1 justify-content-center border-bottom border-end">
              {{ store.static.totalHeader }}
            </div>
            <div class="row d-flex m-0 p-1 justify-content-center border-end">
              {{ store.resume }}
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
</script>

<style scoped>
@media (max-width: 768px) {
  .container {
    width: 100px;
  }
}
</style>
