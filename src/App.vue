<script>
import AppHeader from './components/AppHeader.vue';
import AppLoader from './components/AppLoader.vue';
import CardList from './components/CardList.vue';
import AppSearch from './components/AppSearch.vue';


import { store } from './store'

export default {
  components: {
    AppHeader,
    AppLoader,
    CardList,
    AppSearch
  },
  data() {
    return {
      store
    }
  }, methods: {
    getList() {
      axios.get(store.endpoint).then((response) => {
        this.store.cardList = response.data.data;
        this.store.loading = false;
      });
    },
  }
};
</script>
<template lang="">
  <AppLoader v-if='!this.store.loading'/>
  <AppHeader v-else/>
  
  <AppSearch />

  <div class="container">
  <div class='banner'>Carte trovate</div>

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
