<template>
  <div class="valor">
    <span>R$</span>
    <h1>{{ valor }}</h1>
    <b-button>{{ buttonText }}</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class CardList extends Vue {
  @Prop({ type: String }) valor!: string;
  @Prop({ type: String }) buttonText!: string;
}
</script>

<style lang="scss">
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
</style>
