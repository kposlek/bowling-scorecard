<template>
<div>
  <ScoreInput/>
</div>
</template>

<script setup>
import ScoreInput from "./components/ScoreInput.vue"
import { useScoreStore } from '../../stores/scoreStore.js'

const store = useScoreStore()
console.log(store.score) 
</script>

<style scoped>
</style>
