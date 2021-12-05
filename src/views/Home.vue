<template>
  <div id="home-page-wrapper">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        First section ...
      </div>
      <div class="section">
        Second section ...
      </div>
      <div class="section">
        Third section ...
      </div>
    </full-page>
  </div>
</template>

<script>
// import $ from 'jquery';
export default {
  name: 'Home',
  components: {},
    data() {
      return {
        options: {
          scrollOverflow: true,
          scrollBar: false,
          menu: '#menu',
          navigation: true,
          anchors: ['page1', 'page2', 'page3'],
          sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
        },
      }
    },
  mounted() {
  }
}
</script>

<style src="../assets/css/home.css" scoped></style>
