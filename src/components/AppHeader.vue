<script>
export default {
  name: 'AppHeader',
  data(){
    return{

    }
  }
};
</script>
<template lang="">
  <header>
    <img src="../assets/Yu-Gi-Oh!.png" alt="Logo">
    <div>
      Yu-Gi-Oh API
    </div>
  </header>
</template>
<style lang="scss" scoped>
  header{
    background-color: white;
    width: 100%;
    height: 100px;
    padding: 10px 20px;
    display: flex;
    align-items: center;

    img{
      height: 40%;
    }

    div{
        font-size: 40px;
        margin-left: 20px;
      }
  }
</style>
