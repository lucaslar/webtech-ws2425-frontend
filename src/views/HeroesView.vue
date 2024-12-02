<script setup lang="ts">
import { onMounted, ref } from 'vue'
import HeroCard from '@/components/HeroCard.vue'
import axios from 'axios'
import type { Hero } from '@/model/hero'

const inputData = ref('')
const heroes = ref<Hero[]>([])

function addHero(): void {
    axios
        .post<Hero>('http://localhost:8080/api/heroes', { name: inputData.value })
        .then((res) => {
            inputData.value = ''
            heroes.value.push(res.data)
        })
        .catch((err) => logError(err))
}

async function removeHero(id: number): Promise<void> {
    // Example with async / await instead of callbacks
    try {
        const response = await axios.delete(`http://localhost:8080/api/heroes/${id}`)
        console.log(response) // even though there is not much to see here ...
        heroes.value = heroes.value.filter((hero) => hero.id !== id)
    } catch (err) {
        logError(err)
    }
}

function logError(err: unknown): void {
    alert('Something went wrong ... check your browser console for more information')
    console.error(err)
}

onMounted(() => {
    axios
        .get<Hero[]>('http://localhost:8080/api/heroes')
        .then((res) => (heroes.value = res.data))
        .catch((err) => logError(err))
})
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
            <HeroCard v-for="hero in heroes" v-bind:key="hero.id" :hero="hero" @delete="removeHero(hero.id)"></HeroCard>
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
