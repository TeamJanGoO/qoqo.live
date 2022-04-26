<script setup>
import TheLogo from '../components/TheLogo.vue'

import { ref } from 'vue'

const links = ref([
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Movies',
        path: '/movies'
    },
    {
        name: 'About',
        path: '/about'
    },
    {
        name: 'Contact',
        path: '/contact'
    }
])

const search = ref(null)

window.addEventListener('keydown', (e) => {
    if (e.key === '/' && search.value.value.length === 0) {
        setTimeout(() => {
            search.value.focus()
        }, 500)
    }
})
</script>

<template>

    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient-to-b from-gray-800 to-gray-900/40">
        <div class="container">
            <router-link class="navbar-brand" to="/">
                <TheLogo />
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav flex gap-2 me-auto lg:ml-5 mb-2 mb-lg-0">
                    <li v-for="(link, index) in links" :key="index" class="nav-item">
                        <router-link class="nav-link" :class="{ 'active !font-bold !text-yellow-400 !underline !underline-offset-4 !decoration-1 !decoration-yellow-400': $route.path === link.path }" aria-current="page"
                            :to="link.path">{{ link.name }}</router-link>
                    </li>
                </ul>
                <form class="d-flex w-full lg:pl-16">
                    <input ref="search" class="text-warning !bg-gray-200/10 !border-gray-600 focus:!ring-0 focus:!outline-none px-3 py-1 !transition-[width] !duration-700 form-control me-1 ms-auto !w-[100%] lg:!w-[20rem] lg:focus:!w-[100%]" type="search" placeholder="Press '/' to focus" aria-label="Search">
                    <button class="group btn btn-outline-warning !border-none" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-warning group-hover:!text-gray-900" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </nav>

</template>