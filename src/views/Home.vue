<template>
  <div class="home">
    <FilterCards :filter="filter" @change="onFilterUpdate" />
    <Order :order="order" @change="onOrderUpdate" />
    <CardList :filter="filter" :order="order" />
  </div>
</template>

<script lang="ts">
import Order from "@/components/Order.vue";
import CardList from "@/components/CardList.vue";
import FilterCards from "@/components/FilterCards.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Order,
    CardList,
    FilterCards,
  },
})
export default class Home extends Vue {
  filter = "Todos";
  order = "price";

  onFilterUpdate(newFilter: string): void {
    this.filter = newFilter;
  }

  onOrderUpdate(newOrder: string): void {
    this.order = newOrder;
  }
}
</script>
