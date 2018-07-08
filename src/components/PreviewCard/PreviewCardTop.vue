<template> 
 
<div class="card-main"> 
   <div class="photo"> 
      <img :src="path + itemArr.data.backdrop_path " alt=""> 
   </div> 
   <div class="title"><h1>{{itemArr.data.title}} ({{itemArr.data.release_date }})</h1> </div> 
   <table> 
       <tr> 
           <td>Страна</td> 
           <td>{{itemArr.data.production_countries[0].name}}</td> 
       </tr> 
       <tr> 
           <td>Слоган</td> 
           <td>"{{itemArr.data.tagline}}"</td> 
       </tr> 
       <tr> 
           <td>Режиссер</td> 
           <td>{{itemGuys.data.crew[0].name }}</td> 
       </tr> 
       <tr> 
           <td>Сценарий</td> 
           <td>{{itemGuys.data.crew[1].name}}</td> 
       </tr> 
       <tr> 
           <td>Жанр</td> 
           <td ><p v-for="item in itemArr.data.genres">{{item.name}}</p></td> 
       </tr> 
       <tr> 
           <td>Время</td> 
           <td>{{itemArr.data.runtime}} минут  </td> 
       </tr> 
   </table> 
   <div class="description"> 
       <h3>Про фильм</h3> 
       <p>{{itemArr.data.overview}}</p> 
   </div> 
   </div>
</template> 
 
<script> 
    import axios from 'axios' 
    export default { 
        name: 'PreviewCardTop',
        props: ['itemArr', 'func', 'itemGuys'],
        data() { 
            return { 
                id: this.$route.params.id,
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
        }, 
        mounted() {
        },
        beforeMount() { 
            this.func() 
        } 
    }
</script> 

<style> 
 
 
</style> 
