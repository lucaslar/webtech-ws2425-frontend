<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeroCard',
    props: ['hero'], // Component input
    emits: ['delete'], // Component output
})
</script>

<template>
    <div class="hero-card">
        <p>{{ hero }}</p>
        <button :aria-description="'Delete Hero ' + hero" v-on:click="$emit('delete')">DELETE</button>
    </div>
</template>

<style scoped>
.hero-card {
    margin: 8px;
    border: 2px solid var(--color-border);
    padding: 8px;
    display: flex;

    p {
        flex-grow: 1;
    }

    &,
    button {
        border-radius: 4px;
    }

    button {
        background: darkred;
        color: white;
        border: none;
        cursor: pointer;
    }
}
</style>
