<template>
  <div>
    <div class="input-group mb-3 col">
      <input
        type="number"
        class="form-control d-block"
        placeholder="Insert number of frame"
        aria-label="Insert number of frame"
        aria-describedby="button-addon2"
      />
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">
        Add Number of Frame
      </button>
    </div>
  </div>
  <div class="row">
    <div class="input-group mb-3 col">
      <input
        type="number"
        class="form-control d-block"
        placeholder="Insert number of the pins hit"
        aria-label="Insert number of the pins hit"
        aria-describedby="button-addon2"
      />
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add pins</button>
    </div>

    <div class="input-group mb-3 col">
      <input
        type="number"
        class="form-control d-block"
        placeholder="Add roll number"
        aria-label="Add roll number"
        aria-describedby="button-addon2"
      />
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add roll</button>
    </div>
    <div class="input-group mb-3 col">
      <input
        type="number"
        class="form-control d-block"
        placeholder="Insert number frame"
        aria-label="Insert number frame"
        aria-describedby="button-addon2"
      />
      <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add Frame</button>
    </div>
  </div>
</template>

<script setup>
import { useScoreStore } from '../../stores/scoreStore.js'

const store = useScoreStore()
console.log(store.score)
</script>

<style scoped></style>
