<script setup>
import { defineProps } from 'vue'

defineProps({
  name: {
    type: String,
    required: true
  },
  poster: {
    type: String,
    required: true
  },
  download: {
    type: String,
    required: true
  }
})

</script>

<template>
    <div class="transition-all duration-300 relative hover:border-b-4 hover:border-yellow-500 hover:p-8 hover:scale-105 select-none w-[17rem] h-[25rem] bg-black rounded-2xl shadow-lg hover:shadow-2xl bg-no-repeat bg-cover bg-center"
        :style="`background-image: url(${poster});`">
        <div
            class="absolute top-0 left-0 right-0 w-full h-20 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-600/5 rounded-t-xl">
            <h1 class="text-xl text-gray-400 font-light p-4">1h 45m</h1>
        </div>
        <div
            class="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-b from-gray-900/40 via-gray-900/80 to-gray-800 w-full rounded-b-xl">
            <h1 class="text-2xl pb-2 -mt-2 text-gray-100 !font-bold">{{ name }}</h1>
            <div class="flex gap-2">
                <!-- <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-outline-warning btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Watch Online</span></button> -->
                <a :href="download" class="btn btn-outline-warning btn-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Download Now</span></a>
            </div>
        </div>
    </div>
</template>