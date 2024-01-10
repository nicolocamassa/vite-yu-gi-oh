<script>
import axios from 'axios';
import { store } from '../store'
export default {
    name: 'CardList',
    data(){
        return{
            store
        }
    }, methods:{
        getList(){
            axios.get(store.endpoint).then((response) => {
                this.store.cardList = response.data.data
                console.log("🚀 ~ axios.get ~ this.store.cardList:", this.store.cardList)
            })
        }
    },created(){
        this.getList()
    }
};
</script>
<template lang="">
  <div v-for='card, index in store.cardList'>
    <h1>{{ card.name }}</h1>
    <h1>{{ card.archetype }}</h1>
    <img :src="card.card_images[0].image_url" alt="">
  </div>
</template>
<style lang=""></style>
