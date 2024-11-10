<script setup lang="ts">
import { ref } from 'vue'
import HeroCard from '@/components/HeroCard.vue'

const inputData = ref('')
const heroes = ref([])

function addHero(): void {
    heroes.value.push(inputData.value.trim())
    inputData.value = ''
}

function removeHero(index: number): void {
    heroes.value = heroes.value.filter((h, i) => i !== index)
}
</script>

<template>
    <main>
        <h1>Heroes App</h1>

        <p>
            This component will be used for further examples. To showcase both Vue‘s Composition and Vue‘s Options API,
            both implementations are used for different components.
        </p>

        <hr />

        <form @submit="addHero()" @submit.prevent>
            <input v-model="inputData" />
            <button :disabled="!inputData.trim().length">Save hero</button>
        </form>

        <p v-if="!heroes.length">No heroes yet :-(</p>
        <div id="hero-container" v-else>
            <HeroCard
                v-for="(hero, index) in heroes"
                v-bind:key="hero"
                :hero="hero"
                @delete="removeHero(index)"
            ></HeroCard>
        </div>
    </main>
</template>

<style scoped>
hr {
    margin: 16px 0;
}

form {
    display: flex;
    margin: -4px;

    input {
        flex-grow: 1;
    }

    * {
        margin: 4px;
    }
}

#hero-container,
p {
    margin-top: 8px;
}

#hero-container {
    margin-left: -8px;
    margin-right: -8px;
}
</style>
