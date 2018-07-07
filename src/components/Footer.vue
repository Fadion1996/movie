<template>
  <footer>
    <aside class="icons">
      <a href="https://www.facebook.com/"><img class="socIcon" src="../assets/fb_icon.png" alt=""></a>
      <a href="https://plus.google.com/"><img class="socIcon" src="../assets/google_icon.png" alt=""></a>
      <a href="https://www.youtube.com/"><img class="socIcon" src="../assets/fb_icon.png" alt=""></a>
      <a href="https://www.instagram.com/?hl=ru"><img class="socIcon" src="../assets/instaG.png" alt=""></a>
    </aside>
    <div class="menu_bottom">
      <a href="#"><p>Главная</p></a>
      <a href="#"><p>Контакты</p></a>
      <a href="#"><p>Правообладателям</p></a>
    </div>
  </footer>
</template>

<script>



</script>

<style>
  footer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /*padding-bottom: 0;*/
    height: 54px;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: #77c1bb;
    padding: 15px 0 20px 0;
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
