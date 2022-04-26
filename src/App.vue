<script setup>
import { onMounted } from 'vue'
import TheNavbar from './components/TheNavbar.vue'
// import TheNewsLetter from './components/TheNewsLetter.vue'
import TheFooter from './components/TheFooter.vue'
import TheModal from './components/TheModal.vue'
import TheLoading from './components/TheLoading.vue'
import { useMoviesStore } from './stores/movies_store'
import { useMainCoverStore } from './stores/maincover_store'
import { File } from 'megajs'

const coverStore = useMainCoverStore()
const movieStore = useMoviesStore()

onMounted(() => {
  movieStore.loading = true
  coverStore.fetchCover()
  movieStore.fetchMovies()
})
</script>

<template>
  <TheLoading v-if="movieStore.getLoading" />
  <main v-else class="bg-gray-800">
    <TheModal />
    <TheNavbar />
    <RouterView />
    <!-- <TheNewsLetter /> -->
    <TheFooter />
  </main>
</template>

<style>
</style>
