<script setup>
import TheMovieCard from './TheMovieCard.vue'
import { useMoviesStore } from '../stores/movies_store'

const movieStore = useMoviesStore()

// import { ref, onMounted } from 'vue'

// const movies = ref([])
// const moviesStore = useMoviesStore()

// const getMovies = async () => {
//     moviesStore.fetchMovies()
//     movies.value = moviesStore.getMovies
//     console.log(movies.value)

// }

// onMounted(() => {
//   getMovies()
// })

const loadMore = () => {
    localStorage.setItem('scrollpos', window.scrollY)
    movieStore.fetchMoreMovies()
    setTimeout(() => {
        var scrollpos = localStorage.getItem('scrollpos');
        if (scrollpos) window.scrollTo(0, scrollpos)
      }, 1000)
}
</script>

<template>
    <div id="movies" class="mx-auto back-pattren w-full py-12 flex flex-col">
        <h1 class="text-center display-3 py-12 text-white"><span class="text-yellow-400 font-bold">Recent</span> Movies
        </h1>
        <div class="container flex flex-wrap justify-center gap-4">
            <TheMovieCard v-for="(movie, index) in movieStore.getMovies" :key="index" :name="movie.name + ' (' + movie.year + ')'" :poster="movie.poster" :download="movie.download" />
        </div>
        <div class="flex gap-1 pt-12 mx-auto">
            <button id="load-more-btn" @click="loadMore" tyepe="button" class="btn btn-lg btn-outline-warning">Load More</button>
        </div>
    </div>
</template>

<style>
.back-pattren {
    background-color: #1f2937 !important;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23b0b0b0' fill-opacity='0.01'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E") !important;
}

.pagination>li>a {
    background-color: white;
    color: #5A4181;
}

.pagination>li>a:focus,
.pagination>li>a:hover,
.pagination>li>span:focus,
.pagination>li>span:hover {
    color: #5a5a5a;
    background-color: #eee;
    border-color: #ddd;
}

.pagination>.active>a {
    color: white;
    background-color: #5A4181 !Important;
    border: solid 1px #5A4181 !Important;
}

.pagination>.active>a:hover {
    background-color: #5A4181 !Important;
    border: solid 1px #5A4181;
}
</style>