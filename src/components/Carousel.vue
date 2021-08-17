<template>
  <div class="carousel">
    <b-carousel
      id="carousel"
      img-width="1024"
      img-height="300"
      :interval="3000"
    >
      <!-- Slides with custom text -->
      <b-carousel-slide img-blank>
        <div class="slide__container">
          <div class="slide__container-info">
            <div class="title">
              <img src="../assets/logo-white.png" />
              <h1>Histórico Empresarial</h1>
            </div>

            <p>
              O aplicativo Histórico Empresarial permite ao usuário ter acesso a
              todos os fatos e acontecimentos relevantes de uma empresa desde o
              seu ano de fundação.
            </p>

            <ValorMore valor="40,00" buttonText="Saiba mais" />
          </div>

          <div class="slide__container-image">
            <img src="../assets/carousel-image.png" />
          </div>
        </div>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-blank>
        <div class="slide__container">
          <div class="slide__container-info">
            <div class="title">
              <img src="../assets/logo-white.png" />
              <h1>Histórico Empresarial</h1>
            </div>

            <p>
              O aplicativo Histórico Empresarial permite ao usuário ter acesso a
              todos os fatos e acontecimentos relevantes de uma empresa desde o
              seu ano de fundação.
            </p>

            <ValorMore valor="40,00" buttonText="Saiba mais" />
          </div>

          <div class="slide__container-image">
            <img src="../assets/carousel-image.png" />
          </div>
        </div>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script lang="ts">
import ValorMore from "@/components/ValorMore.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { ValorMore },
})
export default class Carousel extends Vue {}
</script>

<style lang="scss">
.carousel {
  border-bottom: 2px solid #ff6900;

  .carousel-item {
    height: 300px;

    img {
      height: 300px;
    }
  }
}

.carousel-caption {
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  padding: 0 !important;
}

.slide__container {
  width: 100%;
  display: flex;
  color: black;
  height: 300px;
  background: green;
  flex-direction: row;
  background-image: linear-gradient(to right, #004d73 30%, #00020a, #00020a);

  &-image {
    flex: 1;
    display: flex;
    justify-content: flex-end;

    img {
      display: flex;
      height: 300px;
    }
  }

  &-info {
    flex: 1;
    display: flex;
    color: white;
    padding: 40px;
    flex-direction: column;

    p {
      flex: 1;
      margin-top: 20px;
      text-align: start;
    }

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;

      img {
        height: 40px;
        margin-right: 20px;
      }

      h1 {
        margin: 0;
        font-size: 30px;
        padding-left: 20px;
        border-left: 1px solid white;
      }
    }

    .valor {
      display: flex;
      margin-top: 10px;
      flex-direction: row;
      align-items: center;

      span {
        margin-right: 2px;
        align-self: flex-end;
      }

      h1 {
        margin: 0;
        font-size: 36px;
        line-height: 36px;
      }

      button {
        border: none;
        color: white;
        width: 130px;
        font-weight: bold;
        margin-left: 20px;
        background-image: linear-gradient(to right, #ee853e, #ff6900);
      }
    }
  }
}
</style>
