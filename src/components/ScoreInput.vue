<template>
  <div class="input-group mb-3">
    <input
      type="number"
      class="form-control d-block"
      placeholder="Insert number of the pins hit"
      aria-label="Insert number of the pins hit"
      aria-describedby="button-addon2"
    />
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Add pins</button>
  </div>
</template>

<script setup>
import { useScoreStore } from '../../stores/scoreStore.js'

const store = useScoreStore()
console.log(store.score)
</script>

<style scoped></style>
