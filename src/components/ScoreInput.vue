<template>
  <div class="input-group mb-3 w-50 d-flex">
    <input
      type="text"
      class="form-control d-block"
      :placeholder="store.static.inputPlaceholder"
      :aria-label="store.static.inputPlaceholder"
      v-model="store.inputValue"
      :class="{ 'is-invalid': store.errorMessage }"
    />
    <!-- <PopoverInfo /> -->
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">
      {{ store.static.addButton }}
    </button>
  </div>
  <div v-if="store.errorMessage" class="d-block text-danger">
    {{ store.errorMessage }}
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useScoreStore } from '../../stores/scoreStore.js'

const store = useScoreStore()

watch(
  () => store.inputValue,
  (newValue) => {
    if (!newValue) {
      store.errorMessage =
        'This field is required. Please enter the number of bowling pins you knocked down.'
    } else if (!store.inputValidation(newValue)) {
      store.errorMessage = 'The entry is not valid. Please enter a value between 1 and 10.'
    } else {
      store.errorMessage = ''
    }
  }
)
</script>

<style scoped>
.is-invalid {
  border-color: #dc3545;
}
</style>
