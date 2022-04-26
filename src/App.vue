<script setup>
import { onMounted } from 'vue'
import TheNavbar from './components/TheNavbar.vue'
// import TheNewsLetter from './components/TheNewsLetter.vue'
import TheFooter from './components/TheFooter.vue'
import TheModal from './components/TheModal.vue'
import TheLoading from './components/TheLoading.vue'
import { useMoviesStore } from './stores/movies_store'
import { useMainCoverStore } from './stores/maincover_store'
// import { File } from 'megajs'
import { useMeta } from 'vue-meta'

useMeta({
  title: '',
  htmlAttrs: { lang: 'en', amp: true }
})

const coverStore = useMainCoverStore()
const movieStore = useMoviesStore()

onMounted(() => {
  // get current path name
  const path = window.location.pathname
  if (path === '/' || path === '/movies') {
    movieStore.loading = true
    coverStore.fetchCover()
    movieStore.fetchMovies()
  }
})
</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `QoQo.live | ${content}` : `QoQo.live` }}</template>
  </metainfo>
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
