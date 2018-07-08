<template>
  <footer>
    <aside class="icons" >
      <a v-for="item in images" :href="item.a"><img class="socIcon" :src="item.src" :alt="item.alt"></a>

    </aside>
    <div class="menu_bottom">
      <a v-for="item in bottomMenu" :href="item.a"><p>{{item.message}}</p></a>
    </div>
  </footer>
</template>

<script>

 export default {
   data() {
     return {
       images: [
         {
           a: "https://www.facebook.com/",
           src: require("../assets/fb_icon.png"),
           alt: "facebook"
         },
         {
           a: "https://plus.google.com/",
           src: require("../assets/google_icon.png"),
           alt: "google"
         },
         {
           a: "https://www.youtube.com/",
           src: require("../assets/fb_icon.png"),
           alt: "youtube"
         },
         {
           a: "https://www.instagram.com/?hl=ru",
           src: require("../assets/instaG.png"),
           alt: "instagram"
         }
       ],
       bottomMenu: [
         {
           a: "",
           message: "Главная"
         },
         {
           a: "",
           message: "Контакты"
         },
         {
           a: "",
           message: "Правообладателям"
         }
       ]
     }
   },
   methods: {
     getImage() {

     }
   }
 }


</script>

<style>
  footer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /*padding-bottom: 0;*/
    height: 54px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #77c1bb;
    padding: 15px 0 20px 0;
  }
  .icons{
    display: flex;
    justify-content: space-between;
    width: 110px;
  }
  .menu_bottom>a{
    text-decoration: none;
    color: #000000;
    margin: 0 16px 0 16px;
  }
  .menu_bottom>a>p{
    margin: 0;
  }
  .menu_bottom{
    display: flex;
  }

  .icons>a>img:hover{
    background: yellow;
    border-radius: 50%;
  }
  .socIcon{
    width: 21px;
    height: 21px;
  }

</style>
