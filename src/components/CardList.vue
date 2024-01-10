<script>
import axios from "axios";
import { store } from "../store";
import CardComponent from "./CardComponent.vue";
export default {
  name: "CardList",
  data() {
    return {
      store,
    };
  },
  components:{
    CardComponent
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
    <CardComponent v-for="(card, index) in store.cardList" :key='index' :card='card' />
  </div>
  
</template>
<style lang="scss" scoped>
    
    .row{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        
    }
</style>
