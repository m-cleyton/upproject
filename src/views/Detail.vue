<template>
  <div class="detail" v-if="itemSelected">
    <div class="detail__title">
      <router-link to="/">
        <b-icon icon="chevron-left"></b-icon>
      </router-link>
      <h1>{{ itemSelected.title }}</h1>
    </div>

    <div class="detail__body">
      <p>{{ itemSelected.message }}</p>
      <ValorMore :valor="itemSelected.price" buttonText="Habilitar" />
    </div>
  </div>
</template>

<script lang="ts">
import ValorMore from "@/components/ValorMore.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: { ValorMore },
})
export default class Detail extends Vue {
  @Prop({ type: String })
  id!: string;

  itemSelected = null;

  mounted(): void {
    this.itemSelected = this.$store.state.list.find(
      (item) => item.id === parseInt(this.id)
    );
  }
}
</script>

<style lang="scss">
.detail {
  padding: 40px 100px;

  &__title {
    display: flex;
    color: #ff6900;
    flex-direction: row;
    align-items: center;

    h1 {
      font-size: 24px;
      margin: 0 0 0 20px;
      font-weight: normal;
    }

    a {
      font-size: 30px;
      color: #ff6900;

      &:hover {
        text-decoration: none;
      }
    }
  }

  &__body {
    flex: 1;
    display: flex;
    flex-direction: column;

    p {
      flex: 1;
      color: #ccc;
      margin-top: 20px;
    }
  }
}
</style>
