<template>
  <div class="about">
    <PreviewCardTop/>
    <PreviewCardBottom/>
  </div>
</template>

<script>
// @ is an alias to /src
import PreviewCardTop from '@/components/PreviewCard/PreviewCardTop.vue'
import PreviewCardBottom from '@/components/PreviewCard/PreviewCardBottom.vue'

export default {
  name: 'PreviewCard',
  components: {
    PreviewCardTop,
    PreviewCardBottom
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.card-main {
  margin: 0, auto;
  width: 1020px;
  display: flex;
  font-family: 'Roboto', sans-serif;
}

.card-main .photo {
  margin: 20px;
}

.card-main .photo img {
  width: 400px;
}

.actors img {
  width: 100px;
  margin: 0 20px;
  border-radius: 50%;
}

.details {
  width: 50%;
}

.details table {
  width: 520px;
  border-spacing: 0px;
  border-collapse: collapse;
}

.details table tr {
  background-color: #77c1bb;
}

.details table td {
  padding: 5px 0;
}
.details table tr:nth-child(2n) {
  background-color: #ffffff;
}

.details .line-string {
  display: flex;
}

.details .line-string p {
  margin: 0;
}

.previewCardBottom .traillers, .actors, .films-photo, .reviews {
  font-family: 'Roboto', sans-serif;
}

.traillers ul li, .actors ul li, .films-photo ul li {
  list-style-type: none;
}

.traillers ul li {
  text-align: center;
}

.films-photo img {
  width: 200px;
  margin: 0 20px;

}
</style>
