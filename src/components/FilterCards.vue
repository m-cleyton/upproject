<template>
  <div class="filterCards">
    <div
      :key="filterItem.icon"
      v-for="filterItem in filters"
      v-on:click="setNewFilter(filterItem.value)"
      v-bind:class="{ active: filterItem.value === filterSelected }"
    >
      <b-icon :icon="filterItem.icon"></b-icon>
      <p>{{ filterItem.value }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState } from "vuex";
import { Component, Vue } from "vue-property-decorator";

@Component({
  computed: {
    ...mapState({
      filterSelected: "filter",
    }),
  },
})
export default class FilterCards extends Vue {
  protected filterSelected!: string;

  public filters = [
    { icon: "globe2", value: "Todos" },
    { icon: "briefcase", value: "Profissional" },
    { icon: "shield-lock", value: "Reguladores" },
    { icon: "tree", value: "Sócio Ambiental" },
    { icon: "vector-pen", value: "Jurídico" },
    { icon: "slash-circle", value: "Listas Restritivas" },
    { icon: "star", value: "Mídia / Internet" },
    { icon: "gem", value: "Bens e Imóveis" },
    { icon: "person", value: "Cadastro" },
    { icon: "cash", value: "Financeiro" },
  ];

  setNewFilter(newFilter: string): void {
    this.$store.commit("changeFilter", newFilter);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.filterCards {
  display: flex;
  height: 80px;
  margin: 20px;
  flex-direction: row;
  border-radius: 4px;
  border: 1px solid #efefef;
  background-color: #f9f9f9;

  div {
    flex: 1;
    display: flex;
    color: #696969;
    font-size: 20px;
    align-items: center;
    transition: all 0.3s;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid #efefef;

    &:last-child {
      border: none;
    }

    &:hover {
      color: #ff6900;
      cursor: pointer;
    }

    p {
      margin: 10px 0 0 0;
      font-size: 14px;
    }

    &.active {
      color: white;
      border: none;
      border-radius: 4px;
      transform: scale(1.1, 1.1);
      box-shadow: 0px 0px 10px 0px #ccc;
      background-image: linear-gradient(to right, #ee853e, #ff6900);
    }
  }
}
</style>
