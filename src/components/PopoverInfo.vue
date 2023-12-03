<template>
  <button
    type="button"
    class="btn btn-outline-secondary"
    data-bs-toggle="popover"
    data-bs-placement="top"
    :data-bs-content="store.static.popoverContent"
  >
    <img src="@/assets/info.svg" />
  </button>
</template>
<script setup>
import { onMounted } from 'vue'
import { useScoreStore } from '../../stores/scoreStore.js'

const store = useScoreStore()

onMounted(async () => {
  const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js')
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
  popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
  })
})
</script>
