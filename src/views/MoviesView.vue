<script setup>
import TheMoviesGallary from '../components/TheMoviesGallary.vue'
import { useMeta } from 'vue-meta'

useMeta({
    title: 'Movies',
})
</script>

<template>
    <TheMoviesGallary />
</template>