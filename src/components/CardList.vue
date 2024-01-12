<script>
import axios from "axios";
import { store } from "../store";
import CardComponent from "./CardComponent.vue";
import AppSearch from './AppSearch.vue';

export default {
  name: "CardList",
  data() {
    return {
      store,
    };
  },
  components:{
    CardComponent,
    AppSearch
  },
  methods: {
    getList() {
      let api = store.endpoint;

      if(store.search !== ''){
        api += `&archetype=${store.search}`
      }

      console.log(api)

      axios.get(api).then((response) => {
        this.store.cardList = response.data.data;
      });
    },
    searchedCard(){
      this.getList();
      
    }
  },
  created() {
    this.getList();
  },
};
</script>
<template lang="">
    <AppSearch @searched='searchedCard'/>
  <div class="row" >
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
