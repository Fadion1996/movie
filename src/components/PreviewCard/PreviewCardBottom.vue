<template>
  <div class="home">
    <!-- <PreviewCardTop/> -->
    <div class="previewCardBottom">
      <div class="traillers">
        <div class="traillers-header">
          <h3>Трейлеры</h3>
          <ul>
            <li>
              <iframe id="ytplayer" type="text/html" width="640" height="360"
                :src="prefix + results[0].key"
                frameborder="0"/>
            </li>
          </ul>
        </div>
      </div>
      <div class="actors">
        <div class="actors-header">
          <h3>Актёры</h3>
          <ul>
            <li v-for="actor in actors">
              <img src="actors">
            </li>
          </ul>

        </div>
      </div>
      <div class="reviews">
        <div class="reviews-header">
          <h3>Отзывы</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import PreviewCardTop from '@/components/PreviewCard/PreviewCardTop.vue'

  export default {
    name: 'PreviewCardBottom',
    components: {
      PreviewCardTop
    },
    data () {
      return {
        results: [],
        actors: [],
        prefix: "http://www.youtube.com/embed/",
        apiUrl: "https://api.themoviedb.org/3/movie/351286/videos?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=en-US",
        creditsUrl: "https://api.themoviedb.org/3/movie/351286/credits?api_key=3b4c6e4b835fcf0c54e75da62ba54f49"
      }
    },
    methods: {
      getMovie () {
        axios.get(this.apiUrl)
        .then(response => {
          this.results = response.data.results;
          // console.log(this.results);
        })
      },
      getActors () {
        axios.get(this.creditsUrl)
        .then(response => {
          this.actors = response.data.cast;
          // console.log(this.actors);
        })
      }
    },
    mounted () {
      this.getMovie();
      this.getActors();
    }
  }
</script>

<style>
.previewCardBottom {
  width: 1020px;
  /* background-color: black; */
  height: 100px;
}
</style>
