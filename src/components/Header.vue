<template>
<div class="block-header">
 <div class="nav-header one">
    <div class="icon-button" @click="show = !show">
     <img src="../assets/icon-button360.png"  alt="">
     </div>
     <div>
         <img src="../assets/logo360.png" alt="">
     </div>
     <div>
         <p>Moogle</p>
     </div>
         <button type="button" class="button" name="button" v-on:click="status=!status">Search</button>

 </div>
 <div class="nav-header two">
     <input id="tab1" type="radio" name="tabs" checked>
  <label for="tab1">Фильмы</label>

  <input id="tab2" type="radio" name="tabs">
  <label for="tab2">Сериалы</label>

  <input id="tab3" type="radio" name="tabs">
  <label for="tab3">Избранное</label>
 </div>
 <aside   :class="show?'slider active': 'slider'">
   <div class="sidebar">
        <img src="../assets/1024-Composed.png" alt="">
   </div>
   <ul class="list-menu">
       <p>Фильмы</p>
       <li>
       <router-link to="/">ТОП 100</router-link>
       </li>
        <li>
      <router-link to="/">В прокате</router-link>
      </li>
       <li>
      <router-link to="/">Популярные</router-link>
      </li>
   </ul>
   <ul class="list-menu">
       <p>Сериалы</p>
       <li>
       <router-link to="/">ТОП 100</router-link>
       </li>
        <li>
      <router-link to="/">В прокате</router-link>
      </li>
       <li>
      <router-link to="/">Популярные</router-link>
      </li>
   </ul>
  <router-link class="favorites" to="/">Избранное</router-link>
 </aside>

 <search :msg="status"  ></search>
 </div>

</template>
<script>
import search from '@/components/search'
    export default {
        name: 'CustomHeader',
        data() {
            return {
                status: false,
                show: false
            }
        },
        components: {
           search
        },
        methods: {
          run () {
            if(this.dat == false) {
              return false
            }
            else {
              return true
            }

          }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .block-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-top: 40px;
        position: relative;
    }
    .one {
        width: 100%;
        height: 80px;
        background-color: #77c1bb;
        display: flex;
        flex-direction: row;
    }
    .icon-button {
        margin-top: 6px;
        cursor: pointer;
    }
    .one div img {
        margin-top: 20px;
        margin-left: 20px;
    }
    .one div p {
        margin-top: 23px;
        margin-left: 5px;
    }

    .one button {
        position: absolute;
        right: 20px;
        top: 50px;

    }
    .two {
        width: 100%;
        height: 50px;
        border-bottom: 4px solid #a5aaaf;
        display: flex;
        justify-content: center;
    }
    .one button {
        border: 0px;
        background-color: #77c1bb;
        border-bottom: 1px solid #262626;
        width: 200px;
    }
   .two input {
        display: none;

    }
    label {
        display: inline-block;
        margin: 0 0 -1px;
        padding: 15px 25px;
        font-weight: 600;
        text-align: center;
        color: #bbb;
        border: 1px solid transparent;
        font-family: sans-serif;
    }
    label:before {
        font-family: fontawesome;
        font-weight: normal;
        margin-right: 10px;
    }
    label[for*='1']:before {

    }
    label[for*='2']:before {

    }
    label[for*='3']:before {
    }
    label:hover {
        color: #888;
        cursor: pointer;
    }
    .two input:checked+label {
        color: #555;
        border: 1px solid #ddd;
        border-top: 1px solid #fff;
        border-bottom: 3px solid #000;
    }
    #tab1:checked~#content1,
    #tab2:checked~#content2,
    #tab3:checked~#content3,
    #tab4:checked~#content4 {
        display: block;
    }
    .slider {
      position: absolute;
      top: 80px;
      height: 100vh;
      width: 20%;
      transition: all .3s cubic-bezier(.65, .05, .36, 1);
      transform: translate(-100%);
      border-right: 1px solid #757677;
      z-index: 1000;
      background-color: #ffffff;
    }
  .slider.active {
    transform: translate(0);
  }
  .sidebar {
    height: 200px;
    background-color: #77c1bb;
    text-align: center;
  }
  .list-menu {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  .favorites {
    padding-left: 30px;
  }
</style>
