<script lang="ts">
import { defineComponent } from 'vue'
import HeroesOptionApiList from '@/components/HeroesOptionApiList.vue'

export default defineComponent({
    name: 'HeroesOptionsApiView',
    components: { HeroesOptionApiList },
})
</script>

<template>
    <main>
        <HeroesOptionApiList title="Our heroes ... (Options API)"></HeroesOptionApiList>
    </main>
</template>

<style scoped></style>
