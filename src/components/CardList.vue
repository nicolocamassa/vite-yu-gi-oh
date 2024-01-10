<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "CardList",
  data() {
    return {
      store,
    };
  },
  methods: {
    getList() {
      axios.get(store.endpoint).then((response) => {
        this.store.cardList = response.data.data;
      });
    },
  },
  created() {
    this.getList();
  },
};
</script>
<template lang="">
  <div class="row">
    <div class="column" v-for="(card, index) in store.cardList">
      <div>
        <img :src="card.card_images[0].image_url" alt="" />

        <div class='descr'>
            <h2>{{ card.name }}</h2>
            <span>{{ card.archetype }}</span>
        </div>
      </div>
    </div>   
  </div>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    .row{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        .column{
            width: calc(100% / 5 - 10px);
            background-color: $main_color;
            margin-right: 10px;
            margin-bottom: 50px;
            padding-bottom: 30px;
            

            img{
                width: 100%;
            }

            .descr{
                color: white;
                text-align: center;
                margin-top: 20px;

                h2{
                    text-transform: uppercase;
                }
            }
        }
    }
</style>
