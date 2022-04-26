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

const download = async () => {
  const url = "https://mega.nz/file/h84zxLgJ#XdCL0vqsZmVxVch57KXBd6OidNXx7YZ9yJ8trMDcf-Q"

// https://getmega.net/download/file_71cdffca34/San.Andreas.2015.1080p.BluRay.x264.YIFY.mp4
// https://mega.nz/file/h84zxLgJ#XdCL0vqsZmVxVch57KXBd6OidNXx7YZ9yJ8trMDcf-Q
// h84zxLgJ

  // Get the file object from the URL
  const file = File.fromURL(url)
  console.log(file)

  const stream = file.download()
  stream.on('error', error => console.error(error))
  stream.on('data', data => console.log(data))
}
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
  <button @click="download" type="button" class="btn btn-primary">Download Mega File</button>
</template>

<style>
</style>
