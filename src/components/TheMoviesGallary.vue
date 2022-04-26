<script setup>
import TheMovieCard from './TheMovieCard.vue'
import { useMoviesStore } from '../stores/movies_store'

const movieStore = useMoviesStore()

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
    <div id="movies" class="mx-auto bg-[#0f1525] w-full py-12 flex flex-col">
        <div class="text-center text-[3rem] py-12 text-white">
            <span class="text-yellow-400 font-extrabold">Recent </span> 
            <span class="!font-extralight">Movies</span>
        </div>
        <div class="container flex flex-wrap justify-center gap-4">
            <TheMovieCard v-for="(movie, index) in movieStore.getMovies" :key="index"
                :name="movie.name + ' (' + movie.year + ')'" :poster="movie.poster" :download="movie.download" />
        </div>
        <div class="flex gap-1 pt-12 mx-auto">
            <button id="load-more-btn" @click="loadMore" tyepe="button" class="btn btn-outline-warning">
                <svg xmlns="http://www.w3.org/2000/svg" class="hidden md:block h-6 w-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Load More</button>
        </div>
    </div>
</template>

<style>
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