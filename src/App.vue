<template>
  <div class="container">
      <MainPage :func="getCurrentFilm" :funcGuys="getGuys" :items="searcResults" />
      <router-view :itemArr="this.currentFilm" :itemGuys="this.currentGuys" />
  </div>
</template>

<script>

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
    MainPage
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

    .list-film {
        width: 100%;
        max-width: 1200px;
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        margin: 0 auto;
    }
    .list-film li {
        margin: 20px 0px 0px 40px;
        list-style: none;
        width: 46%;
        position: relative;
    }
    .list-film img {
        width: 100%
    }
    .list-film h3 {
        position: absolute;
        top: 260px;
        left: 20px;
        color: #fff;
    }
    .star-ring {
        position: absolute;
        top: 10px;
        left: 450px;
    }
    .star-ring img {
        width: 40px;
        height: 40px;
    }
    .list-film .block-photo:hover {
        opacity: 0.5;
        transition: 1.5s;
    }
</style>

