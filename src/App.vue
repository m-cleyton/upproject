<template>
  <div id="app">
    <Carousel />
    <router-view />
  </div>
</template>

<script lang="ts">
import Carousel from "@/components/Carousel.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Carousel,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap.scss";

#app {
  padding: 40px;
  -webkit-font-smoothing: antialiased;
}
</style>
