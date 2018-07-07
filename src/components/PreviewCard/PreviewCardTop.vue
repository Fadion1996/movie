<template>
  <div class="TopCard">

  </div>

</template>
<script>
  import axios from 'axios'
  export default {
    name: 'PreviewCardTop',
    data () {
      return {
        searcResults: [],
        searchValue: "https://youtu.be/",
        apiUrl: "https://api.themoviedb.org/3/movie/12/videos?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=en-US"
      }
    },
    methods: {
      getSearch () {
          axios.get(this.apiUrl).then(res => console.log(res))
      }
    }
  }
</script>
<style>

</style>
