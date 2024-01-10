<script>
import AppHeader from './components/AppHeader.vue';
import AppLoader from './components/AppLoader.vue';
import AppMain from './components/AppMain.vue';


import { store } from './store'

export default {
  components: {
    AppHeader,
    AppMain,
    AppLoader

  },
  data(){
    return{
      store
    }
  }, methods:{
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
  <AppMain />

</template>
<style lang="scss">
  @use './styles/general.scss'
</style>
