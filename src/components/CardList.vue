<template>
  <div class="cardList">
    <b-card
      no-body
      :key="item.id"
      footer-tag="footer"
      class="cardList__item"
      v-for="item in filteredList"
    >
      <b-card-body>
        <b-icon :icon="item.icon"></b-icon>
        <h1>{{ item.title }}</h1>
        <p>{{ item.message }}</p>
      </b-card-body>

      <template #footer>
        <p>R$ {{ item.price }}</p>
        <router-link :to="`/detail/${item.id}`">Saber mais</router-link>
      </template>
    </b-card>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { Component, Vue } from "vue-property-decorator";

@Component({
  computed: {
    ...mapGetters({
      filteredList: "getList",
    }),
  },
})
export default class CardList extends Vue {}
</script>

<style lang="scss">
.cardList {
  display: flex;
  flex-wrap: wrap;
  margin-top: -20px;

  &__item {
    flex: 1;
    margin: 20px;
    border: none !important;
    border-radius: 4px !important;
    box-shadow: 0px 0px 10px 0px #efefef;

    .card-body {
      display: flex;
      color: #ff6900;
      font-size: 30px;
      text-align: center;
      padding: 40px 20px;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      h1 {
        color: #696969;
        margin: 15px 0;
        font-size: 18px;
      }

      p {
        margin: 0;
        color: #696969;
        font-size: 14px;
      }
    }

    .card-footer {
      border: none;
      color: white;
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: white;
      background-image: linear-gradient(to right, #ff9041, #ff6900);

      p,
      a {
        flex: 1;
        margin: 0;
        display: flex;
        font-size: 20px;
      }

      a {
        color: white;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        justify-content: flex-end;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}

@media screen and (min-width: 0em) {
  .card {
    flex: 1 0 500px;
    max-width: 100%;
    box-sizing: border-box;
  }
}

@media screen and (min-width: 50em) {
  .card {
    max-width: calc(50% - 40px);
  }
}

@media screen and (min-width: 60em) {
  .card {
    max-width: calc(25% - 40px);
  }
}
</style>
