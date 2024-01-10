<script>
import { store } from "../store";

export default {
  name: "CardComponent",
  props: {
    card: Object
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template lang="">
  <div class="column" >
    <div>
      <img :src="card.card_images[0].image_url" alt="" />

      <div class="descr">
        <h2>{{ card.name }}</h2>
        <span>{{ card.archetype }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;


.column {
  width: calc(100% / 5 - 10px);
  background-color: $main_color;
  margin-right: 10px;
  margin-bottom: 50px;
  padding-bottom: 30px;

  img {
    width: 100%;
  }

  .descr {
    color: white;
    text-align: center;
    margin-top: 20px;

    h2 {
      text-transform: uppercase;
    }
  }
}
</style>
