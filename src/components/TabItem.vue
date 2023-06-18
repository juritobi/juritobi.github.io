<script setup>
import { inject } from 'vue'
const props = defineProps({
    title: String
})
const selectedTitle = inject('selectedTitle')
</script>

<template>
    <div class="tabs__content row p-4 mb-4 text-justify mx-auto" v-show="selectedTitle === title">
        <slot />
    </div>
</template>

<style scoped>
div{
  border-radius: 0 10px 10px 10px;
}
</style>