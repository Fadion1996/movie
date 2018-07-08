<template>
  <div class="search"  v-show="msg">
    <div class="logo">
    <img src="../assets/1024-Composed-layer@1X.png" alt="icon">
    </div>
    <img src="../assets/musica-searcher.svg" alt="icon" class="icon">
    <input type="text" v-model="searchValue" v-on:change="getSearch" class="search_inp" placeholder="Search for a movie">
  </div>
</template>

<script>
// import home from '@/components/home'
import axios from 'axios'

export default {
  name: 'search',
  props: ['msg'],
  data () {
    return {
      searcResults: [],
      searchValue: ''
    }
  },
  methods: {
    runAway () {
      this.msg = !this.msg ;
      console.log(this.msg)
    },

    setResul (result) {
      console.log('result', result)
      this.searcResults = result.data.results
      console.log(this.searcResults)
      console.log(this.msg)
    },

    getSearch () {
       console.log(this.searchValue)
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=ru&query=${this.searchValue}&page=1&include_adult=false`)
      .then(this.setResul)
      this.runAway ()
    }
  }
}

</script>

<style>
  body {
    position: relative;
  }
  .search {
    position: absolute;
    top: 0;
    width: 100%;
    height: 500px;
    background-color: #77c1bb;
    text-align: center;
    z-index: 1000;
  }
  .icon {
    width: 20px;
    height: 20px;
    fill: #fff;
  }
  .logo {
    padding-top: 150px;
    text-align: center;
  }
  .search_inp:focus {
    outline: none;
  }
  .search_inp {
    color: #fff;
    background-color: #77c1bb;
    /* border-top: 2px solid #fff; */
    border: none;
    border-bottom: 2px solid #fff;
    width: 300px;
  }
</style>
