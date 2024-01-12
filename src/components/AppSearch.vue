<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "AppSearch",
  data() {
    return {
      store,
    };
  },
  methods: {
    getList() {
      axios.get(store.endpoint_archetype).then((response) => {
        this.store.archetype = response.data;
      });
    },
  },
  created() {
    this.getList();
  },
};
</script>
<template lang="">
  <div>
    <!-- TODO: aggiungi select e option -->
    <select>
      <option value="" v-for="(archetype, index) in store.archetype" :key='index'>{{ archetype.archetype_name }}</option>
    </select>
    <div >
      
    </div>
    <input type="button" value="Cerca" />
  </div>
</template>
<style lang="scss" scoped>
div {
  margin: 0 auto;
  max-width: 1200px;
  height: 100px;
  position: relative;
  display: flex;

  select {
    position: absolute;
    bottom: 20px;
    padding: 0 10px;
    height: 40px;
  }

  input {
    padding: 10px;
    height: 10px;
    position: absolute;
    bottom: 20px;
    left: 215px;
    height: 40px;
  }
}
</style>
