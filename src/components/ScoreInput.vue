<template>
  <div class="mb-3 w-50 m-auto">
    <div>{{ store.static.inputHeading }}</div>
    <div class="input-group">
      <input
        type="text"
        class="form-control d-block"
        v-model="store.inputValue"
        :class="{ 'is-invalid': store.errorMessage }"
      />
      <!-- <PopoverInfo /> -->
      <button
        class="btn btn-outline-secondary d-md-block d-none rounded-end"
        type="button"
        id="button-addon2"
      >
        {{ store.static.addButton }}
      </button>
      <button class="btn btn-outline-secondary d-md-none d-block" type="button" id="button-addon2">
        +
      </button>
    </div>
  </div>
  <div v-if="store.errorMessage" class="d-block text-danger text-center">
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
      store.inputRequiredError()
    } else if (!store.inputValidation(newValue)) {
      store.inputValidationError()
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
