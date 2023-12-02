<template>
    <div>Hello from ScoreInput!</div>
    {{ store.score }}
</template>

<script setup>
 import { useScoreStore } from '../../stores/scoreStore.js'

const store = useScoreStore()
console.log(store.score) 
</script>

<style scoped>
</style>
