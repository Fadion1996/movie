<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/PreviewCard">PreviewCardBottom</router-link>
      <router-view/>
    </div>
    <div></div>
  </div>
</template>

<script>

import axios from 'axios'

export default {

  name: 'App',
  data () {
    return {
      searcResults: [],
      searchValue: '',
      apiUrl: "https://api.themoviedb.org/3/movie/12/videos?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=en-US"
    }
  },
  methods: {
    getSearch () {
        axios.get(this.apiUrl).then(res => console.log(res))
//      let options = {
//        params: {
//            query: this.searchValue
//        }
//      }
//      axios.get(this.apiUrl, options).then(function(response) {
//
//        //  console.log(window.location.href)
//        this.searcResults = response.data.results
//        window.location.href = '#/search'
//        //this.searchValue = ''
//
//      },
//         console.log
//      )
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
