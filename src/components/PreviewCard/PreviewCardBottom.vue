<template>
  <div class="previewCardBottom">
    <div class="traillers">
      <div class="traillers-header">
        <h3>Трейлер</h3>
      </div>
      <ul>
        <li>
          <iframe id="ytplayer" type="text/html" width="640" height="360"
            :src="videoPrefix + results[0].key"
            frameborder="0" allowfullscreen/>
        </li>
      </ul>
    </div>
    <div class="actors">
      <div class="actors-header">
        <h3>Актёры</h3>
      </div>
      <ul>
        <li v-for="actor in actors">
          <img :src="photoPrefix + actor.profile_path">
          <p>{{actor.name}}</p>
        </li>
      </ul>
    </div>
    <div class="films-photo">
      <div class="films-photo-header">
        <h3>Кадры из фильмов</h3>
      </div>
      <carousel>
        <slide :autoplay="true" :perPage="2">
          <ul>
            <li v-for="photo in filmPhotos">
              <img :src="photoPrefix + photo.file_path">
            </li>
          </ul>
        </slide>
      </carousel>
    </div>
    <div class="reviews">
      <div class="reviews-header">
        <h3>Отзывы</h3>
      </div>
        <div class="comments">
          <p><b>{{comments.author}}</b></p>
          <p>{{comments.content}}</p>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { Carousel, Slide } from 'vue-carousel';

  export default {
    name: 'PreviewCardBottom',
    prop: [],

    data () {
      return {
        results: [],
        actors: [],
        filmPhotos: [],
        comments: [],
        videoPrefix: 'http://www.youtube.com/embed/',
        photoPrefix: 'https://image.tmdb.org/t/p/w500',
        apifirst: 'https://api.themoviedb.org/3/movie/',
        apikey: 'api_key=3b4c6e4b835fcf0c54e75da62ba54f49',
        video: '/videos?',
        credits: '/credits?',
        image: '/images?',
        reviews: '/reviews?',
        id: '351286',
        lang: '&language=en-US&include_image_language=en',
        apiCredits: 'https://api.themoviedb.org/3/movie/351286/credits?api_key=3b4c6e4b835fcf0c54e75da62ba54f49',
        apiImage: 'https://api.themoviedb.org/3/movie/351286/images?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=en-US&include_image_language=en',
        apiComments: "https://api.themoviedb.org/3/movie/351286/reviews?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=en-US&page=1",
        // apiVideo: apifirst + id + video + apikey,
        apiVideo: 'https://api.themoviedb.org/3/movie/351286/videos?api_key=3b4c6e4b835fcf0c54e75da62ba54f49'
      }
    },
    components: {
      Carousel,
      Slide
    },
    methods: {
      getMovie () {
        axios.get(this.apiVideo)
        .then(response => {
          this.results = response.data.results;
          // console.log(this.results);
        })
      },
      getActors () {
        axios.get(this.apiCredits)
        .then(response => {
          this.actors = response.data.cast;
          // console.log(this.actors);
        })
      },
      getFilmPhoto () {
        axios.get(this.apiImage)
        .then(response => {
          this.filmPhotos = response.data.posters;
          // console.log(this.filmPhotos);
        })
      },
      getComments () {
        axios.get(this.apiComments)
        .then(response => {
          this.comments = response.data.results[0];
          // console.log(this.comments);
        })
      }
    },
    mounted () {
      this.getMovie();
      this.getActors();
      this.getFilmPhoto();
      this.getComments();
    }
  }
</script>

<style>
.actors ul {
  display: flex;
}
.films-photo ul {
  display: flex;
}
</style>
