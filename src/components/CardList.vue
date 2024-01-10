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
                this.store = response.data.data
            })
        }
    },created(){
        this.getList()
    }
};
</script>
<template lang="">
  <div>ciao</div>
</template>
<style lang=""></style>
