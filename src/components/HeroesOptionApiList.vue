<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeroesOptionApiList',
    props: ['title'],
    data(): { inputData: string; heroes: string[] } {
        return {
            inputData: '',
            heroes: [],
        }
    },
    methods: {
        someMethod() {
            console.log('Hallo HTW!')
        },

        saveHero() {
            this.heroes.push(this.inputData)
        },
    },
    mounted() {
        this.heroes.push('Han Solo')
        this.heroes.push('Chewbacca')
    }
})
</script>

<template>
    <h1>{{ title }}</h1>
    <button @click="someMethod()">CLICK ME! (check browser console)</button>
    <input v-model="inputData" />
    <button @click="saveHero()">Save hero</button>

    <p v-if="heroes.length === 0" class="warning">Es gibt noch keine Helden</p>

    <ul>
        <li v-for="hero of heroes">{{ hero }}</li>
    </ul>
</template>

<style scoped>
.warning {
    color: red;
}
</style>
