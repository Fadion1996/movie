<template>
<div id="app">
<CustomHeader />
  <div class="container">
      <MainPage :func="getCurrentFilm" :funcGuys="getGuys" :items="searcResults" />
      <router-view :itemArr="this.currentFilm" :itemGuys="this.currentGuys" />
  </div>
</div>
</template>

<script>
import CustomHeader from '@/components/Header.vue'
import MainPage from '@/components/MainPage'
import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      id: 0,
      searcResults: [],
      currentFilm: {},
      currentGuys: {},
      searchValue: '',
      idArray:[],
      apiUrl: "https://api.themoviedb.org/3/movie/upcoming?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=ru&page=1",
    }
  },
  methods: {

    getSearch () {
        axios.get(this.apiUrl).then(res => {
          this.searcResults = res.data
          // console.log(res)
          // console.log(this.idArray)

          })
    },
    async getCurrentFilm() {
       this.id = await this.$route.params.id
      axios.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=ru`).then(res => {
          this.currentFilm = res
          // this.idArray = res.data.results
          console.log(this.currentFilm)
          })
    },
    getGuys() {
      this.id = this.$route.params.id
      axios.get(`https://api.themoviedb.org/3/movie/${this.id}/credits?api_key=3b4c6e4b835fcf0c54e75da62ba54f49`).then(res => {
          this.currentGuys = res
          // this.idArray = res.data.results
          console.log(this.currentGuys)
          })
    }
  },
  components: {
    MainPage,
    CustomHeader
  },
  updated() {
    // this.getCurrentFilm()
    // this.getGuys()
    console.log('1')
  },
  beforeMount() {
    this.getSearch()
    this.getGuys()
  this.getCurrentFilm()
  },
}

</script>

<style>
body {
  margin: 0;
}
</style>
