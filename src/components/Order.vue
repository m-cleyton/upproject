<template>
  <div class="order">
    <h3>Ordernar</h3>
    <b-form-select v-model="orderValue" :options="options"></b-form-select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  computed: {
    orderValue: {
      get() {
        return this.$store.state.order;
      },
      set(value) {
        this.$store.commit("changeOrder", value);
      },
    },
  },
})
export default class Order extends Vue {
  // @ModelSync("order", "change", { type: String })
  // readonly orderValue!: string;

  public options = [
    { value: "price", text: "Preço" },
    { value: "id", text: "Lançamento" },
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.order {
  display: flex;
  margin: 40px 20px;
  flex-direction: row;
  align-items: center;

  h3 {
    font-size: 14px;
    font-weight: bold;
    margin: 0 10px 0 0;
    text-transform: uppercase;
  }

  select {
    width: 200px;
  }
}
</style>
