<template> 
 <div class="list">
<ul  class="list-film"> 
  <li v-for="item in items.results" v-bind:key="item.id">
    <router-link v-on:click.native="checkArray" :to="{ 'name': 'PreviewCard', 'params': {'id' : item.id} }">
     <div class="block-photo"> <img :src="path + item.backdrop_path" alt=""> 
       <h3>{{item.title}}</h3></div>
       <div class="star-ring"></div>
       </router-link>
       </li>
</ul> 
 </div>

 
</template> 
 
<script> 
    import axios from 'axios' 
    export default { 
        name: 'MainPage', 
               props: ['items', 'func', 'funcGuys'], 
 
        data() { 
            return { 
                result:[],
                tt:[],
                path: 'https://image.tmdb.org/t/p/w500', 
                 
            } 
        }, 
        methods: { 
          checkArray() { 
            this.func()
            this.funcGuys()
          }
        }
    } 
     
 
</script> 
 
 
<style scoped> 

.list {
  padding-bottom: 120px;
}


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
 
