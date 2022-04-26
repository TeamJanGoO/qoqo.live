import { defineStore } from 'pinia'
import { app } from '../firebase/index.js'
import { getFirestore, collection, query, orderBy, startAfter, limit, getDocs } from 'firebase/firestore/lite'

export const useMoviesStore = defineStore({
  id: 'movies',
  state: () => ({
    movies: [],
    lastVisible: null,
    loading: false,
  }),
  getters: {
    getMovies: state => state.movies,
    getLoading: state => state.loading,
  },
  actions: {
    async fetchMovies() {
      const db = getFirestore(app)
      const movies_collections = collection(db, 'movies')
      const first = query(movies_collections, orderBy('year', 'desc'), limit(20))
      const moveis_snapshot = await getDocs(first)
      this.lastVisible = moveis_snapshot.docs[moveis_snapshot.docs.length - 1]
      const data = moveis_snapshot.docs.map(doc => doc.data())
      this.movies = data
      this.loading = false
    },
    async fetchMoreMovies() {
      this.loading = true
      const db = getFirestore(app)
      const movies_collections = collection(db, 'movies')
      const last = query(movies_collections, orderBy('year', 'desc'), startAfter(this.lastVisible), limit(20))
      const moveis_snapshot = await getDocs(last)
      this.lastVisible = moveis_snapshot.docs[moveis_snapshot.docs.length - 1]
      const data = moveis_snapshot.docs.map(doc => doc.data())
      this.movies = [...this.movies, ...data]
      this.loading = false
    }
  }
})
