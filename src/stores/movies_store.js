import { defineStore } from 'pinia'
import { app  } from '../firebase/index.js'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    movies: [],
    loading: false,
  }),
  getters: {
    getMovies: (state) => state.movies
  },
  actions: {
    async fetchMovies() {
      const db = getFirestore(app)
      const movies_collections = collection(db, 'movies')
      const moveis_snapshot = await getDocs(movies_collections)
      const data = moveis_snapshot.docs.map(doc => doc.data())
      this.movies = data
      this.loading = false
    }
  }
})
