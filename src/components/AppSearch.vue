<script>
export default {
    name: 'AppSearch'
}
</script>
<template lang="">
    <div>
        <select>
            <option value=""></option>
            <option value="1">Alien</option>
            <option value="2">Infernoble Arms</option>
            <option value="3">Noble Knight</option>
            <option value="4">Melodious</option>
            <option value="5">Archfiend</option>
        </select>
        
        <input type="button" value="Cerca">
    </div>
</template>
<style lang="scss" scoped>
    div{
        margin: 0 auto;
        max-width: 1200px;
        height: 100px;
        position: relative;
        display: flex;

        select{
            position: absolute;
            bottom: 20px;
            padding: 0 10px;
            height: 40px;
        }

        input{
            padding: 10px;
            height: 10px;
            position: absolute;
            bottom: 20px;
            left: 145px;
            height: 40px;
        }
    }
</style>