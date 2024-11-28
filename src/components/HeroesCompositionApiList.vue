<script setup lang="ts">
import { onMounted, ref } from 'vue'

defineProps<{ title: string }>()

const inputData = ref('das ist ein input ')
const heroes = ref<string[]>([])

function someMethod(): void {
    console.log('Hallo HTW 2')
}

function saveHero(): void {
    heroes.value.push(inputData.value)
}

onMounted(() => {
    // heroes.value.push('Han Solo')
    // heroes.value.push('Chewbacca')
})
</script>

<template>
    <h1>{{ title }}</h1>

    <p>This component has been implemented using Vue‘s Composition API.</p>

    <button @click="someMethod()">CLICK ME! (check browser console)</button>
    <input v-model="inputData" />
    <button @click="saveHero()">Save hero</button>

    <p v-if="heroes.length === 0" class="warning">Es gibt noch keine Helden</p>

    <ul>
        <li v-for="hero of heroes" v-bind:key="hero">{{ hero }}</li>
    </ul>
</template>

<style scoped>
.warning {
    color: red;
}
</style>
