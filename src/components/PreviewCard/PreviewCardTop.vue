<template>

<div class="card-main">
   <div class="photo">
      <img :src="path + results " alt="">
   </div>

   <div class="details">
     <div class="title"><h3>{{titles}} ({{release_dates }})</h3></div>
     <table>
         <tr>
             <td>Страна</td>
             <td>{{country}}</td>
         </tr>
         <tr>
             <td>Слоган</td>
             <td>"{{taglines}}"</td>
         </tr>
         <tr>
             <td>Режиссер</td>
             <td>{{productions[0].name }}</td>
         </tr>
         <tr>
             <td>Сценарий</td>
             <td>{{productions[1].name}}</td>
         </tr>
         <tr>
             <td>Жанр</td>
             <td class="line-string"><p v-for="item in genre">{{`${item.name}, &#160;`}}</p></td>
         </tr>
         <tr>
             <td>Время</td>
             <td>{{runtimes}} минут  </td>
         </tr>
     </table>

     <div class="description">
         <h3>Про фильм</h3>
         <p>{{overviews}}</p>
     </div>
   </div>

</div>

</template>

<script>
    import axios from 'axios'
    export default {
        name: 'PreviewCardTop',
        //        props: ['svl'],

        data() {
            return {
                results: [],
                titles: [],
                release_dates: [],
                country: '',
                taglines: '',
                productions: [],
                runtimes: '',
                counter: 1,
                overviews: '',
                genre: [],
                path: 'https://image.tmdb.org/t/p/w500',

            }
        },
        methods: {
            getImage() {

                axios.get("https://api.themoviedb.org/3/movie/351286?api_key=3b4c6e4b835fcf0c54e75da62ba54f49&language=ru").then((response) => {
                    console.log(response);

                    this.results = response.data.backdrop_path
                    this.titles = response.data.title
                    this.release_dates = response.data.release_date.split('-')[0]
                    this.country = response.data.production_countries[0].name
                    this.taglines = response.data.tagline
                    this.genre = response.data.genres
                    this.runtimes = response.data.runtime
                    this.overviews = response.data.overview
                    console.log(this.genre)
                })
            },

            getGuys() {
            axios.get("https://api.themoviedb.org/3/movie/351286/credits?api_key=3b4c6e4b835fcf0c54e75da62ba54f49").then((response) => {
                    console.log(response);
                this.productions = response.data.crew
                this.productions = response.data.crew
              })
        }
        },
        mounted() {

            this.getImage()
        this.getGuys()

        }
    }

</script>


<style>


</style>
