<script lang="ts">
import { defineComponent } from 'vue'
import HeroesOptionApiList from '@/components/HeroesOptionApiList.vue'
import HeroesCompositionApiList from '@/components/HeroesCompositionApiList.vue'

export default defineComponent({
    name: 'HeroesCompositionApiView',
    components: { HeroesCompositionApiList },
})
</script>

<template>
    <main>
        <HeroesCompositionApiList title="Our heroes ... (Composition API)"></HeroesCompositionApiList>
    </main>
</template>

<style scoped></style>
