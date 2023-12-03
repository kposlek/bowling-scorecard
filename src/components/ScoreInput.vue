<template>
  <div class="input-group mb-3">
    <input
      type="number"
      class="form-control d-block"
      :placeholder="store.static.inputPlaceholder"
      :aria-label="store.static.inputPlaceholder"
      aria-describedby="button-addon2"
    />
    <PopoverInfo />
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">
      {{ store.static.addButton }}
    </button>
  </div>
</template>

<script setup>
import PopoverInfo from './PopoverInfo.vue'
import { useScoreStore } from '../../stores/scoreStore.js'

const store = useScoreStore()
console.log(store.score)
</script>

<style scoped></style>
