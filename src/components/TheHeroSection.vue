<script setup>
import { useMainCoverStore } from '../stores/maincover_store.js'
const coverStore = useMainCoverStore()
</script>

<template>
    <div class="relative w-full h-[calc(100vh-56px)] bg-no-repeat bg-cover bg-top"
        :style="`background-image:url(${coverStore.getCover});`">
        <div
            class="flex justify-center items-center absolute z-50 top-0 h-full w-full bg-gradient-to-r from-black/80 via-black/10">
            <div class="container py-10 ml-36">
                <a href="https://qoqo.ga"
                    class="text-sm bg-yellow-500 max-w-min pt-1 pb-1.5 px-3 rounded-xl tracking-widest text-black decoration-transparent select-none">qoqo.live</a>
                <h1 class="text-[2.4rem] lg:text-[3.2rem] md:text-[3rem] sm:text-[2.8rem] font-extrabold text-white max-w-[20ch] mt-3 leading-tight">Download High Quality <router-link to="/movies" class="text-yellow-500 underline decoration-transparent hover:decoration-yellow-500 hover:text-yellow-500 underline-offset-4">Movies</router-link> for FREE
                </h1>
                <p class="capitalize text-slate-200 mt-3 text-sm text-justify md:text-left italic font-light max-w-[50ch]">Press '/' anytime to
                    search your desired movie name or click the button bellow to explore our recent uploads.</p>
                <div class="mt-6 flex items-stretch h-full">
                    <router-link to="/movies" class="btn btn-warning uppercase tracking-widest">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden md:block" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                        </svg>
                        Explore <span class="hidden md:inline-block">Latest Content</span></router-link>
                    <a href="#movies" class="btn btn-outline-warning uppercase tracking-widest ml-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden md:block" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                        </svg>
                        Scroll</a>
                </div>
            </div>
        </div>
    </div>
</template>