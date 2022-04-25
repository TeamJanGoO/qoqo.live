<script setup>
  import { onBeforeMount } from 'vue'
  import TheNavbar from './components/TheNavbar.vue'
  import TheNewsLetter from './components/TheNewsLetter.vue'
  import TheFooter from './components/TheFooter.vue'
  import TheModal from './components/TheModal.vue'
  import TheLoading from './components/TheLoading.vue'
  import { useMoviesStore } from './stores/movies_store'

  const movieStore = useMoviesStore()

  const getMovies = async () => {
    await movieStore.fetchMovies()
  }

  onBeforeMount(() => {
    movieStore.loading = true
    getMovies()
  })
</script>

<template>
  <TheLoading v-if="movieStore.loading" />
  <main v-else class="bg-gray-800">
    <TheModal />
    <TheNavbar />
    <RouterView />
    <TheNewsLetter />
    <TheFooter />
  </main>
</template>

<style>

</style>
