<script>
import AppHeader from './components/AppHeader.vue';
import AppLoader from './components/AppLoader.vue';
import CardList from './components/CardList.vue';


import { store } from './store'

export default {
  components: {
    AppHeader,
    AppLoader,
    CardList,
  },
  data() {
    return {
      store
    }
  }, 
  methods: {
    searchedCard(){

      console.log(store.search)
      if(store.search !== ''){
        store.endpoint += `&archetype=${store.search}`
      }
    }
  }
};
</script>
<template lang="">
  <AppLoader v-if='!this.store.loading'/>
  <AppHeader v-else/>
  

  <div class="container">
  <div class='banner' v-if='store.cardList.length > 0'>{{ store.cardList.length }} carte trovate</div>
  <div class='banner' v-else>Non sono state trovate carte</div>


<CardList />

</div>

</template>
<style lang="scss">
@use './styles/general.scss' as *;

.container {
  background-color: white;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  justify-content: center;

  .banner {
    width: calc(100%);
    height: 60px;
    background-color: rgb(31, 31, 31);
    color: white;
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 20px;
    font-family: sans-serif;
  }
}
</style>
