<template>
  <div>
    <div class="mb-3 w-50 m-auto">
      <div>{{ store.static.inputHeading }}</div>
      <div class="input-group">
        <input
          type="text"
          class="form-control d-block"
          v-model="store.inputValue"
          :class="{ 'is-invalid': store.errorMessage }"
          @keypress.enter="store.addInput()"
        />
        <!-- <PopoverInfo /> -->
        <button
          class="btn btn-outline-secondary d-md-block d-none rounded-end"
          type="button"
          id="button-addon2"
          :class="{ 'is-invalid': store.errorMessage }"
          @click="store.addInput()"
        >
          {{ store.static.addButton }}
        </button>
        <button
          class="btn btn-outline-secondary d-md-none d-block"
          type="button"
          id="button-addon2"
          :class="{ 'is-invalid': store.errorMessage }"
          @click="store.addInput()"
        >
          +
        </button>
      </div>
    </div>
    <div
      v-if="store.errorMessage && !store.validationError"
      class="d-block text-danger text-center"
    >
      {{ store.errorMessage }}
    </div>
    <div class="d-block text-danger fw-bold text-center">
      {{ store.validationError }}
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue'
import { useScoreStore } from '../../stores/scoreStore.js'

const store = useScoreStore()

watch(
  () => store.inputValue,
  (newValue) => {
    if (!store.inputValidation(newValue) && newValue != 0) {
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
