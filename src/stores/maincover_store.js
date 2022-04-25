import { defineStore } from 'pinia'
import { app } from '../firebase/index.js'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

export const useMainCoverStore = defineStore({
    id: 'cover',
    state: () => ({
        cover: "",
    }),
    getters: {
        getCover: state => state.cover,
    },
    actions: {
        async fetchCover() {
            const db = getFirestore(app)
            const maincover_collections = collection(db, 'maincover')
            const cover_snapshot = await getDocs(maincover_collections)
            const data = cover_snapshot.docs.map(doc => doc.data())
            this.cover = data[0].link
        }
    }
})
