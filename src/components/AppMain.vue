<script>
import CardList from './CardList.vue';

export default {
    name: 'AppMain',
    components:{
        CardList
    },
};
</script>
<template lang="">
  <div class="container">

        <div class='banner'>Carte trovate</div>
        <CardList />

  </div>
  
</template>
<style lang="scss" scoped>
    .container{
        background-color: white;
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 100px;
        display: flex;
        flex-wrap: wrap;
        padding: 30px;
        justify-content: center;

        .banner{
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
