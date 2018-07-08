<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/PreviewCard">PreviewCard</router-link>
      <router-view/>
    </div>
    <div></div>
  </div>
</template>

<script>

import PreviewCard from '@/components/PreviewCard'
import axios from 'axios'

export default {

  name: 'App',
  data () {
    return {
      searcResults: [],
      searchValue: '',
      apiUrl: "https://api.themoviedb.org/3/movie/12/videos?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=en-US"
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    text-decoration: none;
    color: #2c3e50;
  }
  a .router-link-exact-active {
    color: #42b983;
  }
}
</style>
